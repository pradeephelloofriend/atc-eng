import React,{useState} from 'react'
import styles from './abt.module.css'
import CertificatePopup from './CertificatePopup'

const Certificates = {
  home: {
    descImg: [
      {
        title: "ISO-9001 Certificate",
        imgSrc: '/images/about-us/certificate.png'
      }
    ]
  }
};
 const Certificate = () => {
  // const [isEnlarged, setIsEnlarged] = useState(false);

  const [selected, setSelected] = useState(null)

  const handleDeityClick = (type) => {
    setSelected({type});
    document.body.style.overflow = 'hidden'; 
  };
  const handleClose = () => {
    setSelected(null);
    document.body.style.overflow = 'auto';
  };
  
  const handleImageClick = () => {
    setIsEnlarged(!isEnlarged);
  };
  return (
    <div>
      <div className={` ${styles.newl}  `} >
    <div className='container'>
        <div className='head-block-center text-center'>
              <h4 className="w-title" >ISO-9001 CERTIFIED COMPANY: ALL LOCATIONS
              </h4>
              </div>
<div>
              {
          selected !== null && 
          <div className={`${styles.overlay}`} onClick={handleClose}>
              <CertificatePopup selected={Certificates[selected.type]} handleClose={handleClose}/>
              {/* <SiblingInfo selectDeity={selectDeity} handleClose={handleClose} /> */}
          </div>
        }
</div>
              <div className={styles.image}>
             <img src='/images/about-us/certificate.png' onClick={()=> handleDeityClick('home')} className={`${styles.imag}`} />
             </div>
            </div>
    </div>
    </div>
   
  )
}
export default Certificate
