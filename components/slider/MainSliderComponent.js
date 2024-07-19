import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from 'react-responsive';
//import { VideoCameraAddOutlined } from '@ant-design/icons';
import Image from 'next/image';
import "swiper/css";
import "swiper/css/pagination";
import { MinusOutlined } from '@ant-design/icons';
import { Pagination,Autoplay } from "swiper";
import AboutTabComponent from '../Home/aboutus/AboutTabComponent';
import AboutUsComponent from '../Home/aboutus/AboutUsComponent';
import AboutUsResponsiveComponent from '../Home/AboutUsResponsiveComponent';

const MainSliderComponent = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 476 });
 
  return (
    <>
      <section className="section-full bg-gray slider-area new-area">
        <div className="container-fluid no-padding">
          <div className='slider-right'>
            <Swiper
              // autoplay={{
              //   delay: 2500,
              //   disableOnInteraction: false,
              // }}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                {/* <img src='/images/standfor/service.png' alt="s1"  />
                <div className="swiper_content ">
                  <div class="some-facts "></div> */}
                   
                  
                  {/*<p>Agnel group a goan native a diversified business.</p>
                  <a href="#" className="site-button radius-xl btnhover13  mt-10">Learn More</a>*/} 
                  
                {/* </div> */}
              </SwiperSlide>
              <SwiperSlide>
                {/* <img className='blur-class'
               src='/images/main_slider/secondimage.png' alt="s2"  /> */}
                {/* <div className="swiper_content ">
                  <div class="some-facts "></div>
                    <div class=" text-uppercase sf-content">
                      <p className='arrow-animation '>One point Solutions</p>
                      <h3 className=''> OUR VERSATILITY IS OUR STRENGTH</h3>
                    </div>
                  
                </div> */}
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      {isSmallScreen ? <AboutUsResponsiveComponent /> : <AboutUsComponent />}

    </>
    
  )
}

export default MainSliderComponent