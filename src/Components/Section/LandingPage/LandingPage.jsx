import React, { useEffect, useState } from "react";
import styles from "./LandingPage.module.css";
import Button from "../../Common/Button/Button";
import Ellipse1 from "../../../Assets/Img/Ellipse1.svg";
import Ellipse2 from "../../../Assets/Img/Ellipse2.svg";
import Ellipse3 from "../../../Assets/Img/Ellipse3.svg";
import { useTranslation } from "react-i18next";

const LandingPage = () => {
  const { t, i18n } = useTranslation();

  const btnEventHandler = () => {
    window.open("https://bubetech.org", "_blank");
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("appLang");
    if (savedLang && i18n.language !== savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  const images = [Ellipse1, Ellipse2, Ellipse3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className={styles.landingPage}>
      <div className={styles.textContainer}>
        <div className={styles.subHeading}>
          <span className={styles.line}></span>
          <p>{t("When Farmers Connect, Communities Prosper")}</p>
          <span className={styles.line}></span>
        </div>
        <div className={styles.heading}>
          <h1 className={styles.title}>{t("Turning Farm Isolation")}</h1>
          <h1 className={styles.title}>{t("into Shared Success")}</h1>
        </div>

        <div className={styles.headingDesc}>
          <p className={styles.desc}>
            {t("We connect crop farmers, herders, and fishermen to expert ")}
          </p>
          <p className={styles.desc}>
            {t("guidance, quality resources, and fair prices in ")}
          </p>
          <p className={styles.desc}>
            {t("local languages, even without internet.")}
          </p>
        </div>

        <div className={styles.btnJoin}>
          <Button
            title={t("Start Connecting")}
            btnEventHandler={btnEventHandler}
            className="btnGreenBig"
          />
        </div>
      </div>

      <div className={styles.imgContainer}>
        <div className={styles.mainBorder}>
          <div className={styles.smallCircle}>
            <div className={styles.imgCircle}>
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Farm ${index + 1}`}
                  className={`${styles.image} ${
                    index === currentImage ? styles.active : styles.hidden
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
