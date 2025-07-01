import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import Button from "../Button/Button";

import logo from "../../../Assets/Img/BUBETECH_Logo.svg";
import Facebook from "../../../Assets/Img/facebook.svg";
import Instagram from "../../../Assets/Img/instagram.svg";
import Twitter from "../../../Assets/Img/Twitter.svg";
import Linkedin from "../../../Assets/Img/Linkedin.svg";

const Footer = () => {
  const [formData, setFormData] = useState({ email: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const btnSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with:", formData.email);
    // API call goes here
  };

  const handleLanguageChange = (e) => {
    console.log("Language selected:", e.target.value);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.subscribeSection}>
        <h2>Stay Connected</h2>
        <p>
          Stay connected with farmer success stories, market insights, and
          community updates.
        </p>
        <form className={styles.subscribeForm} onSubmit={btnSubscribe}>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          <Button
            className="btnWhite"
            title="Subscribe"
            btnEventHandler={btnSubscribe}
          />
        </form>
      </div>

      <hr className={styles.divider} />

      <div className={styles.description}>
        <h2>BubeTech</h2>
        <p>
          Building farmer-to-farmer and farmer-to-expert connections across West
          Africa. Traditional wisdom meets modern community networks.
        </p>
        <p>Turning Farm Isolation into Shared Success</p>
      </div>

      <div className={styles.linksSection}>
        <div className={styles.column}>
          <img src={logo} alt="Bubetech Logo" className={styles.logo} />
          <div className={styles.socials}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Facebook} alt="Facebook" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Twitter} alt="Twitter" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Linkedin} alt="Linkedin" />
            </a>
          </div>
        </div>

        <div className={styles.column}>
          <h6>Get Connected</h6>
          <Link to="/contact" className={styles.link}>
            connect@bubetech.africa
          </Link>
          <Link to="/support" className={styles.link}>
            Community Support: +234 803 700 0117
          </Link>
        </div>

        <div className={styles.column}>
          <h6>Learn More</h6>
          <Link to="/our-story" className={styles.link}>
            Our Story
          </Link>
          <Link to="/associations" className={styles.link}>
            For Agricultural Associations
          </Link>
          <Link to="/careers" className={styles.link}>
            Careers
          </Link>
          <Link to="/contact" className={styles.link}>
            Contact Us
          </Link>
        </div>

        <div className={styles.column}>
          <h6>Support</h6>
          <Link to="/call-support" className={styles.link}>
            Call Support
          </Link>
          <Link to="/help" className={styles.link}>
            Get Help
          </Link>
          <Link to="/language-support" className={styles.link}>
            Language Support
          </Link>
          <Link to="/community-hubs" className={styles.link}>
            Community Hubs
          </Link>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomLeft}>
          <select onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="yo">Yoruba</option>
            <option value="ig">Igbo</option>
          </select>
          <span>•</span>
          <Link to="/privacy" className={styles.link}>
            Privacy
          </Link>
          <span>•</span>
          <Link to="/terms" className={styles.link}>
            Terms of Service
          </Link>
        </div>
        <div className={styles.bottomRight}>
          <p>© 2024 Bubetech. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
