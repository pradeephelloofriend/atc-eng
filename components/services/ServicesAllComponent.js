import React from 'react'
import { Divider } from 'antd'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"

const ServicesAllComponent = () => {
  return (
    <div>
      <Swiper slidesPerView={1} spaceBetween={20}
              navigation={true}  breakpoints={{
                476: {
                    width: 320,
                    slidesPerView: 1,
                  },
              }}
              className="marine_swiper">
              <div className='busi_img'>
                  <SwiperSlide>
                      <img className='img-fluid' src="/images/new_services/pic1.jpg" />
                  </SwiperSlide>  
                  <SwiperSlide>
                      <img className='img-fluid' src="/images/new_services/pic2.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img className='img-fluid' src="/images/new_services/pic3.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img className='img-fluid' src="/images/new_services/pic4.jpg" />
                  </SwiperSlide>
              </div>
          </Swiper>

      <div className='iron_trade_cont'>
        <div className='iron_trade_sec'>
          <div class="mini_head_block mt-5 mb-2">
            <h2 className="">Supply of Barges</h2>
          </div>
          <div class="mini_head_block mt-5 mb-2">
            <h6>&#8226; High-quality, well-maintained barges for various offshore operations</h6>
            <h6>&#8226; Customizable solutions to meet specific project requirements</h6><br />

            <p className="">
              Seabird Marine Services stands as a premier provider in the maritime industry, specializing in the meticulous supply of high-quality barges. With a commitment to excellence and safety, we offer a comprehensive range of customizable solutions tailored to meet the diverse needs of our clients.
            </p>

            <p>
              We have Supplied Barges for Redi Port nearly a decade.
            </p>
          </div>

          <Divider/>

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

          <Divider/>

          <div class="mini_head_block mt-5 mb-2">
            <h4>Why Choose Seabird Marine Services for Barge Supply?</h4>

            <div className='row'>
                  <div className='col-md-12'>
                      <ul className="keyfea-ul">
                          <li><b>Reliability</b> : Count on us for dependable and punctual barge supply, meeting project timelines and ensuring operational continuity.
                          </li>

                      </ul>
                  </div>
                  <div className='col-md-12'>
                      <ul className="keyfea-ul">
                          <li><b>Flexibility</b> :Our services are designed to be flexible, accommodating the evolving needs of your projects.
                          </li>
                      </ul>
                  </div>
                  <div className='col-md-12'>
                      <ul className="keyfea-ul">
                          <li><b>Commitment to Quality</b> : Seabird Marine Services is synonymous with quality. We deliver not just barges but a commitment to excellence in every aspect of our services.
                          </li>
                      </ul>
                  </div>
              </div>
          </div>

          <Divider/>

          <p> Choose Seabird Marine Services for a reliable partner in the supply of barges, where your cargo is in safe and capable hands, ensuring a smooth and efficient maritime experience.
          </p>

        
        
        </div>

      </div>
    </div>
  )
}

export default ServicesAllComponent
