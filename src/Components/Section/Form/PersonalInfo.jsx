import React, { useState, useEffect } from "react";
import styles from "./Form.module.css";
import Button from "../../Common/Button/Button";
import { useTranslation } from "react-i18next";
import * as XLSX from "xlsx";
import Select from "react-select";

const PersonalInfo = ({ onNext, onPrevious }) => {
  const [fullName, setFullName] = useState("");
  const [sex, setSex] = useState(null);
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState(null);
  const [lga, setLga] = useState(null);
  const [ward, setWard] = useState(null);
  const [origin, setOrigin] = useState("");
  const [base, setBase] = useState("");

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

  // Load Excel
  useEffect(() => {
    fetch("/ward.xlsx")
      .then((res) => res.arrayBuffer())
      .then((data) => {
        const workbook = XLSX.read(data, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(sheet);

        setAllData(jsonData);

        const uniqueStates = [
          ...new Set(jsonData.map((row) => row.State).filter(Boolean)),
        ];

        setStates(uniqueStates);
      })
      .catch((err) => console.error("Excel load error:", err));
  }, []);

  // State → LGA
  useEffect(() => {
    if (!state) {
      setLgas([]);
      setLga(null);
      setWards([]);
      setWard(null);
      return;
    }

    const filteredLgas = [
      ...new Set(
        allData
          .filter((row) => row.State === state.value)
          .map((row) => row.LGA),
      ),
    ];

    setLgas(filteredLgas);
    setLga(null);
    setWards([]);
    setWard(null);
  }, [state, allData]);

  // LGA → Ward
  useEffect(() => {
    if (!lga) {
      setWards([]);
      setWard(null);
      return;
    }

    const filteredWards = [
      ...new Set(
        allData
          .filter(
            (row) =>
              row.State === state.value && row.LGA === lga.value,
          )
          .map((row) => row.Ward),
      ),
    ];

    setWards(filteredWards);
    setWard(null);
  }, [lga, state, allData]);

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
      sex: sex.value,
      age,
      phone,
      state: state.value,
      lga: lga.value,
      ward: ward.value,
      origin,
      base,
    });
  };

  const sexOptions = [
    { value: "Male", label: t("male") },
    { value: "Female", label: t("female") },
  ];

  const stateOptions = states.map((s) => ({ value: s, label: s }));
  const lgaOptions = lgas.map((l) => ({ value: l, label: l }));
  const wardOptions = wards.map((w) => ({ value: w, label: w }));

  return (
    <div className={styles.form}>
      <div className={styles.body}>
        <div className={styles.bodyRow}>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("formId")}</label>
            <input value={formId} readOnly className={styles.readOnlyInput} />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("date")}</label>
            <input value={formDate} readOnly className={styles.readOnlyInput} />
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.grid}>
          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("fullName")}</label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={styles.gridInput}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("sex")}</label>
            <Select
              options={sexOptions}
              value={sex}
              onChange={setSex}
              placeholder={t("select")}
              className={styles.gridInputs}
              classNamePrefix="react-select"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("age")}</label>
            <input
              type="number"
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={styles.gridInput}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("state")}</label>
            <Select
              options={stateOptions}
              value={state}
              onChange={setState}
              placeholder={t("selectState")}
              className={styles.gridInputs}
              classNamePrefix="react-select"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("lga")}</label>
            <Select
              options={lgaOptions}
              value={lga}
              onChange={setLga}
              placeholder={t("selectStateFirst")}
              isDisabled={!state}
              className={styles.gridInputs}
              classNamePrefix="react-select"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("ward")}</label>
            <Select
              options={wardOptions}
              value={ward}
              onChange={setWard}
              placeholder={t("selectLgaFirst")}
              isDisabled={!lga}
              className={styles.gridInputs}
              classNamePrefix="react-select"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("villageOrigin")}</label>
            <input
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className={styles.gridInput}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.rowLabel}>{t("currentBase")}</label>
            <input
              value={base}
              onChange={(e) => setBase(e.target.value)}
              className={styles.gridInput}
            />
          </div>
        </div>
      </div>

      <div className={styles.buttonRow}>
        <Button title={t("previous")} className="btnPrev" onClick={onPrevious} />
        <Button title={t("next")} className="btnNext" onClick={handleNext} />
      </div>
    </div>
  );
};

export default PersonalInfo;
