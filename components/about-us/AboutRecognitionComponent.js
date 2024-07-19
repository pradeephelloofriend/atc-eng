import React from 'react';
import styles from './abt.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import { Card } from 'antd';

// Install Swiper modules
SwiperCore.use([Pagination]);

function AboutRecognitionComponent() {
  return (
    <div className={styles.abtClass}>
      <div className='container'>
        <div className='head-block'>
          <h4 className="w-title">Recognition and awards</h4>
        </div>
        <div className='pt-4'>
          <Swiper
            spaceBetween={2}
            slidesPerView={3}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
                                      
              // when window width is >= 640px
              476: {
                  width: 320,
                  slidesPerView: 1,
                },
            }}
          >
            <SwiperSlide>
              <Card>
                <div className='text-center'>
                  <img src='/images/allfolder/mahindra.jpg' alt='Mahindra USA'></img>
                  <h4 className='p-3'>Mahindra USA</h4>
                  <p>Partner of the Year for Transportation 2017</p>
                </div>
              </Card>
            </SwiperSlide>
                 <SwiperSlide>
                    <Card>
                    <div className='text-center'>
                    <img src='/images/allfolder/mahindra.jpg'></img>
                    <h4 className='p-3'>Mahindra USA</h4>
                    <p>Core Value Award for Alternation</p>
                    <p> Thinking and Creative solution 2018</p>
                    </div>
                    </Card>
                 </SwiperSlide>
                 <SwiperSlide>
                    <Card>
                    <div className='text-center'>
                    <img src='/images/allfolder/mahindra.jpg'></img>
                    <h4 className='p-3'>Mahindra USA</h4>
                    <p>Core Value Award for Alternation</p>
                    <p> Thinking and Creative solution 2018</p>
                    </div>
                    </Card>
                 </SwiperSlide>
                 <SwiperSlide>
                    <Card>
                    <img src='/images/allfolder/mahindra.jpg'></img>
                    <div className='text-center'>
                    <h4 className='p-3'>Mahindra USA</h4>
                    <p>Core Value Award for Alternation</p>
                    <p> Thinking and Creative solution 2018</p>
                    </div>
                    </Card>
                 </SwiperSlide>
                 <SwiperSlide>
                    <Card>
                    <div className='text-center'>
                    <img src='/images/allfolder/mahindra.jpg'></img>
                    <h4 className='p-3'>Mahindra USA</h4>
                    <p>Core Value Award for Alternation</p>
                    <p> Thinking and Creative solution 2018</p>
                    </div>
                    </Card>
                 </SwiperSlide>
                 <SwiperSlide>
                    <Card>
                    <div className='text-center'>
                    <img src='/images/allfolder/mahindra.jpg'></img>
                    <h4 className='p-3'>Mahindra USA</h4>
                    <p>Core Value Award for Alternation</p>
                    <p> Thinking and Creative solution 2018</p>
                    </div>
                    </Card>
                 </SwiperSlide>
           </Swiper>
           </div>
            </div>
            </div>
      
  )
}

export default AboutRecognitionComponent
