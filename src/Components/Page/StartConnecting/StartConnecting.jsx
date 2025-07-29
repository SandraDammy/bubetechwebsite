import React, { useState } from "react";
import styles from "./StartConnecting.module.css";
import IdentificationLivestock from "../../Section/Form/IdentificationLivestock";
import ChallengesServices from "../../Section/Form/ChallengesServices";
import EducationOccupation from "../../Section/Form/EducationOccupation";
import PersonalInfo from "../../Section/Form/PersonalInfo";

const StartConnecting = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({});

  const subtitleMap = {
    1: "Personal Information",
    2: "Identification & Livestock",
    3: "Challenges & Services",
    4: "Education & Other Occupation",
  };

  const handleEventNext = (data = {}) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      ...data,
    }));
    const nextStep = step + 1;
    setStep(nextStep);
  };

  const handleEventPrevious = () => {
    const prevStep = step - 1;
    if (prevStep >= 1) setStep(prevStep);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <PersonalInfo onNext={handleEventNext} onPrev={handleEventPrevious} />
        );
      case 2:
        return (
          <IdentificationLivestock
            onNext={handleEventNext}
            onPrev={handleEventPrevious}
          />
        );
      case 3:
        return (
          <ChallengesServices
            onNext={handleEventNext}
            onPrev={handleEventPrevious}
          />
        );
      case 4:
        return <EducationOccupation formValues={formValues} />;
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
                    isActive
                      ? styles.active
                      : isCompleted
                      ? styles.completed
                      : ""
                  }`}
                >
                  <div
                    className={`${styles.innerDot} ${
                      isActive
                        ? styles.active
                        : isCompleted
                        ? styles.completed
                        : ""
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
