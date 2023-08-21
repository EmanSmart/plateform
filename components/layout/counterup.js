import { useState } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import styles from "../../styles/Counterup.module.css";

import img1 from "../../assets/images/count1.svg";
import img2 from "../../assets/images/count2.svg";
import img3 from "../../assets/images/count3.svg";
import img4 from "../../assets/images/num3.svg";
import img5 from "../../assets/images/count5.svg";

const counterData = [
    { src: img1, end: 1000, name: "Meet and Greets" },
    { src: img2, end: 200, name: "Bags Handled" },
    { src: img3, end: 200, name: "Luxury pickups" },
    { src: img4, end: 1000, name: "Fast Tracks" },
    { src: img5, end: 50, name: "Hayakum Agents" },
];

export default function Counterup() {
    const [counterStart, setCounterStart] = useState(false);
    return (
        <>
            <ScrollTrigger onEnter={() => setCounterStart(true)} onExit={() => setCounterStart(false)}>
                <div className={`${styles.counterBox} my-3 py-5`}>
                    <div className="container py-3" data-aos="fade-down">
                        <div className="row" style={{ justifyContent: "space-around" }}>
                            {counterData.map((item, index) => (
                                <div key={index} className="col-md-2 text-center">
                                    <Image width={170} height={170} src={item.src} alt=".." className="w-75" />
                                    <h4 className="my-3">{counterStart && <CountUp start={0} end={item.end} duration={3} delay={0} />}+</h4>
                                    <p>{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ScrollTrigger>
        </>
    );
}
