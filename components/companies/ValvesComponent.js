import React from 'react'
import OurClientsServices from './OurClientsServices'
import { Divider, Space, Card } from 'antd'
const { Meta } = Card;
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const ValvesComponent = () => {
  return (
    <div>
      <Swiper slidesPerView={1} spaceBetween={20}
              navigation={true}
              className="marine_swiper">
              <div className='busi_img'>
                  <SwiperSlide>
                      <img className='img-fluid' src="/images/companies/valves/firstpic.jpg" />
                  </SwiperSlide>  
                  <SwiperSlide>
                      <img className='img-fluid' src="/images/companies/valves/thirdpic.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img className='img-fluid' src="/images/companies/valves/secondpic.jpg" />
                  </SwiperSlide>
              </div>
          </Swiper>

      <div className='iron_trade_cont'>
        <div className='iron_trade_sec'>
        <div className='head-block pt-4'>
                  <h4 className="w-title">Valves and Pumps</h4>
                  </div>
          <div class="mini_head_block mt-5 mb-2">
            <h6>&#8226;  Valves are devices used to control the flow of fluids (liquids, gases, or slurries) by opening, closing, or partially obstructing passages or ports.</h6>
            <h6>&#8226; Pumps are devices used to move fluids from one place to another by applying mechanical force. They increase the fluid's kinetic energy, enabling it to overcome system resistance and flow through pipes or channels.</h6><br />
</div>
            

          <Divider />
          <div class="mini_head_block mt-5 mb-2">
                        <h4>Complete overhauling of following makes: </h4>

                        <div className='row'>
                            <div className='col-md-12'>

                                {/* <ul className="keyfea-ul">
                                    <div className='nmo'>
                                    <li><b>CUMMINS, MITSUBISHI, BOUDIN, CATERPILLAR, KIRLOSKAR, ESCORTS</b>
                                    </li>
                                    </div> */}
                                    <Space  wrap className=' n-cl'>
                                        <Card
                                        >
                                        <video height="400" controls >
      <source src='https://res.cloudinary.com/depg2aab2/video/upload/v1712900114/AE/WhatsApp_Video_2024-04-10_at_11.44.14_5b124f7f_pnprrs.mp4' type="video/mp4"/>
     </video>
                                            <Meta title="Valve testing"   />
                                        </Card>
                                       
                                       
                                       
                                    </Space>
                                {/* </ul> */}
                            </div>
                        </div>
                    </div>

          <OurClientsServices />
         
        </div>

      </div>
    </div>
  )
}

export default ValvesComponent
