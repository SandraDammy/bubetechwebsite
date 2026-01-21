import React, { useEffect } from "react";
import Button from "../../Common/Button/Button";
import styles from "./StartConnecting.module.css";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Img/BUBETECH_Logo.svg";
import { useTranslation } from "react-i18next";

const Ministry = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem("appLang");
    if (savedLang) i18n.changeLanguage(savedLang);
  }, [i18n]);


    const handleSubmit = () => {
    if (!selectedLanguage) {
      alert("Please select a language.");
      return;
    }

    navigate("/form", { state: { language: selectedLanguage } });
  };
  
  return (
    <div className="layoutCont">
      <header className="header">
        <nav className={styles.nav}>
          <div className={styles.logoSection}>
            <Link to="/">
              <img src={logo} alt="Buben Tech Logo" className={styles.logo} />
            </Link>
          </div>
        </nav>
      </header>

      <div className={styles.formInput}>
        <div className={styles.titleInput}>
          <p className={styles.title}>
            Please select the ministry you are associated with
          </p>
        </div>

        <div className={styles.body}>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("ministry")}</label>
            <select
              value={ministry}
              onChange={(e) => setMinistry(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">{t("selectTheMinistryYouBelongTo")}</option>
              <option value="Male">{t("male")}</option>
              <option value="Female">{t("female")}</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("association")}</label>
            <select
              value={association}
              onChange={(e) => setAssociation(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">{t("selectYourOrganisation")}</option>
              <option value="Male">{t("male")}</option>
              <option value="Female">{t("female")}</option>
            </select>
          </div>

          <div className={styles.submitButton}>
            <Button
              title="Continue"
              className="btnNext"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ministry;
