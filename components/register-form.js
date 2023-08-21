import { useRef } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function RegisterForm() {
    const firstname = useRef();
    const lastname = useRef();
    const [phone, setPhone] = useState();
    const email = useRef();
    const password = useRef();
    const passwordConfrim = useRef();

    function sendRegisterData(event) {
        event.preventDefault();

        const registerData = {
            firstname: firstname.current.value,
            lastname: lastname.current.value,
            phone: phone,
            email: email.current.value,
            username: email.current.value,
            password: password.current.value,
            passwordConfrim: passwordConfrim.current.value,
        };

        console.log("registerData");
        console.log(registerData);

        fetch("/api/auth/register", {
            method: "POST",
            body: JSON.stringify(registerData),
            headers: { "Content-Type": "application/json" },
        }).then((res) => {
            if (res.status === 200) {
                res.json().then((data) => {
                    console.log(data);
                    alert(`New Account Has Been Created : ${data.message}`);
                });
            } else {
                res.json().then((data) => {
                    alert(data.error);
                    return;
                });
            }
        });
    }

    return (
        <>
            <Form onSubmit={sendRegisterData}>
                <Row>
                    <Col>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicFirstname"
                        >
                            <Form.Label>
                                <b>First Name</b>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter first name"
                                ref={firstname}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicLastname"
                        >
                            <Form.Label>
                                <b>Last Name</b>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter last name"
                                ref={lastname}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>
                                <b>Phone:</b>
                            </Form.Label>
                            <PhoneInput
                                type="text"
                                inputClass={"form-control"}
                                country={"sa"}
                                enableSearch={true}
                                value={phone}
                                onChange={(phone) => setPhone(phone)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email address"
                                ref={email}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                ref={password}
                            />
                            <Form.Text className="text-muted">
                                At least 8 characters
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                ref={passwordConfrim}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Create Account
                </Button>
            </Form>
        </>
    );
}
