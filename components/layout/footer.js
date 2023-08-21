import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Footer.module.css";

import pattern from "../../assets/images/patternFooter2.png";
import sgslogo from "../../assets/images/sgspower.svg";
import linkedin from "../../assets/images/LinkedIn.svg";
import instgram from "../../assets/images/Instagram.svg";
import tiktok from "../../assets/images/TikTok.svg";
import twiteer from "../../assets/images/Twitter.svg";
import Qr from "../../assets/images/Qr-footer.png";
import logo from "../../assets/images/LogoFooter.svg";

export default function Footer() {
    return (
        <div className={`${styles.footer} position-relative`} id="footer">
            <div className="container" data-aos="fade-down">
                <div className="row">
                    <div className="col-md-4">
                        <Image src={logo} alt="" className={styles.footerlogo} />
                    </div>
                    <div className="col-md-3">
                        <div>
                            <h5 className="my-4">Services</h5>
                            <Link href="#">Meet and greet</Link>
                            <Link href="#">Luggage Transfer</Link>
                            <Link href="#">Fast track pass</Link>
                            <Link href="#">Chauffeur Services</Link>
                            <Link href="#">VIP Lounge Access</Link>
                            <Link href="#">Transit</Link>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div>
                            <h5 className="my-4">Support</h5>
                            <Link href="#">Help</Link>
                            <Link href="#">Contact us</Link>
                            <Link href="#">Terms of service</Link>
                            <Link href="#">Privacy policy</Link>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className={styles.bar_social}>
                            <h5 className="my-4">Stay Connected</h5>
                            <div className="social d-flex my-4">
                                <Link href="#">
                                    <Image width={42} height={42} src={linkedin} alt="" className="w-75" />
                                </Link>
                                <Link href="#">
                                    <Image width={42} height={42} src={instgram} alt="" className="w-75" />
                                </Link>
                                <Link href="#">
                                    <Image width={42} height={42} src={tiktok} alt="" className="w-75" />
                                </Link>
                                <Link href="#">
                                    <Image width={42} height={42} src={twiteer} alt="" className="w-75" />
                                </Link>
                            </div>

                            <Image width={147} height={147} src={Qr} alt="" className={styles.qr_logo} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="pattern my-4">
                <Image src={pattern} alt="" className="w-100" style={{ bottom: "0", position: "absolute" }} />
                <Image src={sgslogo} alt="" className={styles.sgslogo} />
            </div>
        </div>
    );
}
