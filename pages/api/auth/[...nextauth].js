import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    // Configure one or more authentication providers

    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                identifier: {
                    label: "E-Mail",
                    type: "text",
                    placeholder: "user@provider.tld",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)
                const res = await fetch(
                    "https://69-164-205-56.ip.linodeusercontent.com/api/auth/local",
                    {
                        method: "POST",
                        body: JSON.stringify(credentials),
                        headers: { "Content-Type": "application/json" },
                    }
                );
                const userResp = await res.json();
                const user = userResp.user;
                // If no error and we have user data, return it
                if (res.ok && user) {
                    return {
                        name: user.firstname,
                        email: user.email,
                        phoneConfirmed: user.phoneConfirmed,
                        jwt: userResp.jwt,
                    };
                }
                // Return null if user data could not be retrieved
                return null;
            },
        }),
        // ...add more providers here
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.phoneConfirmed = user.phoneConfirmed;
                token.jwt = user.jwt;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.phoneConfirmed = token.phoneConfirmed;
                session.accessToken = token.jwt;
            }
            return session;
        },
    },
};
export default NextAuth(authOptions);
