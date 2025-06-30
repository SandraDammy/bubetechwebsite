import React, { useState } from "react";
import styles from "./ContactUs.module.css";
import image from "../../../Assets/Img/ContactUs.svg";
import Button from "../../Common/Button/Button";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const btnSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // You can add your API call here
  };

  return (
    <div className={styles.contactUs}>
      <div className={styles.formContainer}>
        <div className={styles.header}>
          <p className={styles.title}>Contact Us</p>
          <p className={styles.details}>
            If you have any query, please contact us
          </p>
        </div>

        <form onSubmit={btnSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject *</label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              rows="8"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className={styles.submit}>
            <Button
              className="btnMsg"
              title="Send Message"
              btnEventHandler={btnSubmit}
            />
          </div>
        </form>
      </div>
      <div className={styles.imageContainer}>
        <img src={image} alt="contact" className={styles.frameLogo}/>
      </div>
    </div>
  );
};

export default ContactUs;
