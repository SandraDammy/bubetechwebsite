import React, { useEffect } from "react";
import styles from "./LangSelector.module.css";
import { useTranslation } from "react-i18next";
import { languages } from "../../../utils/language";

const LangSelector = ({ handleLanguageChange, labelType = "short" }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.dir();
  // }, [i18n.language]);
  }, [i18n, i18n.language]);

  const selectClassName = `${styles.languageSwitcher} ${
    labelType === "short" ? styles.shortLabel : styles.fullLabel
  }`;

  return (
    <div className={styles.ctaSection}>
      <select
        className={selectClassName}
        onChange={handleLanguageChange}
        value={i18n.language} 
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang[labelType]} 
          </option>
        ))}
      </select>
    </div>
  );
};

export default LangSelector;
