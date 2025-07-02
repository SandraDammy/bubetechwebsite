import React, { useEffect } from "react";
import styles from "./LangSelector.module.css";
import { useTranslation } from "react-i18next";

const LangSelector = ({ handleLanguageChange }) => {
  const { i18n } = useTranslation();

  const languages = [
    { code: "en", label: "ENG" },
    { code: "yo", label: "YOR" },
    { code: "ig", label: "IBO" },
    { code: "ha", label: "HAU" },
    { code: "ff", label: "FUL" },
  ];

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div className={styles.ctaSection}>
      <select
        className={styles.languageSwitcher}
        onChange={handleLanguageChange}
        value={i18n.language} 
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LangSelector;
