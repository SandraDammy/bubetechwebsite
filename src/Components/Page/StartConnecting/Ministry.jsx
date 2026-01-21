import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Common/Button/Button";
import styles from "./StartConnecting.module.css";
import logo from "../../../Assets/Img/BUBETECH_Logo.svg";
import { useTranslation } from "react-i18next";

const Ministry = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [ministry, setMinistry] = useState("");
  const [association, setAssociation] = useState("");

  useEffect(() => {
    const savedLang = localStorage.getItem("appLang");
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  const handleSubmit = () => {
    if (!ministry || !association) return;

    navigate("/form", {
      state: { ministry, association },
    });
  };

  return (
    <div className="layoutCont">
      <header className="header">
        <nav className={styles.nav}>
          <div className={styles.logoSection}>
            <Link to="/">
              <img src={logo} alt="Buben Tech Logo" className={styles.logo} />
            </Link>
          </div>
        </nav>
      </header>

      <div className={styles.formInput}>
        <p className={styles.title}>{t("pleaseSelectYourMinistry")}</p>

        <div className={styles.body}>
          <div className={styles.formGroup}>
            <label htmlFor="ministry" className={styles.rowLabel}>
              {t("ministry")}
            </label>
            <select
              id="ministry"
              value={ministry}
              onChange={(e) => setMinistry(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">{t("selectTheMinistryYouBelongTo")}</option>
              <option value="agriculture_livestock">
                {t("ministryOfAgricultureAndLivestock")}
              </option>
              <option value="livestock">{t("ministryOfLivestock")}</option>
              <option value="water_resources">
                {t("ministryOfWaterResources")}
              </option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="association" className={styles.rowLabel}>
              {t("association")}
            </label>
            <select
              id="association"
              value={association}
              onChange={(e) => setAssociation(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">{t("selectYourOrganisation")}</option>
              <option value="afan">
                {t("allFarmersAssociationOfNigeria")}
              </option>
              <option value="afgsan">
                {t("amanaFarmersAndGrainsSuppliersAssociationOfNigeria")}
              </option>
              <option value="acfaapon">
                {t(
                  "associationOfCommercialFarmersAndAgroAlliedProducersOfNigeria",
                )}
              </option>
              <option value="nfa">{t("nigeriaFarmersAlliance")}</option>
              <option value="niwab">
                {t("nigerianWomenInAgriculturalBusinessCooperativeSocietyLtd")}
              </option>
            </select>
          </div>

          <div className={styles.submitButton}>
            <Button
              title={t("continue")}
              className="btnNext"
              onClick={handleSubmit}
              disabled={!ministry || !association}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ministry;
