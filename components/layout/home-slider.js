import Image from "next/image";
import { useEffect } from "react";

import { Container, Row, Col, Carousel } from "react-bootstrap";
import styles from "../../styles/HomeSlider.module.css";
import heroimg1 from "../../assets/images/hero1.png";
import heroimg2 from "../../assets/images/heroimg2.png";

export default function HomeSlider() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <section className={`${styles.hero__section}`} id="home">
        <Carousel controls={false} fade>
          <Carousel.Item interval={1000}>
            <Image
              src={heroimg1}
              className="d-block w-100 img-fluid"
              alt="..."
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <Image
              src={heroimg2}
              className="d-block w-100 img-fluid"
              alt="..."
            />
          </Carousel.Item>
        </Carousel>

        <Container className={styles.content}>
          <Row>
            <Col lg="5" md="5" className="emphty"></Col>
            <Col lg="7" md="7">
              <div className={styles.hero__content} data-aos="fade-left">
                <h2>
                  A new dimension of <br /> Luxury hospitality in Saudi Arabia
                </h2>
                <h3>
                  Upgrade your travel experience with our top-of-the-line Meet
                  and Greet, Chauffeur services and more, carefully designed to
                  simplify and expedite your arrival or departure in Saudi
                  Arabia.
                </h3>
              </div>
            </Col>
          </Row>
        </Container>

        {/* --------------form_booking------------------- */}
        <div className={`${styles.form_home} `}>
          <div className={`${styles.form_box}`}>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link py-3 px-5 b-0 active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Home
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Profile
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Contact
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                ...
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                ...
              </div>
              <div
                className="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                ...
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
