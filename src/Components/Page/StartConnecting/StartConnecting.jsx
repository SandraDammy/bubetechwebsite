import React, { useState } from "react";
import styles from "./StartConnecting.module.css";
import IdentificationLivestock from "../../Section/Form/IdentificationLivestock";
import ChallengesServices from "../../Section/Form/ChallengesServices";
import EducationOccupation from "../../Section/Form/EducationOccupation";
import PersonalInfo from "../../Section/Form/PersonalInfo";
import { useTranslation } from "react-i18next";

const StartConnecting = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({});
  const { t } = useTranslation();

  const subtitleMap = {
    1: t("step.personalInfo"),
    2: t("step.identification"),
    3: t("step.challenges"),
    4: t("step.education"),
  };

  const handleNext = (data = {}) => {
    setFormValues((prev) => ({
      ...prev,
      ...data,
    }));
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handlePrevious = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (data = {}) => {
    const finalData = {
      ...formValues,
      ...data,
    };
    console.log("Submitting form with values:", finalData);
    // Submit logic here (e.g., API call)
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <PersonalInfo
            onNext={handleNext}
            onPrev={() => window.location.href = "/startconnect"} // or any route you want
          />
        );
      case 2:
        return (
          <IdentificationLivestock
            onNext={handleNext}
            onPrev={handlePrevious}
          />
        );
      case 3:
        return (
          <ChallengesServices
            onNext={handleNext}
            onPrev={handlePrevious}
          />
        );
      case 4:
        return (
          <EducationOccupation
            formValues={formValues}
            onSubmit={handleSubmit}
            onPrev={handlePrevious}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.profileForm}>
        <div className={styles.stepper}>
          {Object.entries(subtitleMap).map(([key, label], index) => {
            const stepNumber = parseInt(key);
            const isActive = step === stepNumber;
            const isCompleted = step > stepNumber;

            return (
              <div key={stepNumber} className={styles.stepItem}>
                <div
                  className={`${styles.stepCircle} ${
                    isActive ? styles.active : isCompleted ? styles.completed : ""
                  }`}
                >
                  <div
                    className={`${styles.innerDot} ${
                      isActive ? styles.active : isCompleted ? styles.completed : ""
                    }`}
                  ></div>
                </div>
                {index !== Object.keys(subtitleMap).length - 1 && (
                  <div className={styles.stepLine}></div>
                )}
                <p
                  className={`${styles.stepLabel} ${
                    isActive ? styles.activeLabel : ""
                  }`}
                >
                  {label}
                </p>
              </div>
            );
          })}
        </div>

        <div className={styles.formInput}>{renderStep()}</div>
      </div>
    </div>
  );
};

export default StartConnecting;
