import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import Button from "../../Common/Button/Button";
import { useTranslation } from "react-i18next";

const EducationOccupation = ({ onSubmit, onPrevious }) => {
  const [education, setEducation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [photo, setPhoto] = useState(null);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem("appLang");
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  return (
    <div className={styles.form}>
      <div className={styles.body}>
        <div className={styles.grid}>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="education">
              {t("highestLevelEducation")}
            </label>
            <select
              id="education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">{t("selectOption")}</option>
              <option value="primary">{t("Primary")}</option>
              <option value="secondary">{t("Secondary")}</option>
              <option value="tertiary">{t("Tertiary")}</option>
              <option value="quranic">{t("Qur'anic")}</option>
              <option value="none">{t("None")}</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="occupation">
              {t("otherOccupation")}
            </label>
            <select
              id="occupation"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">{t("selectOption")}</option>
              <option value="farming">{t("Farming")}</option>
              <option value="trading">{t("Trading")}</option>
              <option value="laboring">{t("Laboring")}</option>
              <option value="handcrafts">{t("Handcrafts")}</option>
              <option value="other">{t("Other")}</option>
            </select>
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.grid}>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="photo">
              {t("uploadPhoto")} *
            </label>
            <input
              type="file"
              id="photo"
              accept="image/*"
              onChange={handleFileChange}
              className={styles.gridInput}
            />
          </div>
        </div>
      </div>

      <div className={styles.buttonRow}>
        <Button
          title={t("previous")}
          className="btnPrev"
          onClick={onPrevious}
        />
        <Button title={t("submit")} className="btnNext" onClick={onSubmit} />
      </div>
    </div>
  );
};

export default EducationOccupation;
