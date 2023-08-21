import { useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Cities.module.css";

import city1 from "../../assets/images/cityimg1.png";
import city2 from "../../assets/images/city-2.svg";
import city3 from "../../assets/images/cityimg3.png";

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

const citiesData = [
    { src: city1, name: "Riyadh", id: "nav-riyadh", description: "the growing and flourishing city of Riyadh." },
    { src: city2, name: "Jeddah", id: "nav-jeddah", description: "Entertainment options in the city of Jeddah." },
    { src: city3, name: "Mecca", id: "nav-mecca", description: "takes you to your accommodation at the city of Makkah", extra_description: "Enjoy a hassle free Omrah," },
];
export default function Cities() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return (
        <>
            <section className={`${styles.cities} py-4 my-4`} id="cities">
                <div className="container">
                    <div className="tabs">
                        <nav>  
                            <div className="nav nav-tabs" id="nav-tab" role="tablist" style={{ display: "flex", justifyContent: "end", border: "0" }}>
                                {citiesData.map((data, index) => (
                                    <button
                                        key={index}
                                        className={index == 0 ? "nav-link active mx-3" : "nav-link mx-3"}
                                        id={`${data.id}-tab`}
                                        data-bs-toggle="tab"
                                        data-bs-target={`#${data.id}`}
                                        type="button"
                                        role="tab"
                                        aria-controls={data.target}
                                        aria-selected={index == 0 ? "true" : "false"}
                                    >
                                        <h2>{data.name}</h2>
                                    </button>
                                ))}
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            {citiesData.map((data, index) => (
                                <div key={index} className={index == 0 ? "tab-pane fade show active my-4" : "tab-pane fade my-4"} id={data.id} role="tabpanel" aria-labelledby={`${data.id}-tab`}>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="card position-relative">
                                                <div className="imgbox">
                                                    <Image width={1296} height={422} src={data.src} alt="" className="w-100" />
                                                </div>
                                                <div className="datacard mt-1" data-aos="fade-right">
                                                    <p>{data?.extra_description}</p>
                                                    <p>
                                                        <span>HAYAKUM</span>
                                                        helps you to discover
                                                    </p>
                                                    <p>{data.description}</p>
                                                </div>
                                                <div className={styles.green_line}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
