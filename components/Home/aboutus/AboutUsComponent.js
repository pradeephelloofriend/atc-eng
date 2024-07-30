import React from 'react'
import AboutUsHeaderComponent from './AboutUsHeaderComponent'
import AboutTabComponent from './AboutTabComponent';
import styles from './about.module.css'
import ClientListComponent from '../../clients/ClientListComponent';

const AboutUsComponent = () => {
  return (
    
    <section className={`${styles.about_box} section-full `}>

    
      <div className={`container`}>
        <div className={`${styles.tab_cl}`}>
        <AboutTabComponent
         title1='Who we are'
         title2='Our vision'
         title3='Our mission'
         title4='Our History'
         head1='Welcome to ATC Industries'
         para1='ATC Industries, a dynamic partnership established in 1996 by the esteemed late Mr. A. T. Shah, has steadily grown to provide unparalleled service to our customers. With a strategic multi-location presence, we are dedicated to delivering exceptional solutions that meet diverse needs across various sectors.'
          buttoncon='Request a Quote'
          head2='Our Services'
          list1='Award-winning design'
          list2='Super Fast Customer support'
          list3='Email Design'
          list4='Easy to Customize pages'
          list5='Starter Replacement'
          list6='Powerful Performance'
          head3='Vision'
          para3="At ATC Industries, our vision is centered on becoming our customer's first choice by providing:"
          para7="<b style='font-weight:bold'>Innovative Solutions:</b> We strive to deliver creative and effective solutions tailored to our customer's specific needs and challenges."
          para8="<b style='font-weight:bold'>Benchmark Supplier:</b> We aim to set the standard as a benchmark supplier in our industry, known for reliability, quality, and customer satisfaction."
          para9="<b style='font-weight:bold'>Establishing Value Addition Processes:</b> We are committed to establishing value-added processes that enhance efficiency and deliver tangible benefits to our customers."
          para2='At Apurva Engineering, we take pride in being a leading provider of premium technical services and spare parts for the marine/offshore and industrial sectors'
          head4='+91 7841069245'
          head5='Our vision list'
          head6='Our Journey with CommScope: 2006-07'
          para4='In 2006-07, ATC Industries embarked on a transformative journey with Andrew Telecommunications, now part of CommScope. We specialized in the development and supply of thermoformed microwave antenna radomes, ranging from 4ft to 6ft diameters across various frequencies.'
          para5='Previously imported, these radomes were successfully localized in India, enhancing the supply chain with significant cost benefits and adding substantial value to our offerings.'
          head7="Missions"
          para6='Our mission is to empower our clients with superior technical expertise and unparalleled service, enabling them to enhance the efficiency, safety, and performance of their operations. We are dedicated to delivering innovative solutions tailored to meet the unique needs of each client, while upholding the highest standards of professionalism, integrity, and environmental responsibility. Through continuous improvement and investment in our people, processes, and technology, we strive to exceed expectations and create long-term value for our stakeholders.'
          />
        </div>
        
           </div>
           </section>
  )
}

export default AboutUsComponent