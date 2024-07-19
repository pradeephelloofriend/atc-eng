import React from 'react'
import OurClientsServices from './OurClientsServices'
import { Divider, Space, Card } from 'antd';
const { Meta } = Card;
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"

const RepairServicesComponent = () => {
    return (
        <div>
            <Swiper slidesPerView={1} spaceBetween={20}
                navigation={true}
                className="marine_swiper">
                <div className='busi_img'>
                    <SwiperSlide>
                        <img className='img-fluid' src="/images/companies/repair/firstpic.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='img-fluid' src="/images/companies/repair/secondpic.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='img-fluid' src="/images/companies/repair/thirdpic.jpg" />
                    </SwiperSlide>
                </div>
            </Swiper>

            <div className='iron_trade_cont'>
                <div className='iron_trade_sec'>
                    <div className='head-block pt-4'>
                        <h4 className="w-title">Marine and Industrial Engine Repairs</h4>
                    </div>
                    <div class="mini_head_block mt-5 mb-2">
                        <h6>&#8226; Marine and Industrial Engine Repairs services ensure optimal performance and longevity of vital machinery, minimizing downtime and maximizing productivity</h6>
                        <h6>&#8226; Clients can experience increased efficiency, reduced fuel consumption, and enhanced safety standards, crucial in demanding maritime and industrial environments</h6><br />

                        <p className="">
                            Apurva Engineering stands as a premier provider in the maritime industry, specializing in the meticulous supply of high-quality barges. With a commitment to excellence and safety, we offer a comprehensive range of customizable solutions tailored to meet the diverse needs of our clients.
                        </p>

                        <p>
                            {/* We have Supplied Barges for Redi Port nearly a decade. */}
                        </p>
                    </div>

                    {/* <Divider/>

          <div class="mini_head_block mt-5 mb-2">
            <h4>Key Features:</h4>

            <div className='row'>
                  <div className='col-md-12'>
                      <ul className="keyfea-ul">
                          <li><b>Versatile Fleet</b> : Our fleet comprises a variety of well-maintained barges, equipped to handle a spectrum of offshore operations. From cargo transport to specialized projects, we have the right vessel for your requirements. </li>

                      </ul>
                  </div>
                  <div className='col-md-12'>
                      <ul className="keyfea-ul">
                          <li><b>Custom Solutions</b> : Understanding that each project is unique, we offer customizable solutions to ensure that our clients receive precisely what they need. Whether it's size specifications, load capacity, or specific features, our supply of barges can be tailored accordingly.</li>
                      </ul>
                  </div>
                  <div className='col-md-12'>
                      <ul className="keyfea-ul">
                          <li><b>Safety Assurance</b> : Safety is our top priority. All our barges adhere to stringent safety standards and undergo regular maintenance checks. This commitment ensures a secure and reliable transportation platform for your valuable cargo.</li>
                      </ul>
                  </div>
                  <div className='col-md-12'>
                      <ul className="keyfea-ul">
                          <li><b>Experienced Crew</b> : Our barges come with experienced and skilled crews, well-versed in navigating various marine environments. This ensures not only the safe transportation of goods but also efficient and smooth operations.</li>
                      </ul>
                  </div>
                  <div className='col-md-12'>
                      <ul className="keyfea-ul">
                          <li><b>Regulatory Compliance</b> : We pride ourselves on maintaining compliance with international and local maritime regulations. Our adherence to these standards guarantees a seamless and legally sound experience for our clients.</li>
                      </ul>
                  </div>
              </div>
          </div>

          <Divider/> */}
                    <Divider />
                    <div class="mini_head_block mt-5 mb-2">
                        <h4>Complete overhauling of following makes: </h4>

                        <div className='row'>
                            <div className='col-md-12'>

                                <ul className="keyfea-ul">
                                    <div className='nmo'>
                                    <li><b>CUMMINS, MITSUBISHI, BOUDIN, CATERPILLAR, KIRLOSKAR, ESCORTS</b>
                                    </li>
                                    </div>
                                    <Space size={[12, 16]} wrap className=' n-cl'>
                                        <Card
                                         style={{
      width: 240,
    }}
                                            
                                            cover={<img alt="example" src="/images/services/repairs/pic1.jpg" />}
                                        >
                                            <Meta title="Fitment of cylinder liners"  />
                                        </Card>
                                        <Card
                                         style={{
      width: 240,
    }}
                                            
                                            cover={<img alt="example" src="/images/services/repairs/pic2.jpg" />}
                                        >
                                            <Meta title="Piston removal"  />
                                        </Card>
                                        <Card
                                         style={{
      width: 240,
    }}
                                            
                                            cover={<img alt="example" src="/images/services/repairs/pic3.jpg" />}
                                        >
                                            <Meta title="Engine overhauling"  />
                                        </Card>
                                        <Card
                                         style={{
      width: 240,
    }}
                                            
                                            cover={<img alt="example" src="/images/services/repairs/pic4.jpg" />}
                                        >
                                            <Meta title="Engine"  />
                                        </Card>
                                    </Space>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* <Divider/> */}

                    {/* <p> Choose Seabird Marine Services for a reliable partner in the supply of barges, where your cargo is in safe and capable hands, ensuring a smooth and efficient maritime experience.
          </p> */}

                    <OurClientsServices />

                </div>

            </div>
        </div>
    )
}

export default RepairServicesComponent