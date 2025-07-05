import React, { useEffect } from "react";
import styles from "./PlayStore.module.css";
import Mockup from "../../../Assets/Img/Bubetech_Mockup.svg";
import GoogleStore from "../../../Assets/Img/Playstore.svg";
import AppleStore from "../../../Assets/Img/Apple.svg";
import { useTranslation } from "react-i18next";

const PlayStore = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem("appLang");
    if (savedLang && i18n.language !== savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  return (
    <div className={styles.playStore}>
      <div className={styles.imgContainer}>
        <img src={Mockup} alt="Play Store" className={styles.mockup} />
      </div>
      <div className={styles.txtContainer}>
        <h1>{t("We are bridging the gap")}</h1>
        <h1>{t("between farmers and")}</h1>
        <h1>{t("future of agriculture")}</h1>
        <p>
          {t(
            "Helping Farmers Adapt, Grow, and Succeed Through Tailored Solutions."
          )}
        </p>
        <div className={styles.section}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <img
                src={GoogleStore}
                alt="Google Store"
                className={styles.iconImage}
              />
            </div>
            <div className={styles.cardTitle}>
              <h5 className={styles.txt}>{t("GET IT ON")}</h5>
              <span className={styles.text}>{t("Google Store")}</span>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <img
                src={AppleStore}
                alt="Apple Store"
                className={styles.iconImage}
              />
            </div>
            <div className={styles.cardTitle}>
              <h5 className={styles.txt}>{t("Download on the")}</h5>
              <span className={styles.text}>{t("App Store")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayStore;
