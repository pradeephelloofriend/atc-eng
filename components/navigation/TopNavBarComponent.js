import React from 'react'
import {useRouter} from 'next/router'


const TopNavBarComponent = () => {
    const router = useRouter()
  return (
      <><div className='site-header mo-left header' >
            <div className="top-bar">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="kam-topbar-left">
                            <ul>
                                <li><i className="la la-phone-volume"></i> +91 7841069245</li>
                                <li><i className="las la-map-marker"></i> 284,GIDC,Kundaim Ponda Goa-403115</li>
                            </ul>
                        </div>
                        <div className="kam-topbar-right">
                            <ul>
                                <li onClick={()=>router.push('/infrafacilities')}><a><i className="fa fa-connectdevelop"></i>  Infrastructure or Facilities</a></li>
                                {/* <li><i className="fa fa-book"></i> Careers</li> */}
                                {/* <li><i className='fa fa-file-text'></i>Compliance</li> */}
                                <li onClick={()=>router.push('/compliance')} className="has-mega-menu"> <a > <i className="fa fa-file-text"></i>Compliance</a></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
            
          </div>
      </>
  )
}

export default TopNavBarComponent