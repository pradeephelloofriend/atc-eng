import React from 'react';
import styles from './abt.module.css'
import { Button } from 'antd';

function AboutHistoryComponent() {
  return (
    <div className={`${styles.his_com} his_com`}>
        <div className={styles.abt_his} >
            <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
            <img src='/images/history/history.jpg' />
        </div>
        <div className='col-md-6'>
        <div className='head-block '>
              <h4 className="w-title ">Our history</h4>
            </div>
            <h6 className='pt-4'>At Apurva Engineering we are proud of our long history. Our origins can be traced back to 1862 when the company Agencia La Universal de Mariano Lluch was founded. View our history to understand how it connects to our present culture and values.</h6>
        <div className=''>
        <Button href='/history'>Read more</Button>
        </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AboutHistoryComponent
