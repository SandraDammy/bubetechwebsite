import React, { useEffect, useRef, useState } from "react";
import styles from "./Form.module.css";
import Button from "../../Common/Button/Button";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import educationOptions from "../../../Assets/Options/educationOptions";
import occupationOptions from "../../../Assets/Options/occupationOptions";
import UploadFile from "../../../Assets/Img/upload.svg";

const EducationOccupation = ({ onSubmit, onPrev }) => {
  const [education, setEducation] = useState(null);
  const [occupation, setOccupation] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const fileInputRef = useRef(null);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem("appLang");
    if (savedLang) i18n.changeLanguage(savedLang);
  }, [i18n]);

  const handleFile = (file) => {
    if (!file) return;
    setPhoto(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const educationListOptions = educationOptions.map((opt) => ({
    value: opt.value,
    label: t(opt.labelKey),
  }));

  const occupationListOptions = occupationOptions.map((opt) => ({
    value: opt.value,
    label: t(opt.labelKey),
  }));

  const handleSubmit = () => {
    if (!education || !occupation || !photo) {
      alert(t("pleaseFillAllFields"));
      return;
    }

    onSubmit({
      education: education.value,
      occupation: occupation.value,
      photo,
    });
  };

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
      {/* <div className={styles.body}>
        <div className={styles.grid}>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("uploadPhoto")}</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className={styles.gridInput}
            />
          </div>
        </div>
      </div> */}

      <div className={styles.bodyUpload}>
        <label className={styles.rowLabel}>{t("uploadPhoto")}</label>

        <div
          className={`${styles.dropZone} ${dragActive ? styles.active : ""}`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current.click()}
        >
          <div className={styles.icon}>
            <img
              src={UploadFile}
              alt="Upload"
              // className={styles.iconImage}
            />
          </div>
          <p className={styles.text}>
            <span>{t("clickToUpload")}</span> {t("orDragDrop")}
          </p>
          <small className={styles.subText}>PNG, JPG (max. 800 × 400px)</small>
        </div>

        <input
          className={styles.fileInput}
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg"
          hidden
          onChange={(e) => handleFile(e.target.files[0])}
        />

        <div className={styles.or}>OR</div>

        <button
          type="button"
          className={styles.cameraBtn}
          onClick={() => fileInputRef.current.click()}
        >
          {t("takePhoto")}
        </button>
      </div>

      <div className={styles.terms}>
        <input type="checkbox" id="terms" />
        <label htmlFor="terms">
          {t("agreeTerms")} <span>{t("termsAndConditions")}</span>{" "}
          {t("ofMembership")}
        </label>
      </div>

      {/* Buttons */}
      <div className={styles.buttonRow}>
        <Button
          title={t("previous")}
          className="btnPrev"
          onClick={onPrev}
        />
        <Button
          title={t("submit")}
          className="btnNext"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default EducationOccupation;
