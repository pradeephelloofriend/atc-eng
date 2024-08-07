import React from 'react';
import styles from './sparse.module.css';

function Popup({ selected, handleClose }) {

    return (
        <div style={{display:'flex'}} >
            {
                <div className={`container  ${styles.deity_info_box}`}>
                    <div className={styles.closeButton} onClick={handleClose}>&times;</div>
                    <div>
                        {
                            selected.descImg.map((v,index)=>
                                <img src={v} height={300} alt={selected.title} key={index} />
                            )
                        }
                        {/* <img src={deityInfo.infoImg.sourceUrl} height={300} alt={selected.title} /> */}
                    </div>
                        <h1 style={{color:"black"}} className={styles.infoTitle}>{selected.title}</h1>
                    <div style={{ textAlign: "justify", color:"black", fontSize:"18px"}} dangerouslySetInnerHTML={{ __html: selected.desc }}></div>
                </div>

                
            }
            
</div>

             
    );
}

export default Popup;
