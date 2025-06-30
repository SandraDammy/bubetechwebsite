import React from 'react'
import styles from './OurStory.module.css'

const OurStory = () => {
  return (
    <div className={styles.ourStory}>
      <span className='Intro'>
        <b>OurStory</b>
      </span>

      <br></br>
      
      <span className='text'>
        <p>We know farming is hard work. Whether you grow crops, raise livestock, or catch fish,
          you deserve fair prices for your efforts.
        </p>
      </span>

      <br></br>

      <span className='text'>
        <p>Many farmers work alone. Middlemen take profits. Language barriers
          block opportunities. Good farmers struggle while others prosper.
        </p>
      </span>

      <br></br>

      <span className='text'>
        <p>That's why we built BubeTech. We connect every farmer - from small gardens to large 
         herds - to the knowledge, quality resources, and fair prices they need to succeed.
          Your phone becomes your farming partner. Your voice matters. Your community grows
          stronger.
        </p>
      </span>

      <br></br>
      
      <span className='bottom'><b>Farm smarter, live better. When farmers connect, everyone wins.</b></span>    
    
    </div>
  )
}

export default OurStory