import React from 'react'
import OurClientsServices from './OurClientsServices'
import { Divider, Space, Card } from 'antd';
const { Meta } = Card;
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"

const HydraulicComponent = () => {
  return (
    <div>
      <Swiper slidesPerView={1} spaceBetween={20}
              navigation={true}
              className="marine_swiper">
              <div className='busi_img'>
                  <SwiperSlide>
                      <img className='img-fluid' src="/images/companies/steering/firstpic.jpg" />
                  </SwiperSlide>  
                  <SwiperSlide>
                      <img className='img-fluid' src="/images/companies/steering/secondpic.jpg" />
                  </SwiperSlide>
              </div>
          </Swiper>

      <div className='iron_trade_cont'>
        <div className='iron_trade_sec'>
        <div className='head-block pt-4'>
                  <h4 className="w-title">Hydraulic System</h4>
                  </div>
          <div class="mini_head_block mt-5 mb-2">
            <h6>&#8226; A hydraulic system is a mechanical system that uses fluid to transmit power</h6>
            <h6>&#8226; Hydraulic systems are widely used in various applications, including heavy machinery, construction equipment, automotive brakes, aircraft flight control systems, and marine steering systems.</h6><br />

            
          <Divider />
                    <div class="mini_head_block mt-5 mb-2">
                        <h4>Complete overhauling of following makes: </h4>

                        <div className='row'>
                            <div className='col-md-12'>

                                <ul className="keyfea-ul">
                                    <div className='nmo'>
                                    <li><b>HYDRAULIC JACKS, HYDRAULIC POWER PACKS, DIRECTION CONTROL VALVES, MOTOR PUPMS</b>
                                    </li>
                                    </div>
                                    <Space size={[12, 16]} wrap className=' n-cl'>
                                        <Card
                                         style={{
      width: 240,
    }}
                                            
                                            cover={<img alt="example" src="/images/companies/hyraulicjack.jpg" />}
                                        >
                                            <Meta title="Hydraulic jack overhauling"  />
                                        </Card>
                                        <Card
                                         style={{
      width: 240,
    }}
                                            
                                            cover={<img alt="example" src="/images/companies/hydrauliccylinder.jpg" />}
                                        >
                                            <Meta title="Hydraulic cylinder dismantling"  />
                                        </Card>
                                        
                                    </Space>
                                </ul>
                            </div>
                        </div>
                    </div>
          

          <OurClientsServices />
         
        </div>

      </div>
    </div>
    </div>
  )
}



export default HydraulicComponent
