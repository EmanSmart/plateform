import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function RegisterForm() {
    const [email, setEmail] = useState();
    const data = {
        email: email,
    };

    function forgetPasswordRequest() {
        fetch(
            "https://69-164-205-56.ip.linodeusercontent.com/api/auth/forgot-password",
            {
                method: "POST",
                body: JSON.stringify({email: email}),
                headers: { "Content-Type": "application/json" },
            }
        ).then((res) => {
          res.json().then((data) => {
              console.log(data);
              alert(`Email is has been sent to : ${email}`);
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
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email address"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
                <Button
                    variant="primary"
                    type="submit"
                    onClick={forgetPasswordRequest}
                >
                    Get Reset Password Link
                </Button>
            </div>
        </>
    );
}
