import React, { useState, useEffect } from 'react';
import { Button } from 'antd';

const NetworkComponent = () => {
  const [employeeCount, setEmployeeCount] = useState(1);
  const [networkCount, setNetworkCount] = useState(1);
  const [clientCount, setClientCount] = useState(1);
  const [experienceCount, setExperienceCount] = useState(1);

  useEffect(() => {
    // Function to increment the counts from 1 to 100
    const incrementCounts = () => {
      if (employeeCount < 100) {
        setEmployeeCount(employeeCount + 1);
      }
      if (networkCount < 100) {
        setNetworkCount(networkCount + 1);
      }
      if (clientCount < 100) {
        setClientCount(clientCount + 1);
      }
      if (experienceCount < 100) {
        setExperienceCount(experienceCount + 1);
      }
    };

    // Set up an interval to increment the counts
    const interval = setInterval(incrementCounts, 50); // Adjust the interval duration as needed

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [employeeCount, networkCount, clientCount, experienceCount]);

  return (
    <>
      <div className="section-full content-inner bg-white why-us wow fadeIn">
        <div className="container">
          <div className='intro1-block'>
            <div className='row'>
              <div className='col-md-6 '>
                <div className='ihm_img_block text-center'>
                  <img src='/images/main_slider/network.png' />
                </div>
              </div>
              <div className='col-md-6 newd'>
                <div className='head-block'>
                  <h4 className="w-title">Facilities We Provide</h4>
                  <p className='w-title1 new-title'> 
                            <h4>With an experience of over 3 decades and <b >11000</b> varieties, 2 million +     
                            <span className="icon-circle">
                          <img src="/images/valve-image/vIcon-min.png" width={30} height={30}/></span><b> valves</b> supplied. IHM Valves advanced it's mission and became one of the world class <b>Industrial</b> distributors for valves, fittings and pipes in Telangana. </h4>
                             <a class="read-more" href="about-us.php">Read More<i class="fa fa-arrow-right"></i></a>
                        </p>
                </div>
                <div className='net_box mt-60'>
                  <div className='net_box_cont'>
                    <div>
                      <div className='net_box_ico'>
                        <div className='net_box_img'>
                          <img src='images/icon/netIco1-min.png' />
                        </div>
                        <div className='net_box_ico_cont'>
                          <p className="g-sec-title">{employeeCount}</p>
                          <p className="g-sec-desc">Employees</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='net_box_ico'>
                        <div className='net_box_img'>
                          <img src='images/icon/netIco2-min.png' />
                        </div>
                        <div className='net_box_ico_cont'>
                          <p className="g-sec-title">{networkCount}</p>
                          <p className="g-sec-desc">Network</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='net_box_ico'>
                        <div className='net_box_img'>
                          <img src='images/icon/netIco3-min.png' />
                        </div>
                        <div className='net_box_ico_cont'>
                          <p className="g-sec-title">{clientCount}</p>
                          <p className="g-sec-desc">Clients</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='net_box_ico'>
                        <div className='net_box_img'>
                          <img src='images/icon/netIco4-min.png' />
                        </div>
                        <div className='net_box_ico_cont'>
                          <p className="g-sec-title">{experienceCount}</p>
                          <p className="g-sec-desc">Experience</p>
                        </div>
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
  );
}

export default NetworkComponent;
