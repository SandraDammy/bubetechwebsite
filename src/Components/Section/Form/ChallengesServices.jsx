import React, { useState } from "react";
import styles from "./Form.module.css";
import Button from "../../Common/Button/Button";

const ChallengesServices = ({ onNext, onPrevious }) => {
  const [accessServices, setAccessServices] = useState("");
  const [challenge, setChallenge] = useState("");
  const [financialServices, setFinancialServices] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [votersCard, setVotersCard] = useState("");

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
              Access to Veterinary Services
            </label>
            <select
              id="accessServices"
              value={accessServices}
              onChange={(e) => setAccessServices(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">Select an option</option>
              <option value="Accessible">Accessible</option>
              <option value="Not Accessible">Not Accessible</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="challenge">
              Biggest Challenge
            </label>
            <select
              id="challenge"
              value={challenge}
              onChange={(e) => setChallenge(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">Select an option</option>
              <option value="Lack of market access">Lack of market access</option>
              <option value="High feed cost">High feed cost</option>
              <option value="Poor veterinary services">Poor veterinary services</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="financialServices">
              Potential Financial Services
            </label>
            <select
              id="financialServices"
              value={financialServices}
              onChange={(e) => setFinancialServices(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">Select an option</option>
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
              Do You Have a Bank Account?
            </label>
            <select
              id="bankAccount"
              value={bankAccount}
              onChange={(e) => setBankAccount(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">Select an option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="votersCard">
              Do You Have a Voter’s Card?
            </label>
            <select
              id="votersCard"
              value={votersCard}
              onChange={(e) => setVotersCard(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">Select an option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
      </div>

      <div className={styles.buttonRow}>
        <Button title="Previous" className="btnPrev" onClick={onPrevious} />
        <Button title="Next" className="btnNext" onClick={handleNext} />
      </div>
    </div>
  );
};

export default ChallengesServices;
