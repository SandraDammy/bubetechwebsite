import React from "react";
import styles from "./LandingPage.module.css";
import Button from "../../Common/Button/Button";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      LandingPage

      <Button
        title="Subscribe"
        className="btnWhite"
        type="button"
      />
      <Button
        title="FEATURES"
        className="btnGreenOutline"
        type="button"
      />
      <Button
        title="Send message"
        className="btnMsg"
        type="button"
      />
    </div>
  );
};

export default LandingPage;
