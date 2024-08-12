import { Dropdown, Space, Popover } from 'antd'
import React from 'react'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import VisionComponent from '../about-us/HistoryComponentTabs';

const TopExtraNavComponent = ({ isFixed }) => {
    const router = useRouter()
    function handleClick() {
        router.push(`/about-us`)
    }
    const dirContent = (
        <div className='dirCont'>
            <p> is the Chairman and Director of Apurva Engineering,
                overseeing the strategic direction and operations of the company. With a wealth
                of experience spanning over two decades in the marine and industrial sectors,
                Mrs. Raicar brings invaluable leadership and expertise to her role</p>
            <a class="read-more" onClick={handleClick}>Read More<i class="fa fa-arrow-right"></i></a>
        </div>
    )
    return (
        <div className='main_top_nav bg-red-c' style={{ display: isFixed !== null ? 'none' : 'block' }}>
            <div className='container clearfix'>
                <div className='top-extra-nav'>
                    <div className='container'>
                        <div className='row d-flex justify-content-between align-items-center'>
                            <div className='klab-topbar-left'>
                                <div className='sah_grp'>
                                    <p>a Proud Member of THE SHAH GROUP OF COMPANIES</p>
                                </div>
                                {/*<ul>
                                    
                                    <li>
                                        <a href="#" style={{ marginLeft: '6px' }}>
                                            <div className='icon-box'>
                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                            </div>
                                            <h6>test@gmail.com
                                            </h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className='icon-box'>
                                                <i className="fa fa-phone" aria-hidden="true"></i>
                                            </div>
                                            <h6>+91 7841069245</h6>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className='icon-box'>
                                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                            </div>
                                            <h6>VERNA INDUSTRIAL ESTATE VERNA- GOA</h6>
                                        </a>
                                    </li>
                                </ul>*/}
                            </div>
                            <div className='klab-topbar-right header-nav'>

                                <ul className='nav navbar-nav'>
                                    {/*<li><a >CLIENT LIST <i class="fa fa-chevron-down"></i></a>
                                        <ul className="sub-menu">
                                            <li><a>MICR Electronics Ltd( ONIDA )</a></li>
                                            <li><a>Ion Exchange India Ltd</a></li>
                                            <li><a>WHIRLPOOL of India Ltd</a></li>
                                            <li><a>IFB Industries Ltd Washing Machines & AC </a></li>
                                            <li><a>Commscope India Pvt. Ltd </a></li>
                                            <li><a>Hyundai Construction Equipment Pvt. Ltd</a></li>
                                            
                                        </ul>
                                    </li>*/}
                                    <li><a onClick={() => router.push('/about-us?ref=history')}>COMMSCOPE JOURNEY</a></li>
                                    <li><a onClick={() => router.push('/about-us?ref=certi')}>Certifications</a></li>
                                    <li><a onClick={() => router.push('/quality-check')}>Quality Check</a></li>
                                    {/* <li><a onClick={() => router.push('/#')}>PROCESSING CAPABILITIES</a></li> */}
                                    <li><a onClick={() => router.push('/reports')}>Reports</a></li>
                                    <li>
                                        {/* <Popover className='dirPop' content={dirContent} title="Mrs. Poonam Raicar">
                                        <a >Director Profile</a>
                                    </Popover> */}

                                    </li>

                                </ul>
                            </div>
                        </div>


                    </div>

                </div>


            </div>
        </div>


    )
}

export default TopExtraNavComponent