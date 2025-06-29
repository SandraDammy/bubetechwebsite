import React from 'react'
import styles from './WhyChoose.module.css'
import Button from "../../Common/Button/Button";
import {BiLogoInternetExplorer, BiMoney,BiSolidPaint} from 'react-icons/bi';
import price from '../../../Assets/Img/Prices.svg';
import language from '../../../Assets/Img/Language.svg';
import community from '../../../Assets/Img/Community.svg';
import resources from '../../../Assets/Img/Resources.svg';


import './WhyChoose.css'


import { BsFillPeopleFill } from 'react-icons/bs';
const WhyChoose = () => {
  return (
    // <div className={styles.whyChoose}>WhyChoose
    //    <Button
    //     title="Send Message"
    //     className="btnGreenOutline"
    //     type="button"
    //   />
    // </div>

    <div className="main-container">
    <div className="why-choose">
      <div className="title-container">
      <div className="featurebtn">Features</div>
        <h2 className="why-choose-title">
          Why Choose Bubetech
        </h2>
      </div>
        {/* Row One */}
        <div className="why-choose-description-container-one"> 
          {/* Column One */}
          <div className="container-one">
            <div className="why-choose-container-icon">
              <img src={price} alt="price" />
            </div>
              <p className="why-choose-description-title">
                Fair Market Prices
              </p>
              <p className="why-choose-description-text">
                Get Current market prices and know the true value of your crops, livestock, and fish.
              </p>
          </div>
          {/* Column Two */}
          <div className="container-one">
            <div className="why-choose-container-icon">
            <img src={language} alt="language" />
              </div>
              <p className="why-choose-description-title">
                Local Language Support
              </p>
              <p className="why-choose-description-text">
               Get help in your local language through voice calls, SMS, or mobile app. Works with or without internet on any phone
              </p>
          </div>
        </div>
        {/* Row Two */}
        <div className="why-choose-description-container-two"> 
          {/* Column One */}
          <div className="container-one">
            <div className="why-choose-container-icon">
            <img src={community} alt="community" />
              </div>
              <p className="why-choose-description-title">
                Expert Community
              </p>
              <p className="why-choose-description-text">
                Get advice from agricultural experts and experience farmers.
              </p>
          </div>
          {/* Column Two */}
          <div className="container-one">
            <div className="why-choose-container-icon">
            <img src={resources} alt="resources" />
            </div>
              <p className="why-choose-description-title">
                Quality Resources
              </p>
              <p className="why-choose-description-text">
               Find quality resources like seeds, grazing areas, fishing spots and more. Connect with farmers to share resources.
              </p>
          </div>
        </div>
    </div>
    </div>


  )
}

export default WhyChoose