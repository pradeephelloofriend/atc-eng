import React from 'react';
import styles from './abt.module.css'
// import styles from '../spares/sparse.module.css';
import Certificate from './Certificate';

function CertificatePopup({ selected, handleClose }) {

    return (<><div className={styles.overlay} >
        <div className={`container ${styles.deity_info_boxs}`}>
            <div className={styles.closeButton} onClick={handleClose}>&times;</div>
             <h1 style={{color:"black"}} className={styles.infoTitle}>{selected.title}</h1> 
            {/* <div style={{ textAlign: "justify", color:"black", fontSize:"18px",}} dangerouslySetInnerHTML={{ __html: selected.desc }}></div> */}
            <div className={styles.contains}>
                {
                      selected.descImg.map((item, index) => (
                        <div className={styles.conatainer2} key={index}>
                            <h2 className={styles.imageTitle}>{item.title}</h2>
                            <img style={{height:"900px"}} src={item.imgSrc} height={300} alt={item.title} />
                        </div>
                    ))
                }
            </div>
            
        </div>
    </div></>)
}
export default CertificatePopup