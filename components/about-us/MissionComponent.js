import React from 'react';
import styles from './abt.module.css'
import { Button } from 'antd';

const MissionComponent = () => {
  return (
    // <div className={` ${styles.newl} `} >
    //   <div className={styles.new_C}>
    //   <div className="container ">
    <div style={{textAlign:"top"}} className={styles.hoverable}>
      
      <div className='head-block pt-6'>
              <h4 className="w-title">Our mission</h4>
              {/* <p className='w-title1'>A legacy of Excellence”</p> */}
            </div>
          <h3 className={`pt-3 ${styles.fon}`}>Our mission is to empower our clients with superior technical expertise and unparalleled service, enabling them to enhance the efficiency, safety, and performance of their operations. We are dedicated to delivering innovative solutions tailored to meet the unique needs of each client, while upholding the highest standards of professionalism, integrity, and environmental responsibility. Through continuous improvement and investment in our people, processes, and technology, we strive to exceed expectations and create long-term value for our stakeholders.

          </h3>
         {/* <h2> Quality First: Our Commitment to Customer Satisfaction

          </h2>
          <p>At ATC Industries, our policy is "Customer First". We are dedicated to providing our customers with high-quality products and services, aiming to be their preferred choice across our product profile. We strive to deliver innovative solutions tailored to meet their specific requirements, ensuring satisfaction and trust in every interaction.
          </p>

          <h2> Committed to Quality: Our Promise

          </h2>
          <p>At ATC Industries, we are dedicated to exceeding customer expectations by delivering high-quality products that meet agreed specifications at competitive prices. We prioritize continual improvement in both our products and systems, ensuring that our customers receive reliable and innovative solutions.
          </p>
          
        <h2> Our Quality Objectives
          </h2>
          <h3>At ATC Industries, we are committed to achieving the following quality objectives:
          </h3>
          <b>Enhancing Customer Satisfaction:</b>
          <p>We strive to continually increase customer satisfaction levels by delivering products and services that meet or exceed their expectations.
          </p>
          <b>Responsive Customer Feedback: </b>
          <p>We value and promptly respond to customer suggestions and feedback, ensuring a proactive approach to enhancing our offerings.
          </p>
          <b>Continuous System Improvement:</b>
          <p> We are dedicated to ongoing improvement in our systems and processes, fostering innovation and efficiency across all operations.

          </p>
          {/* <Button>Our Values</Button> */}
          
          </div>
      
      //   </div>
      //   </div>
      // </div>
  )
}

export default MissionComponent
