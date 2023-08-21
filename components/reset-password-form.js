import { useState } from "react";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ResetPasswordForm() {
    const router = useRouter();
    const { code } = router.query;
    const [password, setPassword] = useState();
    const [confirmPassword, setPasswordConfirmation] = useState();

    function resetPasswordRequest() {
        console.log(data);

        if (password !== confirmPassword || code.length < 10) {
            alert("Error Passowrd Not Matched");
            return;
        }

        fetch(
            "https://69-164-205-56.ip.linodeusercontent.com/api/auth/reset-password",
            {
                method: "POST",
                body: JSON.stringify({
                    code: code,
                    password: password,
                    passwordConfirmation: confirmPassword,
                }),
                headers: { "Content-Type": "application/json" },
            }
        ).then((res) => {
            if (res.status !== 200) {
                console.log(data);
                res.json().then((data) => {
                    alert(data.error.message);
                });
                return;
            }
            res.json().then((data) => {
                console.log(data);
                alert(`Done !`);
            });
        });
    }

    return (
        <>
            <div>
                <Form>
                    <Row>
                        <Col md={6}>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>New Paaword</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter new password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>Confirm New Paaword</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter new password"
                                    onChange={(e) =>
                                        setPasswordConfirmation(e.target.value)
                                    }
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
                <Button
                    variant="primary"
                    type="submit"
                    onClick={resetPasswordRequest}
                >
                    Reset Password
                </Button>
            </div>
        </>
    );
}
