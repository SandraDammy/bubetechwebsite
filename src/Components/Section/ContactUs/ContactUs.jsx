import React from "react";
import styles from "./ContactUs.module.css";
import image from "../../../Assets/Img/ContactUs.svg";

const ContactUs = () => {
  return (
    <div className={styles.contactUs}>
      <div className={styles.formContainer }>
        <div className={styles.header}>
          <p className={styles.title}>Contact Us</p>
          <p className={styles.details}>
            if you have any query please contact us
          </p>
        </div>
        <div className={styles.form}>
          <label htmlFor="name">Name*</label>
          <br />
          <input type="text" name="Name" id="name" />
          <br />
          <label htmlFor="email">Email Address*</label>
          <br />
          <input type="email" name="email" id="email" />
          <br />
          <label htmlFor="subject">Subject</label>
          <br />
          <input type="text" name="subject" id="subject" />
          <br />
          <label htmlFor="message">Message*</label>
          <br />
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
          <br />
          <input
            className="submit"
            type="submit"
            value="Send Message"
            id="submit"
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={image} className="image" alt="contact" />
      </div>
    </div>
    
  );
};

export default ContactUs;
