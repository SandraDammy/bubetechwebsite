import React, { useEffect } from "react";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import { languages } from "../../../utils/language";

const LangSelector = ({ handleLanguageChange, labelType = "short" }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const options = languages.map((lang) => ({
    value: lang.code,
    label: lang[labelType],
  }));

  const customStyles = {
    control: (base) => ({
      ...base,
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none",
      cursor: "pointer",
      width: labelType === "short" ? "90px" : "150px",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "var(--mainWhite);",
      borderRadius: "0.5rem",
      marginTop: "0.25rem",
      zIndex: 9999,
    }),
    option: (base, { isFocused, isSelected }) => ({
      ...base,
      backgroundColor: isFocused ? "var(--dropdown);" : "var(--mainBlack)",
      color: isFocused ? "var(--mainBlack)" : "var(--mainWhite);",
      cursor: "pointer",
    }),
    singleValue: (base) => ({
      ...base,
      color: "var(--mainBlack)",
      textTransform: labelType === "short" ? "uppercase" : "capitalize",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "var(--mainBlack)",
    }),
  };

  return (
    <Select
      value={options.find((opt) => opt.value === i18n.language)}
      onChange={(selectedOption) => {
        i18n.changeLanguage(selectedOption.value);
        localStorage.setItem("appLang", selectedOption.value);
        if (handleLanguageChange) handleLanguageChange({ target: { value: selectedOption.value } });
      }}
      options={options}
      styles={customStyles}
      isSearchable={false}
    />
  );
};

export default LangSelector;
