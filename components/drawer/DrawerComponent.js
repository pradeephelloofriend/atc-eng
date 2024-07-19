import React from 'react'
import { Drawer,Button } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';
const DrawerComponent = ({open, onHide,setOpen}) => {
     
  return (
    <>
    
    <Drawer  placement="right" onClose={()=>setOpen(false)} open={open}>
      <div className='drawer-logo text-center' >
        <a>
          <img className="footer-logo" src="/images/logo/aplogo.png" alt="logo"/>
         
          </a>
      </div>
       <p className='pt-4'>ATC Industries, a member of the Shah Group of Companies, specializes in manufacturing high-quality engineering polymer components for OEMs in the home appliances, telecom equipment, and automobile sectors. Since 1996, we have provided precision-engineered solutions through injection molding, extrusion, blow molding, and thermoforming processes. Discover our commitment to quality and customer satisfaction with innovative solutions tailored to your needs.

 </p>
        <Button style={{backgroundColor:'transparent'}} className='bg-moving' size="large" >REQEST A QUOTE</Button>
                      <div className='bg-moving'>
                      <div className='head-block mt-5'>
                            <p className="w-title1">Call Us Today</p>
                        
                        </div>

                        <div className="widget  widget_getintuch ">
                                  
                        <ul ><li><i class="fa fa-mobile arrow-animation">
                        </i><strong>Phone</strong> 
                        +91 7841069245 </li>
                        
                        
                        {/* <li><i class="ti-email"></i><strong>email</strong>info@example.com</li> */}
                        </ul>
                                </div>
                        
                      </div>
                        

                        <div className='head-block mt-5'>
                            {/*<h4 className="w-title">CALL US TODAY</h4>*/}
                            <p className='w-title1'>Our Office</p>
                        </div>
                        <div className="widget  widget_getintuch ">
                                  
                        <ul ><li><i class="ti-location-pin">
                        </i><strong>Address</strong> 
                        G75, Sayee Raya Complex, Near Raia Church, 403720 </li>
                        <li><i class="ti-mobile"></i><strong>phone</strong>040-66 383 718 (24/7 Support Line)
                        </li>
                        {/* <li><i class="ti-email"></i><strong>email</strong>info@example.com</li> */}
                        </ul>
                                </div>
      </Drawer>
    </>
      
  )
}

export default DrawerComponent