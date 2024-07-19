import React from 'react';
import styles from './abt.module.css'
import { Button } from 'antd';

const AboutLeadershipComponent = () => {
  return (
    // <div className={` ${styles.lead} `} >
    //   <div className={styles.new_C}>
    //   <div className="container ">
    <div style={{}}  className={styles.hoverable}>
     
      <div className='head-block pt-6'>
              <div className="w-title">Our vision</div> </div>
              
              
              <p /*className="w-title1"*/className={`pt-3 ${styles.fon}`}>At ATC Industries, our vision is centered on becoming our customer’s first choice by providing: </p> 
           


          <b className={`pt-3 ${styles.fon}`}>Innovative Solutions:</b>
          <p>We strive to deliver creative and effective solutions tailored to our customer's specific needs and challenges.
          </p>
          <b className={`pt-3 ${styles.fon}`}>Benchmark Supplier:</b>
          <p>We aim to set the standard as a benchmark supplier in our industry, known for reliability, quality, and customer satisfaction.
          </p>
          <b className={`pt-3 ${styles.fon}`}>Establishing Value Addition Processes:</b>
          <p>We are committed to establishing value-added processes that enhance efficiency and deliver tangible benefits to our customers.
          </p>
          </div>
          



          //  <Button>Meet Our team</Button> 
      //   </div>
      //   </div>
      // </div>
  )
}

export default AboutLeadershipComponent
