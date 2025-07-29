import React, { useState } from "react";
import styles from "./Form.module.css";
import Button from "../../Common/Button/Button";
import SuccessModal from "../../Common/Modal/SuccessModal";

const EducationOccupation = ({ onPrevious }) => {
  const [education, setEducation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [photo, setPhoto] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false); // ✅ fixed

  const handleSubmit = () => {
    if (!education || !occupation || !photo) {
      alert("Please fill all fields and upload a photo.");
      return;
    }

    setShowSuccessModal(true); // ✅ trigger modal on submit
  };

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  return (
    <div className={styles.form}>
      <div className={styles.body}>
        <div className={styles.grid}>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="education">
              Highest Level of Education
            </label>
            <select
              id="education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">Select an option</option>
              <option value="Primary">Primary</option>
              <option value="Secondary">Secondary</option>
              <option value="Tertiary">Tertiary</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="occupation">
              Other Occupation
            </label>
            <select
              id="occupation"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">Select an option</option>
              <option value="None">None</option>
              <option value="Trader">Trader</option>
              <option value="Artisan">Artisan</option>
              <option value="Farmer">Farmer</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.grid}>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="photo">
              Upload Photo *
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
        <Button title="Previous" className="btnPrev" onClick={onPrevious} />
        <Button title="Submit" className="btnNext" onClick={handleSubmit} />
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <SuccessModal
          title="Submitted Successfully!."
          subtitle="Your details have been submitted successfully.
Thank you for filling the form."
          btnTitle="Back to Home"
          btnOnclick={() => setShowSuccessModal(false)}
        />
      )}
    </div>
  );
};

export default EducationOccupation;
