import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function handler(req, res) {
    async function phoneVerified(userid) {
        const res = await fetch(
            `https://69-164-205-56.ip.linodeusercontent.com/api/users/${userid}`,
            {
                method: "PUT",
                body: JSON.stringify({
                    phoneConfirmed: true,
                }),
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer d99709963c15b50c8ee7f409191dc06cabf0a18d1bc4e43cd6b78f1f9e4f33d04cd767d690d4c238036057a808cdf6e470492f5ce4af744838562d046cac6b26cd37ddbfde18b0b35fe2476ce26b553bc6c1f86353f35f2addf2d48c9a64276ef1dab4499849332ec89ddcdba15f9e9d3f2f13b08084765da525655a44cd2f0a",
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                return true;
            })
            .catch((error) => {
                return false;
            });
    }

    if (req.method == "POST") {
        const session = await getServerSession(req, res, authOptions);
        if (!session) {
            res.status(401).json({ message: "You must be logged in." });
            return;
        }

        fetch("https://69-164-205-56.ip.linodeusercontent.com/api/users/me", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsImlhdCI6MTY4NzExMzk0MSwiZXhwIjoxNjg5NzA1OTQxfQ.GRwW_cxLd8ppAg4QFSDV7QO9zCMkYoRD0U5umXCeXa0",
            },
        }).then((resApi) => {
            if (resApi.status === 200) {
                resApi.json().then((data) => {
                    if (data.otp === req.body.otpInput) {
                        phoneVerified(data.id);
                        res.status(200).json({
                            message: "SUCCESS - YOUR PHONE HAS BEEN VERIFIED",
                        });
                    } else {
                        res.status(406).json({
                            error: "OTP IS WRONG",
                        });
                    }
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
}
