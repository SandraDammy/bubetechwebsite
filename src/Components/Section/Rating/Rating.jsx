import React from "react";
import styles from "./Rating.module.css";

const Rating = () => {
  return (
    <div className={styles.rating}>
      <div className={styles.container}>
        <div className={styles.bigTxt}>
          <p className={styles.big}>200+</p>
          <p className={styles.txt}>Farmers Groups</p>
        </div>
        <div className={styles.bigTxt}>
          <p className={styles.big}>50,000+</p>
          <p className={styles.txt}>Connected Farmers</p>
        </div>
        <div className={styles.bigTxt}>
          <p className={styles.big}>30%</p>
          <p className={styles.txt}>Income increase</p>
        </div>
        <div className={styles.bigTxt}>
          <p className={styles.big}>40+</p>
          <p className={styles.txt}>Market Partners</p>
        </div>
      </div>
    </div>
  );
};

export default Rating;
