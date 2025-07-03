import React, { useEffect } from "react";
import styles from "./OurStory.module.css";
import Frame from "../../../Assets/Img/Frame_Logo.svg";
import { useTranslation } from "react-i18next";

const OurStory = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem("appLang");
    if (savedLang && i18n.language !== savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  return (
    <div className={styles.ourStory}>
      <div className={styles.imgContainer}>
        <img src={Frame} alt="Frame_Logo" className={styles.frameLogo} />
      </div>
      <div className={styles.txtContainer}>
        <h1>{t("Our Story")}</h1>

        <p>
          {t(
            "We know farming is hard work. Whether you grow crops, raise livestock, or catch fish, you deserve fair prices for your efforts."
          )}
        </p>

        <p>
          {t(
            "Many farmers work alone. Middlemen take profits. Language barriers block opportunities. Good farmers struggle while others prosper."
          )}
        </p>

        <p>
          {t(
            "That's why we built BubeTech. We connect every farmer - from small gardens to large herds - to the knowledge, quality resources, and fair prices they need to succeed. Your phone becomes your farming partner. Your voice matters. Your community grows stronger."
          )}
        </p>

        <span>
          {t("Farm smarter, live better. When farmers connect, everyone wins.")}
        </span>
      </div>
    </div>
  );
};

export default OurStory;
