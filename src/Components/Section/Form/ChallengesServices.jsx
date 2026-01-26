import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import Button from "../../Common/Button/Button";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import CheckboxOption from "../../Common/CheckboxOption/CheckboxOption";

import rateVeterinary from "../../../Assets/Options/rateVeterinary";
import financialServicesOptions from "../../../Assets/Options/financialServices";
import challengeOptions from "../../../Assets/Options/challengeOptions";

const ChallengesServices = ({ onNext, onPrevious }) => {
  const [rateVeterinaryServices, setRateVeterinaryServices] = useState(null);
  const [challenge, setChallenge] = useState("");
  const [financialServices, setFinancialServices] = useState([]);
  const [bankAccount, setBankAccount] = useState("");
  const [votersCard, setVotersCard] = useState("");

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem("appLang");
    if (savedLang) i18n.changeLanguage(savedLang);
  }, [i18n]);

  const handleNext = () => {
    if (
      !rateVeterinaryServices ||
      !challenge ||
      financialServices.length === 0 ||
      !bankAccount ||
      !votersCard
    ) {
      alert("Please fill all fields");
      return;
    }

    onNext({
      rateVeterinaryServices: rateVeterinaryServices.value,
      challenge,
      financialServices: financialServices.map((item) => item.value),
      bankAccount,
      votersCard,
    });
  };

  const optionsRateVeterinary = rateVeterinary.map((item) => ({
    value: item.value,
    label: t(item.labelKey),
  }));

  const optionsFinancialServices = financialServicesOptions.map((item) => ({
    value: item.value,
    label: t(item.labelKey),
  }));

  const optionsChallenge = challengeOptions.map((item) => ({
    value: item.value,
    label: t(item.labelKey),
  }));

  const yesNoOptions = [
    { value: "Yes", label: t("Yes") },
    { value: "No", label: t("No") },
  ];

  return (
    <div className={styles.form}>
      <div className={styles.body}>
        <div className={styles.grid}>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>
              {t("rateVeterinaryServices")}
            </label>
            <Select
              options={optionsRateVeterinary}
              value={rateVeterinaryServices}
              onChange={setRateVeterinaryServices}
              placeholder={t("selectOption")}
              className={styles.gridInputs}
              classNamePrefix="react-select"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("biggestChallenge")}</label>
            <Select
              options={optionsChallenge}
              value={challenge}
              onChange={setChallenge}
              placeholder={t("selectOption")}
              className={styles.gridInputs}
              classNamePrefix="react-select"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("financialServices")}</label>
            <Select
              isMulti
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              options={optionsFinancialServices}
              value={financialServices}
              onChange={setFinancialServices}
              placeholder={t("selectMultipleOption")}
              components={{ Option: CheckboxOption }}
              className={styles.gridInputs}
              classNamePrefix="react-select"
            />
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.grid}>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("bankAccount")}</label>
            <Select
              options={yesNoOptions}
              value={bankAccount}
              onChange={setBankAccount}
              placeholder={t("selectOption")}
              className={styles.gridInputs}
              classNamePrefix="react-select"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("votersCard")}</label>
            <Select
              options={yesNoOptions}
              value={votersCard}
              onChange={setVotersCard}
              placeholder={t("selectOption")}
              className={styles.gridInputs}
              classNamePrefix="react-select"
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
        <Button title={t("next")} className="btnNext" onClick={handleNext} />
      </div>
    </div>
  );
};

export default ChallengesServices;
