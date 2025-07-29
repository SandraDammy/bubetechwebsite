import React, { useState } from "react";
import styles from "./Form.module.css";
import Button from "../../Common/Button/Button";

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
            <label className={styles.rowLabel}>Form ID</label>
            <input
              type="text"
              value="291FY123"
              readOnly
              className={styles.readOnlyInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>Date</label>
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
            <label className={styles.rowLabel}>Full Name</label>
            <input
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={styles.gridInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>Sex</label>
            <select
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>Age</label>
            <input
              type="number"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className={styles.gridInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>Phone Number (Optional)</label>
            <input
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={styles.gridInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>State</label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">Select</option>
              <option value="State A">State A</option>
              <option value="State B">State B</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>LGA</label>
            <select
              value={lga}
              onChange={(e) => setLga(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">Select</option>
              <option value="LGA A">LGA A</option>
              <option value="LGA B">LGA B</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>Ward</label>
            <input
              placeholder="Enter your ward"
              value={ward}
              onChange={(e) => setWard(e.target.value)}
              className={styles.gridInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>
              Village/Community of Origin
            </label>
            <input
              placeholder="Enter your community of origin"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className={styles.gridInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>Current Settlement Base</label>
            <input
              placeholder="Enter your current base"
              value={base}
              onChange={(e) => setBase(e.target.value)}
              className={styles.gridInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>Position in MACBAN</label>
            <select
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">Select</option>
              <option value="Leader">Leader</option>
              <option value="Member">Member</option>
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

export default PersonalInfo;
