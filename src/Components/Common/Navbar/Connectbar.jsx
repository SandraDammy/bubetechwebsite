import React, { useState } from "react";
import styles from "./Navbar.module.css";
import HamburgerIcon from "../../../Assets/Img/Hamburger.svg";
import CloseIcon from "../../../Assets/Img/CloseIcon.svg";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Img/BUBETECH_Logo.svg";
import ArrowBack from "../../../Assets/Img/ArrowBack.svg";

const Connectbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Logo */}
        <div className={styles.logoSection}>
          <Link to="/">
            <img src={logo} alt="Buben Tech Logo" className={styles.logo} />
          </Link>
        </div>
        <div className={styles.logoSection}>
          <Link to="/startConnecting">
            <img src={ArrowBack} alt="arrowBack" className={styles.iconImage} />
          </Link>
        </div>

        <div className={styles.logoSection}>
          <h1 className={styles.title}>MACBAN PASTORALIST REGISTRATION FORM</h1>
        </div>

        {/* Hamburger icon */}
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img
            src={menuOpen ? CloseIcon : HamburgerIcon}
            alt="Menu Toggle"
            className={styles.menuIcon}
          />
        </div>
      </nav>
    </header>
  );
};

export default Connectbar;
