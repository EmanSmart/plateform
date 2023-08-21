import { useRef } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

export default function Component() {
    const otpInput = useRef();

    function verifyOTP() {
        console.log(otpInput.current.value);
        fetch("/api/auth/phone-verification", {
            method: "POST",
            body: JSON.stringify({
                otpInput: otpInput.current.value,
            }),
            headers: { "Content-Type": "application/json" },
        }).then((res) => {
            if (res.status === 200) {
                res.json().then((data) => {
                    console.log(data);
                    alert(data.message);
                });
            } else {
                res.json().then((data) => {
                    alert(data.error);
                    return;
                });
            }
        });
    }

    function sendSMS() {
        console.log("sendSMS");
    }

    return (
        <>
            <div>
                <Form>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>OTP</Form.Label>
                                <Form.Control type="number" placeholder="Enter OTP" ref={otpInput} />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
                <Button variant="primary" type="submit" onClick={verifyOTP}>
                    Confrim
                </Button>
                <br />
                <br />
                <Button variant="primary" type="submit" onClick={sendSMS}>
                    Send SMS Again
                </Button>
            </div>
        </>
    );
}

/* 
export default function Home() {
    const callAPI = async () => {
        try {
            const res = await fetch(
                `https://famous-quotes4.p.rapidapi.com/random?category=all&count=2`,
                {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': 'your-rapidapi-key',
                        'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
                    },
                }
            );
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            <main>
                <button onClick={callAPI}>Make API call</button>
            </main>
        </div>
    );
} */
