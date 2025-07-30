import React, { useState, useEffect } from "react";
import styles from "./Form.module.css";
import Button from "../../Common/Button/Button";
import { useTranslation } from "react-i18next";

const PersonalInfo = ({ onNext, onPrevious }) => {
  const [fullName, setFullName] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [lga, setLga] = useState("");
  const [ward, setWard] = useState("");
  const [origin, setOrigin] = useState("");
  const [base, setBase] = useState("");
  const [position, setPosition] = useState("");

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem("appLang");
    if (savedLang) i18n.changeLanguage(savedLang);
  }, [i18n]);

  const handleNext = () => {
    if (
      !fullName ||
      !sex ||
      !age ||
      !phone ||
      !state ||
      !lga ||
      !ward ||
      !origin ||
      !base ||
      !position
    ) {
      alert("Please fill all fields");
      return;
    }

    onNext({
      fullName,
      sex,
      age,
      phone,
      state,
      lga,
      ward,
      origin,
      base,
      position,
    });
  };

  return (
    <div className={styles.form}>
      <div className={styles.body}>
        <div className={styles.bodyRow}>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("formId")}</label>
            <input
              type="text"
              value="291FY123"
              readOnly
              className={styles.readOnlyInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("date")}</label>
            <input
              type="text"
              value="01-July-2025"
              readOnly
              className={styles.readOnlyInput}
            />
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.grid}>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("fullName")}</label>
            <input
              placeholder={t("enterFullName")}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={styles.gridInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("sex")}</label>
            <select
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">{t("select")}</option>
              <option value="Male">{t("male")}</option>
              <option value="Female">{t("female")}</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("age")}</label>
            <input
              type="number"
              placeholder={t("enterAge")}
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className={styles.gridInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>
              {t("phoneNumber(optional)")}
            </label>
            <input
              placeholder={t("enterPhoneNumber")}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={styles.gridInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("state")}</label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">{t("selectState")}</option>
              <option value="State A">State A</option>
              <option value="State B">State B</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("lga")}</label>
            <select
              value={lga}
              onChange={(e) => setLga(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">{t("selectLGA")}</option>
              <option value="LGA A">{t("lgaA")}</option>
              <option value="LGA B">{t("lgaB")}</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("ward")}</label>
            <input
              placeholder={t("enterWard")}
              value={ward}
              onChange={(e) => setWard(e.target.value)}
              className={styles.gridInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("villageOrigin")}</label>
            <input
              placeholder={t("enterVillage")}
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className={styles.gridInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("currentBase")}</label>
            <input
              placeholder={t("enterCurrentBase")}
              value={base}
              onChange={(e) => setBase(e.target.value)}
              className={styles.gridInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("positionMacban")}</label>
            <select
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">{t("select")}</option>
              <option value="Leader">{t("Leader")}</option>
              <option value="Member">{t("Member")}</option>
            </select>
          </div>
        </div>
      </div>

      <div className={styles.buttonRow}>
        <Button
          title={t("previous")}
          className="btnPrev"
          onClick={onPrevious}
        />
        <Button title={t("next")} className="btnNext" onClick={handleNext} />
      </div>
    </div>
  );
};

export default PersonalInfo;
