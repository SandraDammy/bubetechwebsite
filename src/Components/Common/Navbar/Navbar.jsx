import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from "../../../Assets/Img/BUBETECH_Logo.svg";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import LangSelector from "../LangSelector/LangSelector";
import HamburgerIcon from "../../../Assets/Img/Hamburger.svg";
import CloseIcon from "../../../Assets/Img/CloseIcon.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("appLang", lang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("appLang");
    if (savedLang) i18n.changeLanguage(savedLang);
  }, [i18n]);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {/* Logo */}
        <div className={styles.logoSection}>
          <Link to="/">
            <img src={logo} alt="Buben Tech Logo" className={styles.logo} />
          </Link>
        </div>

        <div className={styles.navItemLng}>
          <div className={menuOpen ? styles.navMenuActive : styles.navMenu}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link to="/" className={styles.navLink}>
                  {t("Home")}
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/about" className={styles.navLink}>
                  {t("About Us")}
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/feature" className={styles.navLink}>
                  {t("features")}
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/faqs" className={styles.navLink}>
                  {t("FAQs")}
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/contact" className={styles.navLink}>
                  {t("Contact Us")}
                </Link>
              </li>
            </ul>

            <div className={styles.navLogin}>
              <p className={styles.login}>
                <Link to="/login" className={styles.navLink}>
                  {t("login")}
                </Link>
              </p>
              <Button
                title={t("Start Connecting")}
                className="btnGreen"
                type="button"
                onClick={() => {
                  window.location.href = "/startConnecting";
                }}
              />
            </div>
          </div>

          <LangSelector
            handleLanguageChange={handleLanguageChange}
            labelType="short"
            placement="top"
          />
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

export default Navbar;
