import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from "../../../Assets/Img/BUBETECH_Logo.svg";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import LangSelector from "../LangSelector/LangSelector";
import HamburgerIcon from "../../../Assets/Img/Hamburger.svg";
import CloseIcon from "../../../Assets/Img/CloseIcon.svg";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("appLang", lang); // Persist selection
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("appLang");
    if (savedLang) i18n.changeLanguage(savedLang);
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          {/* Logo */}
          <div className={styles.logoSection}>
            <img src={logo} alt="Buben Tech Logo" className={styles.logo} />
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

          <div className={styles.navItems}>
            {/* Nav Links */}
            <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
              <li>{t("ome")}</li>
              <li>{t("About Us")}</li>
              <li>{t("Our Services")}</li>
              <li>{t("features")}</li>
              <li>{t("Contact Us")}</li>
            </ul>

            {/* Desktop Login & CTA */}
            <div className={styles.loginSection}>
              <p className={styles.login}>{t("login")}</p>
              <Button
                title={t("Start Connecting")}
                className="btnGreen"
                type="button"
              />
            </div>
          </div>
        </div>

        {/* Language Selector */}
        <LangSelector handleLanguageChange={handleLanguageChange} labelType="short"/>
      </nav>
    </header>
  );
};

export default Navbar;



