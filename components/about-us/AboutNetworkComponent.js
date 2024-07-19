import React from 'react'
import { Button, Progress } from 'antd'
const AboutNetworkComponent = () => {
  return (
    <>
            <div className="section-full network wow fadeIn" >
            <div className='slider_video_box'>
                <img src='/images/about-us/network1.jpg'/>
            </div>
                <div className='network_img_bg'>
                <div className="container">
                    <div className='intro1-block'>
                        <div className='row'>
                             <div className='col-md-6 '>
                                <div className='net_box mt-20p'>
                                    <div className='net_box_cont'>
                                        <div>
                                            <div className='net_box_ico'>
                                                <div className='net_box_img'>
                                                    <img src='images/icon/netIco1-min.png'/>
                                                </div>
                                                <div className='net_box_ico_cont'>
                                                    <p class="g-sec-title">50+</p>
                                                    <p class="g-sec-desc ">Employess</p>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div>
                                            <div className='net_box_ico'>
                                                <div className='net_box_img'>
                                                    <img src='images/icon/netIco2-min.png'/>
                                                </div>
                                                <div className='net_box_ico_cont'>
                                                    <p class="g-sec-title">20+</p>
                                                    <p class="g-sec-desc ">States</p>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div>
                                            <div className='net_box_ico'>
                                                <div className='net_box_img'>
                                                    <img src='images/icon/netIco3-min.png'/>
                                                </div>
                                                <div className='net_box_ico_cont'>
                                                    <p class="g-sec-title">40+</p>
                                                    <p class="g-sec-desc ">Customers</p>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div>
                                            <div className='net_box_ico'>
                                                <div className='net_box_img'>
                                                    <img src='images/icon/netIco4-min.png'/>
                                                </div>
                                                <div className='net_box_ico_cont'>
                                                    <p class="g-sec-title">7+</p>
                                                    <p class="g-sec-desc ">Experience</p>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className='net_lic'>
                                        <p className='text-white'>
                                            {/* Through our Network in Goa we have valid Lease of Stevedoring License from <b>M/s. Delta
Infralogistics (world wide) Ltd</b> , <b>M/s. Alemao Associates & Amith Cargo Movers</b> to carryout
stevedoring activity in various ports in Goa */}

Apurva Engineering– Discover the difference that Apurva Engineering can make for your business
.</p>
                                    </div>
                                
                                </div>
                               
                            </div>
                            <div className='col-md-6 pd-r40'>
                                <div className='net_box_right'>

                                    <div className='head-block text-white'>
                                        <h4 className="w-title">OUR VALUE</h4>
                                        <p className='w-title1 text-white'> 7 years of experience in engineering industry</p>
                                    </div>
                                    <div className='progress_box'>
                                        <div className='prg_item'>
                                            <p className='text-white'>Marine and Industrial Engine Repair and Steering Marine System</p>
                                            <Progress size='small' percent={80}/>
                                        </div>
                                        <div className='prg_item'>
                                            <p className='text-white'>Hydraulic System and Marine Transmissions</p>
                                            <Progress size='small' percent={60}/>
                                        </div>
                                        <div className='prg_item'>
                                            <p className='text-white'>Windless Servicing and Valves and Pumps </p>

                                            <Progress size='small' percent={50}/>
                                        </div>
                                        
                                        <div className='prg_item'>

                                            <p className='text-white'>Pipe fabrication</p>

                                            <Progress size='small' percent={50}/>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>


                </div>
                </div>
                
            </div>
        </>
  )
}

export default AboutNetworkComponent
