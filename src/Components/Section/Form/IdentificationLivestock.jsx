import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import Button from "../../Common/Button/Button";
import { useTranslation } from "react-i18next";

const IdentificationLivestock = ({ onNext, onPrevious }) => {
  const [mainBreed, setMainBread] = useState("");
  const [approximate, setApproximate] = useState("");
  const [migration, setMigration] = useState("");
  const [primaryRoute, setPrimaryRoute] = useState("");
  const [primaryCattle, setPrimaryCattle] = useState("");
  const [otherLivestocks, setOtherLivestocks] = useState("");

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem("appLang");
    if (savedLang) i18n.changeLanguage(savedLang);
  }, [i18n]);

  const handleNext = () => {
    if (
      !mainBreed ||
      !approximate ||
      !migration ||
      !primaryRoute ||
      !primaryCattle ||
      !otherLivestocks
    ) {
      alert("Please fill all fields");
      return;
    }
    onNext({
      mainBreed,
      approximate,
      migration,
      primaryRoute,
      primaryCattle,
      otherLivestocks,
    });
  };

  return (
    <div className={styles.form}>
      <div className={styles.body}>
        <div className={styles.grid}>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="sex">
              {t("mainBreed")}
            </label>
            <select
              id="mainBreed"
              value={mainBreed}
              onChange={(e) => setMainBread(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">{t("selectOption")}</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="state">
              {t("approximateHerdSize")}
            </label>
            <select
              id="approximate"
              value={approximate}
              onChange={(e) => setApproximate(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">{t("selectOption")}</option>
              <option value="State A">State A</option>
              <option value="State B">State B</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="lga">
            {t("migrationPattern")}
            </label>
            <select
              id="migration"
              value={migration}
              onChange={(e) => setMigration(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">{t("selectOption")}</option>
              <option value="LGA A">LGA A</option>
              <option value="LGA B">LGA B</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="position">
              {t("primaryMigrationRoute")}
            </label>
            <select
              id="primaryRoute"
              value={primaryRoute}
              onChange={(e) => setPrimaryRoute(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">{t("selectOption")}</option>
              <option value="Leader">Leader</option>
              <option value="Member">Member</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="position">
              {t("primaryPurposeCattle")}
            </label>
            <select
              id="primaryCattle"
              value={primaryCattle}
              onChange={(e) => setPrimaryCattle(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">{t("selectOption")}</option>
              <option value="Leader">Leader</option>
              <option value="Member">Member</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="position">
              {t("otherLivestocks")}
            </label>
            <select
              id="otherLivestocks"
              value={otherLivestocks}
              onChange={(e) => setOtherLivestocks(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">{t("selectOption")}</option>
              <option value="Leader">Leader</option>
              <option value="Member">Member</option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles.buttonRow}>
        <Button title={t("previous")} className="btnPrev" onClick={onPrevious} />
        <Button title={t("next")} className="btnNext" onClick={handleNext} />
      </div>
    </div>
  );
};

export default IdentificationLivestock;
