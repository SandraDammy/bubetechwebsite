import React, { useState, useEffect } from "react";
import styles from "./Form.module.css";
import Button from "../../Common/Button/Button";
import { useTranslation } from "react-i18next";
import * as XLSX from "xlsx";

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
  // const [position, setPosition] = useState("");

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem("appLang");
    if (savedLang) i18n.changeLanguage(savedLang);
  }, [i18n]);


  const formatDate = () => {
    const today = new Date();

    const day = String(today.getDate()).padStart(2, "0");
    const month = today.toLocaleString("en-US", { month: "long" });
    const year = today.getFullYear();

    return `${day}-${month}-${year}`;
  };

  // Generate Form ID like: MAC-20250701-482
  const generateFormId = () => {
    const date = new Date();
    const ymd = date.toISOString().slice(0, 10).replace(/-/g, "");
    const random = Math.floor(100 + Math.random() * 900);
    return `${ymd}-${random}`;
  };

  const [formId] = useState(generateFormId());
  const [formDate] = useState(formatDate());

  const [allData, setAllData] = useState([]);
  const [states, setStates] = useState([]);
  const [lgas, setLgas] = useState([]);
  const [wards, setWards] = useState([]);

  // ✅ Load wards automatically from Excel
  useEffect(() => {
    fetch("/ward.xlsx")
      .then((res) => res.arrayBuffer())
      .then((data) => {
        const workbook = XLSX.read(data, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(sheet);

        setAllData(jsonData);

        // ✅ Extract unique States
        const uniqueStates = [
          ...new Set(jsonData.map((row) => row.State).filter(Boolean)),
        ];
        setStates(uniqueStates);
      })
      .catch((err) => console.error("Excel load error:", err));
  }, []);

  // ✅ Load State automatically from Excel

  useEffect(() => {
    if (!state) {
      setLgas([]);
      setLga("");
      setWards([]);
      setWard("");
      return;
    }

    const filteredLgas = [
      ...new Set(
        allData.filter((row) => row.State === state).map((row) => row.LGA)
      ),
    ];

    setLgas(filteredLgas);
    setLga("");
    setWards([]);
    setWard("");
  }, [state, allData]);

  // ✅ Load LGA automatically from Excel

  useEffect(() => {
    if (!lga) {
      setWards([]);
      setWard("");
      return;
    }

    const filteredWards = [
      ...new Set(
        allData
          .filter((row) => row.State === state && row.LGA === lga)
          .map((row) => row.Ward)
      ),
    ];

    setWards(filteredWards);
    setWard("");
  }, [lga, state, allData]);

  // ✅ Load wards automatically from Excel

  const handleNext = () => {
    if (
      !fullName ||
      !sex ||
      !age ||
      !state ||
      !lga ||
      !ward ||
      !origin ||
      !base 
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
    });
  };

  return (
    <div className={styles.form}>
      <div className={styles.body}>
        <div className={styles.bodyRow}>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("formId")}</label>
           
            <input
              type="text"
              value={formId}
              readOnly
              className={styles.readOnlyInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("date")}</label>
            <input
              type="text"
              value={formDate}
              readOnly
              className={styles.readOnlyInput}
            />
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.grid}>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("fullName")}</label>
            <input
              placeholder={t("enterFullName")}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={styles.gridInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("sex")}</label>
            <select
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">{t("select")}</option>
              <option value="Male">{t("male")}</option>
              <option value="Female">{t("female")}</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("age")}</label>
            <input
              type="number"
              placeholder={t("enterAge")}
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className={styles.gridInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>
              {t("phoneNumber(optional)")}
            </label>
            <input
              placeholder={t("enterPhoneNumber")}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={styles.gridInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("state")}</label>

            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className={styles.gridInput}
            >
              <option value="">{t("selectState")}</option>
              {states.map((s, index) => (
                <option key={index} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("lga")}</label>

            <select
              value={lga}
              onChange={(e) => setLga(e.target.value)}
              className={styles.gridInput}
              disabled={!state}
            >
              <option value="">{t("selectLGA")}</option>
              {lgas.map((l, index) => (
                <option key={index} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("ward")}</label>

            <select
              value={ward}
              onChange={(e) => setWard(e.target.value)}
              className={styles.gridInput}
              disabled={!lga}
            >
              <option value="">{t("selectWard")}</option>
              {wards.map((w, index) => (
                <option key={index} value={w}>
                  {w}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("villageOrigin")}</label>
            <input
              placeholder={t("enterVillage")}
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className={styles.gridInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("currentBase")}</label>
            <input
              placeholder={t("enterCurrentBase")}
              value={base}
              onChange={(e) => setBase(e.target.value)}
              className={styles.gridInput}
            />
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

export default PersonalInfo;
