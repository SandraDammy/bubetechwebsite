import React from 'react'
import styles from './Home.module.css'
import LandingPage from '../../Section/LandingPage/LandingPage'
import Rating from '../../Section/Rating/Rating'
import OurStory from '../../Section/OurStory/OurStory'
import WhyChoose from '../../Section/WhyChoose/WhyChoose'
import FrequentlyAskedQty from '../../Section/FrequentlyAskedQty/FrequentlyAskedQty'
import PlayStore from '../../Section/PlayStore/PlayStore'
import ContactUs from '../../Section/ContactUs/ContactUs'

const Home = () => {
  return (
    <div className={styles.container}>
      <LandingPage />
      <Rating/>
      <OurStory />
      <WhyChoose />
      <FrequentlyAskedQty />  
      <ContactUs />
      <PlayStore />
    </div>
  )
}

export default Home