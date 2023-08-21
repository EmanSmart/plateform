import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Header.module.css";
import logo from "../../assets/images/logo.svg";

const nav__links = [
  { path: "/service1", display: "Meet and Greet" },
  { path: "#", display: "Luggage Transferout" },
  { path: "#", display: "Fast Track Pass" },
  { path: "#", display: "Chauffeur Services" },
  { path: "#", display: "VIP Lounge Access" },
  { path: "#", display: "Transit" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      {/* <div className="container first_header my-2">
        <div className="row d-flex">
          
          <ul className=" mb-2icons d-flex">
            <div className="btn-group">
              <select className="select_lan">
                <option value={"en"}>USD</option>
                <option value={"ar"}>UR</option>
              </select>
            </div>
            <div className="btn-group">
              <select className="select_lan">
                <option value={"en"}>En</option>
                <option value={"ar"}>عربي</option>
              </select>
            </div>
          </ul>
        </div>
      </div> */}
      <nav
        id="navbar-example"
        className="navbar navbar-expand-lg "
        data-aos="fade-down"
      >
        <div className="container">
          <Link className="navbar-brand" href="#hero">
            <Image src={logo} alt="logo" className="w-75" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="row d-block"></div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className={styles.navigation}>
              <ul className={styles.menu} style={{ alignItems: "start" }}>
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    {/* <Link href={item.path} className={(navClass) => (navClass.isActive ? styles.nav__active : "")}> */}
                    <Link href={item.path}>{item.display}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <ul className="me-auto mb-2 mb-lg-0 icons d-flex">
              <div className="btn-group">
                <select className="select_lan mx-3">
                  <option value={"en"}>En</option>
                  <option value={"ar"}>عربي</option>
                </select>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
