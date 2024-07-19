import React from 'react'
import OurClientsServices from './OurClientsServices'
import { Divider } from 'antd'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"

const PipelineComponent = () => {
  return (
    <div>
      <Swiper slidesPerView={1} spaceBetween={20}
              navigation={true}
              className="marine_swiper">
              <div className='busi_img'>
                  <SwiperSlide>
                      <img className='img-fluid' src="/images/companies/pipes/firstpic.jpg" />
                  </SwiperSlide>  
                  <SwiperSlide>
                      <img className='img-fluid' src="/images/companies/pipes/secondpic.jpg" />
                  </SwiperSlide>
              </div>
          </Swiper>

      <div className='iron_trade_cont'>
        <div className='iron_trade_sec'>
        <div className='head-block pt-4'>
                  <h4 className="w-title">Pipe fabrication</h4>
                  </div>
          <div class="mini_head_block mt-5 mb-2">
            <h6>&#8226;  Pipeline servicing encompasses a wide range of activities focused on maintaining the integrity, reliability, and safety of pipelines while minimizing environmental impact and complying with regulations</h6>
            <h6>&#8226; Pipeline servicing involves a range of activities aimed at maintaining, repairing, and optimizing pipelines used for the transportation of fluids, such as oil, natural gas, water, and various chemicals.</h6><br />
</div>
            
          <Divider />
          <div class="mini_head_block mt-5 mb-2">
                        <h4>Complete overhauling of following makes: </h4>

                        <div className='row'>
                            <div className='col-md-12'>

                                <ul className="keyfea-ul">
                                    <div className='nmo'>
                                    <li><b>HYDRAULIC WATER, HYDRAULIC AIR</b>
                                    </li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>

          <OurClientsServices />
         
        </div>

      </div>
    </div>
  )
}

export default PipelineComponent
