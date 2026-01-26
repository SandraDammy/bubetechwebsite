import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Common/Button/Button";
import styles from "./StartConnecting.module.css";
import logo from "../../../Assets/Img/BUBETECH_Logo.svg";
import { useTranslation } from "react-i18next";
import ministryOptions from "../../../Assets/Options/ministryOptions";
import associationOptions from "../../../Assets/Options/associationOptions";
import Select from "react-select";

const Ministry = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [ministry, setMinistry] = useState("");
  const [association, setAssociation] = useState("");

  useEffect(() => {
    const savedLang = localStorage.getItem("appLang");
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  const handleSubmit = () => {
    if (!ministry || !association) return;

    navigate("/form", {
      state: { ministry, association },
    });
  };

  const optionsMinistry = ministryOptions.map((opt) => ({
    value: opt.value,
    label: t(opt.labelKey),
  }));

  const optionsAssociation = associationOptions.map((opt) => ({
    value: opt.value,
    label: t(opt.labelKey),
  }));
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
        <p className={styles.title}>{t("pleaseSelectYourMinistry")}</p>

        <div className={styles.body}>
          <div className={styles.formGroup}>
            <label htmlFor="ministry" className={styles.rowLabel}>
              {t("ministry")}
            </label>
            <Select
              options={optionsMinistry}
              value={ministry}
              onChange={setMinistry}
              placeholder={t("selectTheMinistryYouBelongTo")}
              className={styles.gridInputs}
              classNamePrefix="react-select"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="association" className={styles.rowLabel}>
              {t("association")}
            </label>
            <Select
              options={optionsAssociation}
              value={association}
              onChange={setAssociation}
              placeholder={t("selectYourOrganisation")}
              className={styles.gridInputs}
              classNamePrefix="react-select"
            />
          </div>

          <div className={styles.submitButton}>
            <Button
              title={t("continue")}
              className="btnNext"
              onClick={handleSubmit}
              disabled={!ministry || !association}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ministry;
