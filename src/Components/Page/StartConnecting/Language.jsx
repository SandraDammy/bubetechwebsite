import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./StartConnecting.module.css";
import Button from "../../Common/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../Assets/Img/BUBETECH_Logo.svg";

const languageOptions = [
  { label: "English", value: "en" },
  { label: "Yoruba", value: "yo" },
  { label: "Hausa", value: "ha" },
  { label: "Igbo", value: "ig" },
  { label: "Fulfulde", value: "ff" },
];

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang); // <-- change language on selection
  };

  const handleSubmit = () => {
    if (!selectedLanguage) {
      alert("Please select a language.");
      return;
    }

    navigate("/form", { state: { language: selectedLanguage } });
  };

  return (
    <div className="layoutCont">
      <header className="header">
        <nav className={styles.nav}>
          <div className={styles.logoSection}>
            <Link to="/">
              <img src={logo} alt="Buben Tech Logo" className={styles.logo} />
            </Link>
          </div>
        </nav>
      </header>

      <div className={styles.formInput}>
        <div className={styles.titleInput}>
          <p className={styles.title}>Please select your preferred language</p>
        </div>

        <div className={styles.body}>
          {languageOptions.map(({ label, value }, index) => (
            <div className={styles.check} key={value}>
              <label htmlFor={`lang-${index}`}>{label}</label>
              <input
                className={styles.checkbox}
                type="radio"
                id={`lang-${index}`}
                name="language"
                value={value}
                checked={selectedLanguage === value}
                onChange={handleLanguageChange}
              />
            </div>
          ))}

          <div className={styles.submitButton}>
            <Button title="Continue" className="btnNext" onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
