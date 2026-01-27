import React from "react";
import { components } from "react-select";
import styles from "./CheckboxOption.module.css";

const CheckboxOption = (props) => {
  return (
    <components.Option {...props}>
      <div className={styles.option}>
        <input
          type="checkbox"
          checked={props.isSelected}
          readOnly
          className={styles.checkbox}
        />
        <span className={styles.label}>{props.label}</span>
      </div>
    </components.Option>
  );
};

export default CheckboxOption;
