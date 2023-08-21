import { Container, Row, Col, Accordion } from "react-bootstrap";
import styles from "../../styles/Faq.module.css";

const faqContent = [
    { question: "What is special about Hayakum Service?", answer: " Our service is defined by its high standard of excellence, promptness, and individuality at affordable prices" },
    { question: "Where do you provide Hayakum Service?", answer: "It is provided at King Khalid International Airport, Terminal 2,3,4,5." },
    { question: "What are the available cars at a car with Chauffeur Services?", answer: "FORD Taurus, Lexus ES, GMC, BMW (Class7), Mercedes Bins, VIP Bus" },
    { question: "Can I cancel my reservation or change the reservation date and time?", answer: "Yes you can, Please visit terms and conditions to know more." },
];
export default function Faq() {
    return (
        <>
            <section className={`${styles.faq} mt-4`} id="faq">
                <div className={styles.style_title}>
                    <Container>
                        <Row>
                            <Col lg="12" className="text_center">
                                <h2 className={`${styles.faq__title} text-center`}>FAQ</h2>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={`${styles.faq_content} py-5`}>
                    <Container className="py-5">
                        <div className="row py-5" style={{ justifyContent: "center" }}>
                            <div className="col-md-8 my-5">
                                <div>
                                    <Accordion defaultActiveKey="0">
                                        {faqContent.map((item, index) => (
                                            <Accordion.Item key={index} eventKey={index + 1}>
                                                <Accordion.Header>{item.question}</Accordion.Header>
                                                <Accordion.Body>{item.answer}</Accordion.Body>
                                            </Accordion.Item>
                                        ))}
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    );
}
