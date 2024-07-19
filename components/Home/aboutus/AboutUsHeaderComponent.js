import React from 'react';
import styles from './about.module.css'

function AboutUsHeaderComponent({title, desc}) {
  return (
       <div className={styles.head_block}>
          <h4 className={styles.w_title}>{title}</h4>
          <p className={styles.w_title1}>{desc}</p>
        </div>
  )
}

export default AboutUsHeaderComponent
