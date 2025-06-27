import React from "react";
import styles from "./WhyChoose.module.css";
import Button from "../../Common/Button/Button";
import Resources from "../../../Assets/Img/Resources.svg";
import Community from "../../../Assets/Img/Community.svg";
import Language from "../../../Assets/Img/Language.svg";
import Prices from "../../../Assets/Img/Prices.svg";

const WhyChoose = () => {
  return (
    <div className={styles.whyChoose}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <Button title="Features" className="btnGreenOutline" type="button" />
          <h2 className={styles.title}>Why Choose Bubetech</h2>
        </div>

        <div className={styles.cardContainer}>
          {/* Row One */}
          <div className={styles.section}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <img src={Prices} alt="Prices" className={styles.iconImage} />
              </div>
              <div className={styles.cardTitle}>
                <p className={styles.txt}>Fair Market Prices</p>
                <p className={styles.text}>
                  Get current market prices and know the true value of your
                  crops, livestock, and fish.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <img
                  src={Community}
                  alt="Community"
                  className={styles.iconImage}
                />
              </div>
              <div className={styles.cardTitle}>
                <p className={styles.txt}>Expert Community</p>
                <p className={styles.text}>
                  Get advice from agricultural experts and experienced farmers.
                </p>
              </div>
            </div>
          </div>

          {/* Row Two */}
          <div className={styles.section}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <img
                  src={Language}
                  alt="Language"
                  className={styles.iconImage}
                />
              </div>
              <div className={styles.cardTitle}>
                <p className={styles.txt}>Local Language Support</p>
                <p className={styles.text}>
                  Get help in your local language through voice calls, SMS, or
                  mobile app. Works with or without internet on any phone.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <img
                  src={Resources}
                  alt="Resources"
                  className={styles.iconImage}
                />
              </div>
              <div className={styles.cardTitle}>
                <p className={styles.txt}>Quality Resources</p>
                <p className={styles.text}>
                  Find quality resources like seeds, grazing areas, fishing
                  spots and more. Connect with farmers to share resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
