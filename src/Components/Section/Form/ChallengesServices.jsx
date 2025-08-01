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
              <option value="inadequateInfrastructure">
                {t("Inadequate Veterinary Infrastructure")}
              </option>
              <option value="shortagePersonnel">
                {t("Shortage of Trained Veterinary Personnel")}
              </option>
              <option value="highCost">
                {t("High Cost of Veterinary Services & Medicines")}
              </option>
              <option value="poorColdChain">
                {t("Lack of or Poor Cold Chain and Drug Storage")}
              </option>
              <option value="limitedKnowledge">
                {t("Limited Knowledge of Disease Prevention")}
              </option>
              <option value="poorSurveillance">
                {t("Poor Disease Surveillance and Reporting")}
              </option>
              <option value="seasonalMigration">
                {t("Mobility of the Fulani (Seasonal Migration)")}
              </option>
              <option value="languageBarriers">
                {t("Language and Cultural Barriers")}
              </option>
              <option value="insecurityConflict">
                {t("Insecurity and Conflict")}
              </option>
              <option value="distrustGov">
                {t("Distrust of Government Services")}
              </option>
              <option value="inconsistentPolicy">
                {t("Inconsistent Government Support and Policies")}
              </option>
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
              <option value="veterinaryDrugs">
                {t("Veterinary Drugs & Services")}
              </option>
              <option value="grazingWater">{t("Grazing Land & Water")}</option>
              <option value="cattleRustling">{t("Cattle Rustling")}</option>
              <option value="banditry">{t("Banditry")}</option>
              <option value="farmerHerderConflict">
                {t("Farmer/Herder Conflict")}
              </option>
              <option value="interTribalConflict">
                {t("Inter-Tribal Conflict")}
              </option>
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
              <option value="fullBanking">{t("Full Banking Services")}</option>
              <option value="mobileBanking">{t("Mobile Banking")}</option>
              <option value="livestockInsurance">
                {t("Livestock Insurance")}
              </option>
              <option value="microcreditsLoans">
                {t("Microcredits & Livestock Loans")}
              </option>
              <option value="remittancePayment">
                {t("Remittance & Payment Services")}
              </option>
              <option value="valueChain">{t("Value Chain Financing")}</option>
              <option value="thriftCoop">
                {t("Thrift & Cooperative Finance")}
              </option>
              <option value="other">{t("Other")}</option>
              <option value="notInterested">{t("Not Interested")}</option>
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
