import React from "react";
import styles from "./PlayStore.module.css";
import Mockup from "../../../Assets/Img/Bubetech_Mockup.svg";
import GoogleStore from "../../../Assets/Img/Playstore.svg";
import AppleStore from "../../../Assets/Img/Apple.svg";

const PlayStore = () => {
  return (
    <div className={styles.playStore}>
      <div className={styles.imgContainer}>
        <img src={Mockup} alt="Play Store" className={styles.mockup} />
      </div>
      <div className={styles.txtContainer}>
        <h1>
          We are bridging the gap <br/>between farmers and  <br/>future of agriculture
        </h1>
        <p>
          Helping Farmers Adapt, Grow, and Succeed Through Tailored Solutions.{" "}
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
              <h5 className={styles.txt}>GET IT ON</h5>
              <span className={styles.texts}>Google Store</span>
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
              <h5 className={styles.txt}>Download on the</h5>
              <span className={styles.text}>App Store </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayStore;
