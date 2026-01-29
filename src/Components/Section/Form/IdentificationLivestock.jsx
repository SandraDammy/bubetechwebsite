import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import Button from "../../Common/Button/Button";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import CheckboxOption from "../../Common/CheckboxOption/CheckboxOption";
import mainBreedOptions from "../../../Assets/Options/mainBreedOptions";
import approximateOptions from "../../../Assets/Options/approximateOptions";
import migrationOptions from "../../../Assets/Options/migrationOptions";
import primaryCattleOptions from "../../../Assets/Options/primaryCattleOptions";
import migrationRouteOptions from "../../../Assets/Options/migrationRouteOptions";
import otherLivestocksOptions from "../../../Assets/Options/otherLivestocksOptions";

const IdentificationLivestock = ({ onNext, onPrev }) => {
  const [mainBreed, setMainBreed] = useState(null);
  const [approximate, setApproximate] = useState(null);
  const [migration, setMigration] = useState(null);
  const [primaryRoute, setPrimaryRoute] = useState(null);
  const [primaryCattle, setPrimaryCattle] = useState(null);
  const [otherLivestocks, setOtherLivestocks] = useState([]);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem("appLang");
    if (savedLang) i18n.changeLanguage(savedLang);
  }, [i18n]);

  const handleNext = () => {
    if (
      !mainBreed ||
      !approximate ||
      !migration ||
      !primaryRoute ||
      !primaryCattle ||
      otherLivestocks.length === 0
    ) {
      alert("Please fill all fields");
      return;
    }

    onNext({
      mainBreed: mainBreed.value,
      approximate: approximate.value,
      migration: migration.value,
      primaryRoute: primaryRoute.value,
      primaryCattle: primaryCattle.value,
      otherLivestocks: otherLivestocks.map((item) => item.value),
    });
  };

  const options = otherLivestocksOptions.map((item) => ({
    value: item.value,
    label: t(item.labelKey),
  }));

  const breedOptions = mainBreedOptions.map((option) => ({
    value: option.value,
    label: t(option.labelKey),
  }));

  const approxOptions = approximateOptions.map((option) => ({
    value: option.value,
    label: t(option.labelKey),
  }));

  const migrationSelectOptions = migrationOptions.map((option) => ({
    value: option.value,
    label: t(option.labelKey),
  }));

  const primaryCattleOptionsList = primaryCattleOptions.map((item) => ({
    value: item.value,
    label: t(item.labelKey),
  }));

  const migrationRouteOptionsList = migrationRouteOptions.map((item) => ({
    value: item.value,
    label: t(item.labelKey),
  }));

  return (
    <div className={styles.form}>
      <div className={styles.body}>
        <div className={styles.grid}>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="mainBreed">
              {t("mainBreed")}
            </label>

            <Select
              options={breedOptions}
              value={mainBreed}
              onChange={setMainBreed}
              placeholder={t("selectOption")}
              className={styles.gridInputs}
              classNamePrefix="react-select"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="approximate">
              {t("approximateHerdSize")}
            </label>

            <Select
              options={approxOptions}
              value={approximate}
              onChange={setApproximate}
              placeholder={t("selectOption")}
              className={styles.gridInputs}
              classNamePrefix="react-select"
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="migration">
              {t("migrationPattern")}
            </label>

            <Select
              options={migrationSelectOptions}
              value={migration}
              onChange={setMigration}
              placeholder={t("selectOption")}
              className={styles.gridInputs}
              classNamePrefix="react-select"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="primaryRoute">
              {t("migrationRouteType")}
            </label>

            <Select
              options={migrationRouteOptionsList}
              value={primaryRoute}
              onChange={setPrimaryRoute}
              placeholder={t("selectOption")}
              className={styles.gridInputs}
              classNamePrefix="react-select"
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="primaryCattle">
              {t("primaryPurposeCattle")}
            </label>

            <Select
              options={primaryCattleOptionsList}
              value={primaryCattle}
              onChange={setPrimaryCattle}
              placeholder={t("selectOption")}
              className={styles.gridInputs}
              classNamePrefix="react-select"
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="otherLivestocks">
              {t("otherLivestocks")}
            </label>
            <Select
              isMulti
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              options={options}
              value={otherLivestocks}
              onChange={setOtherLivestocks}
              placeholder={t("selectMultipleOption")}
              components={{ Option: CheckboxOption }}
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
          onClick={onPrev}
        />
        <Button title={t("next")} className="btnNext" onClick={handleNext} />
      </div>
    </div>
  );
};

export default IdentificationLivestock;
