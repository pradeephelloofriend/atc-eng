import React from 'react';
import styles from './abt.module.css'
import { Button } from 'antd';

function AboutGetToComponent() {
  return (
    <div className={styles.get_class}>
        <div className={styles.new_class}>
        <div className='container'>
      <div className='head-block '>
              <h4 className="w-title text-white">PART OF</h4>
            </div>
            <div className={styles.log_cen}>
                <img src="/images/logo/logo_agdbsp-removebg-preview.png" />
            </div>
            <div className='d-flex text-white'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
                <p>a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <div className={styles.transparent_box}>
                <div className={styles.all_data}>
                <h6 className='text-white'>More about Apurva </h6>
                <div className={` ${styles.butclass} butclass`}>
                    <Button>CSR</Button>
                    <Button> Our people</Button>
                    <Button>Careers</Button>
                    <Button>Health Safety</Button>
                    <Button>Quality</Button>
                </div>
                </div>
            </div>
            </div>
            </div>
    </div>
  )
}

export default AboutGetToComponent
