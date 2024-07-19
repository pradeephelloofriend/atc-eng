import React from 'react'
import OurClientsServices from './OurClientsServices'
import { Divider, Space, Card } from 'antd'
const { Meta } = Card;
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"

const SteeringMarineComponent = () => {
  return (
    <div>
      <Swiper slidesPerView={1} spaceBetween={20}
              navigation={true}
              className="marine_swiper">
              <div className='busi_img'>
                  <SwiperSlide>
                      <img className='img-fluid' src="/images/companies/hydraulic1/firstpic.jpg" />
                  </SwiperSlide>  
                  <SwiperSlide>
                      <img className='img-fluid' src="/images/companies/hydraulic1/secondpic.jpg" />
                  </SwiperSlide>
              </div>
          </Swiper>

      <div className='iron_trade_cont'>
        <div className='iron_trade_sec'>
        <div className='head-block pt-4'>
                  <h4 className="w-title">Marine Hydraulic Steering System</h4>
                  </div>
          <div class="mini_head_block mt-5 mb-2">
            <h6>&#8226; A steering marine system is a critical component of any watercraft, enabling control and maneuverability on the water.</h6>
            <h6>&#8226; Typically consisting of a helm, steering wheel or tiller, and associated mechanical or hydraulic linkages, the system translates the movements of the operator into directional changes for the vessel.</h6><br />
</div>
            


          <Divider />
          <div class="mini_head_block mt-5 mb-2">
                        <h4>Complete overhauling of following makes: </h4>

                        <div className='row'>
                            <div className='col-md-12'>
                                    <Space  wrap className=' n-cl'>
                                        <Card
                                        >
                                        <video height="400" controls >
      <source src='https://res.cloudinary.com/depg2aab2/video/upload/v1712900128/AE/WhatsApp_Video_2024-04-10_at_11.52.07_1a3e4c54_qaig52.mp4' type="video/mp4"/>
     </video>
                                            <Meta title="Hydraulic Cylinder Testing"   />
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

export default SteeringMarineComponent
