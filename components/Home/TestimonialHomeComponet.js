import React from 'react'
import { Typography,Card } from 'antd';
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeftOutlined ,ArrowRightOutlined  } from '@ant-design/icons';
import "swiper/css";
import "swiper/css/pagination"
import SwiperCore, {Pagination,Navigation} from 'swiper';
import t1 from '../../public/images/testimonial/testi1.jpg'
import t2 from '../../public/images/testimonial/testi2.jpg'
import t3 from '../../public/images/testimonial/testi3.jpg'
SwiperCore.use([Pagination,Navigation]);
const { Title ,Text} = Typography;
const { Meta } = Card;
const TestimonialHomeComponet = () => {
  return (
      <>
          <div className="section-full bg-white p-b60 testi-area">
              <div className="container">
                  <div className="section-content">
                      <div className="testimonial-num-count owl-num-count owl-carousel owl-btn-center-lr owl-btn-3 owl-theme">
                          <Swiper slidesPerView={1} spaceBetween={30} 
                              navigation={{
                                  nextEl: '.review-swiper-button-next',
                                  prevEl: '.review-swiper-button-prev',
                              }} className="service-swiper">
                              <SwiperSlide>
                                  <div className="testimonial-12 text-white ">
                                      <div className="testimonial-pic">
                                          <Image src={t3} alt="t1" height={200} width={200} />
                                      </div>

                                      <div className="testimonial-detail">
                                          <div className='quote-left'>
                                              <h4 className="testimonial-name m-t0 m-b5">David Matin</h4>
                                              <span className="testimonial-position">Student</span>
                                              <div className="testimonial-text">
                                                  <p>At Vimal Printery, I was so impressed with their factory setup, Innovative and scientific approach to solution that enable to have them at the top of my list.</p>
                                              </div>
                                          </div>

                                      </div>
                                  </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                  <div className="testimonial-12 text-white ">
                                      <div className="testimonial-pic">
                                          <Image src={t1} alt="t1" height={200} width={200} />
                                      </div>

                                      <div className="testimonial-detail">
                                          <div className='quote-left'>
                                              <h4 className="testimonial-name m-t0 m-b5">Devina Rogas</h4>
                                              <span className="testimonial-position">Student</span>
                                              <div className="testimonial-text">
                                                  <p>Staff at Vimal are very responsive to customer specific. They offer all alternative to meet the service objectives that saves time and money</p>
                                              </div>
                                          </div>

                                      </div>
                                  </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                  <div className="testimonial-12 text-white ">
                                      <div className="testimonial-pic">
                                          <Image src={t2} alt="t1" height={200} width={200} />
                                      </div>

                                      <div className="testimonial-detail">
                                          <div className='quote-left'>
                                              <h4 className="testimonial-name m-t0 m-b5">Rohan Munki</h4>
                                              <span className="testimonial-position">Student</span>
                                              <div className="testimonial-text">
                                                  <p>Extensive classified data or information make it a powerful and optimal tool for anyone to easily readable. It contains a detailed information search and many of its specification reports personally customised, which makes  user-friendly. Vimal Printery is a solutions to this</p>
                                              </div>
                                          </div>

                                      </div>
                                  </div>
                              </SwiperSlide>
                          </Swiper>
                      </div>
                    <div className='slide-btn'>
                        <ArrowLeftOutlined className='review-swiper-button-prev'/>
                        <ArrowRightOutlined className='review-swiper-button-next'/>
                    </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default TestimonialHomeComponet