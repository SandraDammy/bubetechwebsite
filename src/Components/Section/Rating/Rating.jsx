import React, { useEffect } from "react";
import styles from "./Rating.module.css";
import { useTranslation } from "react-i18next";

const Rating = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem("appLang");
    if (savedLang && i18n.language !== savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  return (
    <div className={styles.rating}>
      <div className={styles.container}>
        <div className={styles.bigTxt}>
          <p className={styles.big}>200+</p>
          <p className={styles.txt}>{t("Farmers Groups")}</p>
        </div>
        <div className={styles.bigTxt}>
          <p className={styles.big}>50,000+</p>
          <p className={styles.txt}>{t("Connected Farmers")}</p>
        </div>
        <div className={styles.bigTxt}>
          <p className={styles.big}>30%</p>
          <p className={styles.txt}>{t("Income increase")}</p>
        </div>
        <div className={styles.bigTxt}>
          <p className={styles.big}>40+</p>
          <p className={styles.txt}>{t("Market Partners")}</p>
        </div>
      </div>
    </div>
  );
};

export default Rating;
