import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./StartConnecting.module.css";
import IdentificationLivestock from "../../Section/Form/IdentificationLivestock";
import ChallengesServices from "../../Section/Form/ChallengesServices";
import EducationOccupation from "../../Section/Form/EducationOccupation";
import PersonalInfo from "../../Section/Form/PersonalInfo";
import { useTranslation } from "react-i18next";
import SuccessModal from "../../Common/Modal/SuccessModal";

const StartConnecting = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({
    ministry: location.state?.ministry || "",
    association: location.state?.association || "",
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const subtitleMap = useMemo(
    () => ({
      1: t("step.personalInfo"),
      2: t("step.identification"),
      3: t("step.challenges"),
      4: t("step.education"),
    }),
    [t]
  );

  const handleNext = (data = {}) => {
    setFormValues((prev) => ({ ...prev, ...data }));
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handlePrevious = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (data = {}) => {
    const finalData = { ...formValues, ...data };
    console.log("Submitting form:", finalData);

    setTimeout(() => setShowSuccessModal(true), 1000);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <PersonalInfo
            onNext={handleNext}
            onPrev={() => navigate("/startConnecting")}
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
            const stepNumber = Number(key);
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
                  />
                </div>
                {index !== Object.keys(subtitleMap).length - 1 && (
                  <div className={styles.stepLine} />
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

      {showSuccessModal && (
        <SuccessModal
          title={t("title")}
          subtitle={t("subtitle")}
          btnTitle={t("btnBack")}
          btnOnclick={() => {
            setShowSuccessModal(false);
            navigate("/");
          }}
        />
      )}
    </div>
  );
};

export default StartConnecting;
