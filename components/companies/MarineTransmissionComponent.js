import React from 'react'
import OurClientsServices from './OurClientsServices'
import { Divider, Space, Card } from 'antd';
const {Meta} = Card

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"

const MarineTransmissionComponent = () => {
  return (
    <div>
      <Swiper slidesPerView={1} spaceBetween={20}
              navigation={true}
              className="marine_swiper">
              <div className='busi_img'>
                  <SwiperSlide>
                      <img className='img-fluid' src="/images/companies/transmission/firstpic.jpg" />
                  </SwiperSlide>  
                  <SwiperSlide>
                      <img className='img-fluid' src="/images/companies/transmission/secondpic.jpg" />
                  </SwiperSlide>
              </div>
          </Swiper>

      <div className='iron_trade_cont'>
        <div className='iron_trade_sec'>
        <div className='head-block pt-4'>
                  <h4 className="w-title">Marine Transmissions</h4>
                  </div>
          <div class="mini_head_block mt-5 mb-2">
            <h6>&#8226; A marine transmission, also known as a marine gearbox or marine gear, is a vital component in a boat or ship's propulsion system.</h6>
            <h6>&#8226; It's responsible for transmitting power from the engine to the propeller, allowing the vessel to move efficiently through the water.</h6><br />

            <div class="mini_head_block mt-5 mb-2">
                        <h4>Complete overhauling of following makes: </h4>

                        <div className='row'>
                            <div className='col-md-12'>

                                <ul className="keyfea-ul">
                                    <div className='nmo'>
                                    <li><b>ZF, KIRLOSKAR, PNEUMATIC</b>
                                    </li>
                                    </div>
                                    {/* <Space size={[12, 16]} wrap className=' n-cl'>
                                        <Card
                                         style={{
      width: 240,
    }}
                                            
                                            cover={<img alt="example" src="/images/companies/hyraulicjack.jpg" />}
                                        >
                                            <Meta title="Hydraulic jack overhauling"  />
                                        </Card>
                                        </Space> */}
                                        </ul>
                                        </div>
                                        </div>
                                        </div>
                                        </div>



          <OurClientsServices />
         
        </div>

      </div>
    </div>
  )
}




export default MarineTransmissionComponent
