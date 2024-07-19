import React from 'react'
import OurClientsServices from './OurClientsServices'
import { Divider } from 'antd'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"

const WindlessServiceComponent = () => {
  return (
    <div>
      <Swiper slidesPerView={1} spaceBetween={20}
              navigation={true}
              className="marine_swiper">
              <div className='busi_img'>
                  <SwiperSlide>
                      <img className='img-fluid' src="/images/companies/windlass/firstpic.jpg" />
                  </SwiperSlide>  
                  <SwiperSlide>
                      <img className='img-fluid' src="/images/companies/windlass/secondpic.jpg" />
                  </SwiperSlide>
              </div>
          </Swiper>

      <div className='iron_trade_cont'>
        <div className='iron_trade_sec'>
        <div className='head-block pt-4'>
                  <h4 className="w-title">Windlass Servicing</h4>
                  </div>
          <div class="mini_head_block mt-5 mb-2">
            <h6>&#8226; A windlass is a mechanical device used on boats to raise and lower anchors, and it typically consists of an electric or manual winch, a gypsy (a wheel with grooves to grip the anchor chain or rope), and a wildcat (a similar wheel for rope)</h6>
            <h6>&#8226; Proper maintenance of the windlass will ensure reliable anchoring and contribute to the overall safety and enjoyment of your boating experience.</h6><br />

            

          <OurClientsServices />
         </div>
        </div>

      </div>
    </div>
  )
}




export default WindlessServiceComponent
