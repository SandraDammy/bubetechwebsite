import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../../Assets/Img/BUBETECH_Logo.svg";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
// import { FaBars, FaTimes } from "react-icons/fa"; // For hamburger icon

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("appLang", e.target.value); // Persist
  };

  // Persist selected language on load
  React.useEffect(() => {
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
          {/* <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div> */}

          {/* Nav Links */}
          <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
            <li>{t("Home")}</li>
            <li>{t("About Us")}</li>
            <li>{t("Our Services")}</li>
            <li>{t("features")}</li>
            <li>{t("Contact Us")}</li>
          </ul>
                                                
          {/* Desktop Button */}
          <div className={styles.loginSection}>
            <p className={styles.login}>{t("login")}</p>

            <Button
              title={t("startConnecting")}
              className="btnGreen"
              type="button"
            />
          </div>
        </div>

        <div className={styles.ctaSection}>
          <select
            className={styles.languageSwitcher}
            onChange={handleLanguageChange}
          >
            <option value="en">ENG</option>
            <option value="yo">YOR</option>
            <option value="ig">IGB</option>
          </select>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
