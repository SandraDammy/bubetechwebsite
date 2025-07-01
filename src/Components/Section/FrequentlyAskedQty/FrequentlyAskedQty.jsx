import React from 'react'
import styles from './FrequentlyAskedQty.module.css'
import faqimage from "../../../Assets/Img/FAQ.svg";

const FrequentlyAskedQty = () => {
  return (
    <div className={styles.faqContainer}>
      <div className={styles.faqImage}>
        <img src={faqimage} alt="FAQ" />
      </div>
      <div className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>

        <div className={styles.faqItem}>
          <div className={styles.faqQuestion}>
            Where can I watch?
            <span className={styles.faqIcon}>×</span>
          </div>
          <div className={styles.faqAnswer}>
            Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.
          </div>
        </div>

        <div className={styles.faqItem}>
          <div className={styles.faqQuestion}>
            Mauris id nibh eu fermentum mattis purus?
            <span className={styles.faqIcon}>+</span>
          </div>
        </div>

        <div className={styles.faqItem}>
          <div className={styles.faqQuestion}>
            Eros imperdiet rhoncus?
            <span className={styles.faqIcon}>+</span>
          </div>
        </div>

        <div className={styles.faqItem}>
          <div className={styles.faqQuestion}>
            Fames imperdiet quam fermentum?
            <span className={styles.faqIcon}>+</span>
          </div>
        </div>

        <div className={styles.faqItem}>
          <div className={styles.faqQuestion}>
            Varius vitae, convallis amet lacus sit aliquet nibh?
            <span className={styles.faqIcon}>+</span>
          </div>
        </div>

        <div className={styles.faqItem}>
          <div className={styles.faqQuestion}>
            Tortor nisl pellentesque sit quis orci dolor?
            <span className={styles.faqIcon}>+</span>
          </div>
        </div>
      </div>
    </div>
  )
}


export default FrequentlyAskedQty

