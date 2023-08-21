import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function register(req, res) {
    const session = await getServerSession(req, res, authOptions);

    console.log("test 000000");
    console.log(session);

    if (req.method == "POST") {
        // if (password !== passwordConfrim || password.length < 8) {
        //     res.status(400).json({error:"Password Not Matched"})
        //     return;
        // }

        //res.status(200).json({ msg: "test" });
        let otp = Math.floor(100000 + Math.random() * 900000);

        const userData = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            phone: req.body.phone,
            email: req.body.email,
            username: req.body.email,
            password: req.body.password,
            otp: otp,
        };

        fetch(
            "https://69-164-205-56.ip.linodeusercontent.com/api/auth/local/register",
            {
                method: "POST",
                body: JSON.stringify(userData),
                headers: { "Content-Type": "application/json" },
            }
        ).then((resApi) => {
            if (resApi.status === 200) {
                resApi.json().then((data) => {
                    console.log(data.user);
                    res.status(resApi.status).json({
                        message: data.user.email,
                    });
                });
            } else {
                resApi.json().then((data) => {
                    res.status(resApi.status).json({
                        error: data.error.message,
                    });
                    return;
                });
            }
        });
    }

    //res.status(200).json({ message: "ok", otp: `${otp}` });
}
