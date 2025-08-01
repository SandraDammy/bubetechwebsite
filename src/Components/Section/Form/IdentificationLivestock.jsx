import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import Button from "../../Common/Button/Button";
import { useTranslation } from "react-i18next";

const IdentificationLivestock = ({ onNext, onPrevious }) => {
  const [mainBreed, setMainBread] = useState("");
  const [approximate, setApproximate] = useState("");
  const [migration, setMigration] = useState("");
  const [primaryRoute, setPrimaryRoute] = useState("");
  const [primaryCattle, setPrimaryCattle] = useState("");
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
              {t("mainBreed")}
            </label>
            <select
              id="mainBreed"
              value={mainBreed}
              onChange={(e) => setMainBread(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">{t("selectOption")}</option>
              <option value="adamawa-gudali">{t("Adamawa Gudali")}</option>
              <option value="arab-shuwa">{t("Arab (Shuwa)")}</option>
              <option value="azawak">{t("Azawak")}</option>
              <option value="bokola">{t("Bokola")}</option>
              <option value="borgou">{t("Borgou")}</option>
              <option value="kapsiki">{t("Kapsiki")}</option>
              <option value="kuri">{t("Kuri")}</option>
              <option value="muturu">{t("Muturu")}</option>
              <option value="ndama">{t("N'dama")}</option>
              <option value="namchi-doayo">{t("Namchi (Doayo)")}</option>
              <option value="red-bororo">{t("Red Bororo")}</option>
              <option value="red-fulani">{t("Red Fulani")}</option>
              <option value="sokoto-gudali">{t("Sokoto Gudali")}</option>
              <option value="somba">{t("Somba")}</option>
              <option value="white-fulani">{t("White Fulani")}</option>
              <option value="other">{t("Other")}</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="approximate">
              {t("approximateHerdSize")}
            </label>
            <select
              id="approximate"
              value={approximate}
              onChange={(e) => setApproximate(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">{t("selectOption")}</option>
              <option value="0-100">0-100</option>
              <option value="101-200">101-200</option>
              <option value="201-300">201-300</option>
              <option value="301-400">301-400</option>
              <option value="401-500">401-500</option>
              <option value="501-600">501-600</option>
              <option value="601-700">601-700</option>
              <option value="701-800">701-800</option>
              <option value="801-900">801-900</option>
              <option value="901-1000">901-1000</option>
              <option value="1001-2002">1001-2002</option>
              <option value="please-specify">Please Specify</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="migration">
              {t("migrationPattern")}
            </label>
            <select
              id="migration"
              value={migration}
              onChange={(e) => setMigration(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">{t("selectOption")}</option>
              <option value="seasonal">{t("Seasonal")}</option>
              <option value="nomadic">{t("Nomadic")}</option>
              <option value="semi-nomadic">{t("Semi-Nomadic")}</option>
              <option value="sedentary">{t("Sedentary")}</option>
              <option value="emergency">{t("Emergency")}</option>
              <option value="economic">{t("Economic")}</option>
              <option value="cultural-social">{t("Cultural/Social")}</option>
              <option value="other">{t("Other")}</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="primaryRoute">
              {t("primaryMigrationRoute")}
            </label>
            <select
              id="primaryRoute"
              value={primaryRoute}
              onChange={(e) => setPrimaryRoute(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">{t("selectOption")}</option>
              <option value="north-south-seasonal">
                {t("North-South Seasonal Migration Routes")}
              </option>
              <option value="transhumance-corridors">
                {t("Transhumance Corridors (Traditional Grazing Routes)")}
              </option>
              <option value="intra-state">
                {t("Intra-State or Short-Distance Migration Route")}
              </option>
              <option value="west-africa-border">
                {t("West Africa Trans-Border Migration Routes")}
              </option>
              <option value="agro-pastoral-circular">
                {t("Agro-Pastoral Circular Routes")}
              </option>
              <option value="emergency-conflict">
                {t("Emergency or Conflict-Induced Routes")}
              </option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="primaryCattle">
              {t("primaryPurposeCattle")}
            </label>
            <select
              id="primaryCattle"
              value={primaryCattle}
              onChange={(e) => setPrimaryCattle(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">{t("selectOption")}</option>
              <option value="livelihood-economic">
                {t("Livelihood & Economical Survival")}
              </option>
              <option value="milk-production">{t("Milk Production")}</option>
              <option value="beef-production">{t("Beef Production")}</option>
              <option value="social-status">
                {t("Social Status & Prestige")}
              </option>
              <option value="dowry-traditions">
                {t("Dowry & Marital Traditions")}
              </option>
              <option value="cultural-spiritual">
                {t("Cultural & Spiritual Significance")}
              </option>
              <option value="security-savings">
                {t("Security & Savings")}
              </option>
              <option value="manure-farming">
                {t("Manure for Farming (Agro-pastoralism)")}
              </option>
              <option value="inheritance">
                {t("Inheritance & Intergenerational Wealth Transfer")}
              </option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel} htmlFor="otherLivestocks">
              {t("otherLivestocks")}
            </label>
            <select
              id="otherLivestocks"
              multiple
              value={otherLivestocks}
              onChange={(e) =>
                setOtherLivestocks(
                  Array.from(e.target.selectedOptions, (option) => option.value)
                )
              }
              className={styles.gridInputTxt}
            >
              <option value="">{t("selectOption")}</option>
              <option value="sheep">{t("Sheep")}</option>
              <option value="goats">{t("Goats")}</option>
              <option value="camel">{t("Camel")}</option>
              <option value="poultry">{t("Poultry")}</option>
              <option value="others">{t("Others")}</option>
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

export default IdentificationLivestock;
