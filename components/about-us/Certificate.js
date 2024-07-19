import React from 'react'
import styles from './abt.module.css'

 const Certificate = () => {
  return (
    <div>
      <div className={` ${styles.newl}  `} >
    <div className='container'>
        <div className='head-block-center text-center'>
              <h4 className="w-title">ISO-9001 CERTIFIED COMPANY: ALL LOCATIONS
              </h4>
              </div>
              <div className={styles.image}>
             <img src='/images/about-us/certificate.png' className={styles.imag} />
             </div>
            </div>
    </div>
    </div>
   
  )
}
export default Certificate
