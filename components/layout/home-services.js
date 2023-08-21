import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/HomeServices.module.css";

import Carousel from "react-bootstrap/Carousel";

import serv1 from "../../assets/images/serimg1.png";
import serv2 from "../../assets/images/serv-2.png";
import serv3 from "../../assets/images/serv-3.svg";
import serv4 from "../../assets/images/servimg4.png";
import serv5 from "../../assets/images/servimg5.png";
import serv6 from "../../assets/images/servimg6.png";

const servicesData = [
    { src: serv1, href: "#", name: "Meet & Greet", active: "active" },
    { src: serv2, href: "#", name: "Luggage Transfer" },
    { src: serv3, href: "#", name: "Chauffeur Services" },
    { src: serv4, href: "#", name: "Fast Track Pass" },
    { src: serv5, href: "#", name: "VIP Lounge Access" },
    { src: serv6, href: "#", name: "Transit" },
];
export default function HomeServices() {
    return (
        <>
            <section className={`${styles.services} my-5`} id="services">
                <div className={styles.style_title}>
                    <Container>
                        <Row>
                            <Col lg="12" className="text-center">
                                <h2 className={styles.section__title}>Our Services</h2>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={styles.slider}>
                    <Container className="px-3">
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            </div>
                            <div className="carousel-inner">
                                {servicesData.map((data, index) => (
                                    <div key={index} className={`${data.active} carousel-item`}>
                                        <Image src={data.src} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <Row className="my-5  d-flex justify-content-between align-items-center" data-aos="fade-down">
                                                <div className="col-md-6 ">
                                                    <h5>{data.name}</h5>
                                                </div>
                                                <div className="col-md-6 ">
                                                    <Link href={data.href}>
                                                        <button type="button" className={styles.btn_serv}>
                                                            Learn more
                                                        </button>
                                                    </Link>
                                                </div>
                                            </Row>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    );
}
