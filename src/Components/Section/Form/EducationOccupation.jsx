import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import Button from "../../Common/Button/Button";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import educationOptions from "../../../Assets/Options/educationOptions";
import occupationOptions from "../../../Assets/Options/occupationOptions";


const EducationOccupation = ({ onSubmit, onPrevious }) => {
  const [education, setEducation] = useState(null);
  const [occupation, setOccupation] = useState(null);
  const [photo, setPhoto] = useState(null);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem("appLang");
    if (savedLang) i18n.changeLanguage(savedLang);
  }, [i18n]);

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  // translate options
  const educationListOptions = educationOptions.map((opt) => ({
    value: opt.value,
    label: t(opt.labelKey),
  }));

  const occupationListOptions = occupationOptions.map((opt) => ({
    value: opt.value,
    label: t(opt.labelKey),
  }));

  return (
    <div className={styles.form}>
      <div className={styles.body}>
        <div className={styles.grid}>
          {/* Education */}
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>
              {t("highestLevelEducation")}
            </label>
            <Select
              options={educationListOptions}
              value={education}
              onChange={setEducation}
              placeholder={t("selectOption")}
              className={styles.gridInputs}
              classNamePrefix="react-select"
            />
          </div>

          {/* Occupation */}
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("otherOccupation")}</label>
            <Select
              options={occupationListOptions}
              value={occupation}
              onChange={setOccupation}
              placeholder={t("selectOption")}
              className={styles.gridInputs}
              classNamePrefix="react-select"
            />
          </div>
        </div>
      </div>

      {/* Photo Upload */}
      <div className={styles.body}>
        <div className={styles.grid}>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>
              {t("uploadPhoto")} *
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className={styles.gridInput}
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className={styles.buttonRow}>
        <Button
          title={t("previous")}
          className="btnPrev"
          onClick={onPrevious}
        />
        <Button
          title={t("submit")}
          className="btnNext"
          onClick={() =>
            onSubmit({
              education: education?.value,
              occupation: occupation?.value,
              photo,
            })
          }
        />
      </div>
    </div>
  );
};

export default EducationOccupation;
