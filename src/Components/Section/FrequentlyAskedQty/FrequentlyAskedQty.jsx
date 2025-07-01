import React, { useState } from "react";
import styles from "./FrequentlyAskedQty.module.css";
import Faq from "../../../Assets/Img/FAQ.svg";
import PlusIcon from "../../../Assets/Img/PlusIcon.svg";
import CloseIcon from "../../../Assets/Img/CloseIcon.svg";

const faqData = [
  {
    question: "Where can I watch?",
    answer:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.",
  },
  {
    question: "Mauris id nibh eu fermentum mattis purus?",
    answer:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.",
  },
  {
    question: "Eros imperdiet rhoncus?",
    answer:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.",
  },
  {
    question: "Fames imperdiet quam fermentum?",
    answer:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.",
  },
  {
    question: "Varius vitae, convallis amet lacus sit aliquet nibh?",
    answer:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.",
  },
  {
    question: "Tortor nisl pellentesque sit quis orci dolor?",
    answer:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.",
  },
];

const FrequentlyAskedQty = () => {
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
        <h2>Frequently Asked Questions</h2>

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
