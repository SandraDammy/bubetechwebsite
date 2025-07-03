import React, { useEffect, useState } from "react";
import styles from "./FrequentlyAskedQty.module.css";
import Faq from "../../../Assets/Img/FAQ.svg";
import PlusIcon from "../../../Assets/Img/PlusIcon.svg";
import CloseIcon from "../../../Assets/Img/CloseIcon.svg";
import {faqData} from "../../../Assets/Data/faqData"; 
import { useTranslation } from "react-i18next";



const FrequentlyAskedQty = () => {

    const { t, i18n } = useTranslation();
  
    useEffect(() => {
      const savedLang = localStorage.getItem("appLang");
      if (savedLang && i18n.language !== savedLang) {
        i18n.changeLanguage(savedLang);
      }
    }, [i18n]);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.faqContainer}>
      <div className={styles.imageContainer}>
        <img src={Faq} alt="FAQ" className={styles.faqLogo} />
      </div>
      <div className={styles.faqSection}>
        <h2>{t("Frequently Asked Questions")}</h2>

        {faqData.map((item, index) => (
          <div className={styles.faqItem} key={index}>
            <div
              className={styles.faqQuestion}
              onClick={() => toggleAnswer(index)}
            >
              {item.question}
              <span className={styles.faqIcon}>
                <img
                  src={activeIndex === index ? CloseIcon : PlusIcon}
                  alt={activeIndex === index ? "Collapse" : "Expand"}
                  className={styles.iconImg}
                />
              </span>
            </div>
            {activeIndex === index && (
              <div className={styles.faqAnswer}>
                <span>{item.answer}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAskedQty;
