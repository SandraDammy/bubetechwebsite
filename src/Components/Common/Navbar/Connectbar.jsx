import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Img/BUBETECH_Logo.svg";
import ArrowBack from "../../../Assets/Img/ArrowBack.svg";

const Connectbar = () => {

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Logo */}
        <div className={styles.logoNav}>
          <Link to="/">
            <img src={logo} alt="Buben Tech Logo" className={styles.logoImg} />
          </Link>
        </div>
        <div className={styles.logoNav}>
          <Link to="/startConnecting">
            <img src={ArrowBack} alt="arrowBack" className={styles.iconImage} />
          </Link>
        </div>

        <div className={styles.logoNav}>
          <h1 className={styles.title}>PASTORALIST REGISTRATION FORM</h1>
          {/* <h1 className={styles.title}>MACBAN PASTORALIST REGISTRATION FORM</h1> */}
        </div>

      </nav>
    </header>
  );
};

export default Connectbar;
