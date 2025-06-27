import React, { useEffect, useState } from "react";
import styles from "./LandingPage.module.css";
import Button from "../../Common/Button/Button";
import Ellipse1 from "../../../Assets/Img/Ellipse1.svg";
import Ellipse2 from "../../../Assets/Img/Ellipse2.svg";
import Ellipse3 from "../../../Assets/Img/Ellipse3.svg";
import { useTranslation } from "react-i18next";

const LandingPage = () => {
  const btnEventHandler = () => {
    window.open("https://bubetech.org", "_blank");
  };

  const { t } = useTranslation();

  const images = [Ellipse1, Ellipse2, Ellipse3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.landingPage}>
      <div className={styles.textContainer}>
        <p>When Farmers Connect, Communities Prosper</p>
        <h1 className={styles.title}>
          Turning Farm Isolation into Shared Success
        </h1>
        <p className={styles.desc}>
          We connect crop farmers, herders, and fishermen to expert guidance,
          quality resources, and fair prices in local languages, even without
          internet.
        </p>
        <div className={styles.btnJoin}>
          <Button
            title={t("startConnecting")}
            btnEventHandler={btnEventHandler}
            className="btnGreen"
          />
        </div>
      </div>

      <div className={styles.imgContainer}>
        <div className={styles.circularBorder}>
          {" "}
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
  );
};

export default LandingPage;
