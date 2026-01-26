import React, { useState, useRef, useEffect } from "react";
import styles from "./MultiSelect.module.css";

const MultiSelect = ({
  label,
  placeholder = "Select option(s)",
  options = [],
  value = [],
  onChange,
  multiple = true,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const toggleOption = (val) => {
    if (!multiple) {
      onChange([val]);
      setOpen(false);
      return;
    }

    onChange(
      value.includes(val) ? value.filter((v) => v !== val) : [...value, val],
    );
  };

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const displayValue =
    value.length > 0
      ? value.map((v) => options.find((o) => o.value === v)?.label).join(", ")
      : placeholder;

  return (
    <div className={styles.wrapper} ref={ref}>
      {label && <label className={styles.label}>{label}</label>}

      {/* Select box */}
      <div className={styles.selectBox} onClick={() => setOpen(!open)}>
        <span
          className={value.length ? styles.selectedText : styles.placeholder}
        >
          {displayValue}
        </span>
        <span className={styles.arrow}>▾</span>
      </div>

      {/* Dropdown */}
      {open && (
        <div className={styles.dropdown}>
          {options.map((opt) => (
            <label key={opt.value} className={styles.option}>
              <input
                type="checkbox"
                checked={value.includes(opt.value)}
                onChange={() => toggleOption(opt.value)}
              />
              {opt.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
