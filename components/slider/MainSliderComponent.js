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
        
          <div className='slider-right'>
            <Swiper
              /*autoplay={{
           delay: 2500,
           disableOnInteraction: false,
              }}*/
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src='/images/aeBanner-min.jpg' alt="s1"  />
                <div className="swiper_content ">
                  <div class="some-facts "></div> 
                   <h4>Welcome to ATC Industries</h4>
                  
                  <p>one-stop shop for injection molding, extrusion, blow molding, thermoforming of plastic components, and HF-welded fabric parts.</p>
                  <a href="/spares" className="site-button radius-xl btnhover13  mt-10">Learn More</a>
                </div> 
              </SwiperSlide>
              <SwiperSlide>
                <img src='/images/aeBanner-min.jpg' alt="s1"  />
                <div className="swiper_content ">
                  <div class="some-facts "></div> 
                  <h4>Welcome to ATC Industries</h4>
                  
                  <p>Agnel group a goan native a diversified business.</p>
                  <a href="/about-us" className="site-button radius-xl btnhover13  mt-10">Learn More</a>
                </div> 
              </SwiperSlide>
            </Swiper>
          </div>
        
      </section>
      {/*isSmallScreen ? <AboutUsResponsiveComponent /> : <AboutUsComponent />*/}

    </>
    
  )
}

export default MainSliderComponent