import React from "react";
import styles from "./modal.module.css";
import Success from "../../../Assets/Img/Success.svg";
import Button from "../Button/Button";

const SuccessModal = ({ title, subtitle, btnTitle, btnOnclick }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.wrapper}>
        <div className={styles.bodyModel}>
          <img src={Success} alt="Success" className={styles.modalIcon} />
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <div className={styles.modalBtn}>
          <Button title={btnTitle} className="btnNext" onClick={btnOnclick} />
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
