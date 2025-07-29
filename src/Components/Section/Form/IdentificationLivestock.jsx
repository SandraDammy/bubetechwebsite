import React, { useState } from "react";
import styles from "./Form.module.css";
import Button from "../../Common/Button/Button";

const IdentificationLivestock = ({ onNext, onPrevious }) => {
  const [mainBreed, setMainBreed] = useState("");
  const [approximate, setApproximate] = useState("");
  const [migration, setMigration] = useState("");
  const [primaryRoute, setPrimaryRoute] = useState("");
  const [primaryCattle, setPrimaryCattle] = useState("");
  const [otherLivestocks, setOtherLivestocks] = useState("");

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
            <label className={styles.rowLabel} htmlFor="mainBreed">
              Main Cattle Breed
            </label>
            <select
              id="mainBreed"
              value={mainBreed}
              onChange={(e) => setMainBreed(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">Select an option</option>
              <option value="White Fulani">White Fulani</option>
              <option value="Red Bororo">Red Bororo</option>
              <option value="Muturu">Muturu</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="approximate">
              Approximate Herd Size
            </label>
            <select
              id="approximate"
              value={approximate}
              onChange={(e) => setApproximate(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">Select an option</option>
              <option value="1-50">1-50</option>
              <option value="51-100">51-100</option>
              <option value="100+">100+</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="migration">
              Migration Pattern
            </label>
            <select
              id="migration"
              value={migration}
              onChange={(e) => setMigration(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">Select an option</option>
              <option value="Seasonal">Seasonal</option>
              <option value="Nomadic">Nomadic</option>
              <option value="Settled">Settled</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="primaryRoute">
              Primary Migration Route
            </label>
            <input
              id="primaryRoute"
              placeholder="Enter migration route"
              value={primaryRoute}
              onChange={(e) => setPrimaryRoute(e.target.value)}
              className={styles.gridInput}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="primaryCattle">
              Primary Purpose of Cattle
            </label>
            <select
              id="primaryCattle"
              value={primaryCattle}
              onChange={(e) => setPrimaryCattle(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">Select an option</option>
              <option value="Milk">Milk</option>
              <option value="Meat">Meat</option>
              <option value="Breeding">Breeding</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="otherLivestocks">
              Other Livestocks
            </label>
            <select
              id="otherLivestocks"
              value={otherLivestocks}
              onChange={(e) => setOtherLivestocks(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">Select an option</option>
              <option value="Goats">Goats</option>
              <option value="Sheep">Sheep</option>
              <option value="Poultry">Poultry</option>
              <option value="None">None</option>
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

export default IdentificationLivestock;
