import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import Button from "../../Common/Button/Button";
import { useTranslation } from "react-i18next";

const ChallengesServices = ({ onNext, onPrevious }) => {
  const [accessServices, setAccessServices] = useState("");
  const [challenge, setChallenge] = useState("");
  const [financialServices, setFinancialServices] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [votersCard, setVotersCard] = useState("");

    const { t, i18n } = useTranslation();
  
    useEffect(() => {
      const savedLang = localStorage.getItem("appLang");
      if (savedLang) i18n.changeLanguage(savedLang);
    }, [i18n]);

  const handleNext = () => {
    if (
      !accessServices ||
      !challenge ||
      !financialServices ||
      !bankAccount ||
      !votersCard
    ) {
      alert("Please fill all fields");
      return;
    }
    onNext({
      accessServices,
      challenge,
      financialServices,
      bankAccount,
      votersCard,
    });
  };

  return (
    <div className={styles.form}>
      <div className={styles.body}>
        <div className={styles.grid}>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="accessServices">
              {t("accessVeterinaryServices")}
            </label>
            <select
              id="accessServices"
              value={accessServices}
              onChange={(e) => setAccessServices(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">{t("selectOption")}</option>
              <option value="Accessible">Accessible</option>
              <option value="Not Accessible">Not Accessible</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="challenge">
              {t("biggestChallenge")}
            </label>
            <select
              id="challenge"
              value={challenge}
              onChange={(e) => setChallenge(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">{t("selectOption")}</option>
              <option value="Lack of market access">Lack of market access</option>
              <option value="High feed cost">High feed cost</option>
              <option value="Poor veterinary services">Poor veterinary services</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="financialServices">
              {t("financialServices")}
            </label>
            <select
              id="financialServices"
              value={financialServices}
              onChange={(e) => setFinancialServices(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">{t("selectOption")}</option>
              <option value="Microloans">Microloans</option>
              <option value="Savings groups">Savings groups</option>
              <option value="Cooperative funding">Cooperative funding</option>
            </select>
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.grid}>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="bankAccount">
              {t("bankAccount")}
            </label>
            <select
              id="bankAccount"
              value={bankAccount}
              onChange={(e) => setBankAccount(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">{t("selectOption")}</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="votersCard">
              {t("votersCard")}
            </label>
            <select
              id="votersCard"
              value={votersCard}
              onChange={(e) => setVotersCard(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">{t("selectOption")}</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
      </div>

      <div className={styles.buttonRow}>
        <Button title={t("previous")} className="btnPrev" onClick={onPrevious} />
        <Button title={t("next")}  className="btnNext" onClick={handleNext} />
      </div>
    </div>
  );
};

export default ChallengesServices;
