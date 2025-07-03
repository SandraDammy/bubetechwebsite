import React, { useEffect, useState } from "react";
import styles from "./ContactUs.module.css";
import image from "../../../Assets/Img/ContactUs.svg";
import Button from "../../Common/Button/Button";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
    const { t, i18n } = useTranslation();
  
    useEffect(() => {
      const savedLang = localStorage.getItem("appLang");
      if (savedLang && i18n.language !== savedLang) {
        i18n.changeLanguage(savedLang);
      }
    }, [i18n]);

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
  };

  return (
    <div className={styles.contactUs}>
      <div className={styles.formContainer}>
        <div className={styles.header}>
          <p className={styles.title}>{t("Contact Us")}</p>
          <p className={styles.details}>
            {t("If you have any query, please contact us")}
          </p>
        </div>

        <form onSubmit={btnSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">{t("Name")} *</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder={t("Enter your name")}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">{t("Email Address")} *</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="{t(Enter your email)}"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject">{t("Subject")} *</label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder={t("Enter your subject")}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">{t("Message")} *</label>
            <textarea
              id="message"
              rows="8"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder={t("Enter your message")}
            ></textarea>
          </div>
          <div className={styles.submit}>
            <Button
              className="btnMsg"
              title={t("Send Message")}
              btnEventHandler={btnSubmit}
            />
          </div>
        </form>
      </div>
      <div className={styles.imageContainer}>
        <img src={image} alt="contact" className={styles.frameLogo} />
      </div>
    </div>
  );
};

export default ContactUs;
