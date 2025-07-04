import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import Button from "../Button/Button";

import logo from "../../../Assets/Img/BUBETECH_Footer_Logo.svg";
import Facebook from "../../../Assets/Img/facebook.svg";
import Instagram from "../../../Assets/Img/instagram.svg";
import Twitter from "../../../Assets/Img/Twitter.svg";
import Linkedin from "../../../Assets/Img/Linkedin.svg";
import { useTranslation } from "react-i18next";
import LangSelector from "../LangSelector/LangSelector";

const Footer = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem("appLang");
    if (savedLang && i18n.language !== savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  const [formData, setFormData] = useState({ email: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const btnSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with:", formData.email);
    // API call goes here
  };

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("appLang", lang); // Persist selection
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.title}>
        <h2>{t("Stay Connected")}</h2>
        <p>
          {t(
            "Stay connected with farmer success stories, market insights, and community updates."
          )}
        </p>
        <form className={styles.subscribeForm} onSubmit={btnSubscribe}>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t("Enter your email")}
            required
            className={styles.emailInput}
          />
          <Button
            className="btnWhite"
            title={t("Subscribe")}
            btnEventHandler={btnSubscribe}
          />
        </form>
      </div>

      <hr className={styles.divider} />

      <div className={styles.title}>
        <h2>{t("BubeTech")}</h2>
        <div className={styles.description}>
          <p>
            {t(
              "Building farmer-to-farmer and farmer-to-expert connections across West Africa. Traditional wisdom meets modern community networks."
            )}
          </p>
          <p>{t("Turning Farm Isolation into Shared Success")}</p>
        </div>
      </div>

      <div className={styles.linksSection}>
        <div className={styles.column}>
          <img src={logo} alt="Bubetech Logo" className={styles.logo} />
          <div className={styles.socials}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Facebook} alt="Facebook" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Twitter} alt="Twitter" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Linkedin} alt="Linkedin" />
            </a>
          </div>
        </div>

        <div className={styles.column}>
          <h6>{t("Get Connected")}</h6>
          <div className={styles.footerLink}>
            <Link to="/contact" className={styles.link}>
              connect@bubetech.africa
            </Link>
            <Link to="/support" className={styles.link}>
              {t("Community Support")}: +234 803 700 0117
            </Link>
          </div>
        </div>

        <div className={styles.column}>
          <h6>{t("Learn More")}</h6>
          <div className={styles.footerLink}>
            <Link to="/our-story" className={styles.link}>
              {t("Our Story")}
            </Link>
            <Link to="/associations" className={styles.link}>
              {t("For Agricultural Associations")}
            </Link>
            <Link to="/careers" className={styles.link}>
              {t("Careers")}
            </Link>
            <Link to="/contact" className={styles.link}>
              {t("Contact Us")}
            </Link>
          </div>
        </div>

        <div className={styles.column}>
          <h6>{t("Support")}</h6>
          <div className={styles.footerLink}>
            <Link to="/call-support" className={styles.link}>
              {t("Call Support")}
            </Link>
            <Link to="/help" className={styles.link}>
              {t("Get Help")}
            </Link>
            <Link to="/language-support" className={styles.link}>
              {t("Language Support")}
            </Link>
            <Link to="/community-hubs" className={styles.link}>
              {t("Community Hubs")}
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomLeft}>
          <div className={styles.section}>
            {/* <select
              className={styles.languageSwitcher}
              onChange={handleLanguageChange}
            >
              <option value="en">English</option>
              <option value="yo">Yoruba</option>
              <option value="ig">Igbo</option>
              <option value="ha">Hausa</option>
              <option value="ff">Fulfulde</option>
            </select> */}
            <LangSelector
              handleLanguageChange={handleLanguageChange}
              labelType="full"
            />
          </div>
          <div className={styles.section}>
            <span>•</span>
            <Link to="/privacy" className={styles.term}>
              {t("Privacy")}
            </Link>
          </div>
          <div className={styles.section}>
            <span>•</span>
            <Link to="/terms" className={styles.term}>
              {t("Terms of Service")}
            </Link>
          </div>
        </div>
        <div className={styles.bottomRight}>
          <p className={styles.term}>
            © 2024 {t("Bubetech")}. {t("All Rights Reserved")}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
