import React from 'react'
import {Card} from 'antd'
const GlobalServiceComponent = () => {
  return (
    <>
    <div className="section-full bg-gray content-inner global-section">
		  <div className="container-fluid">
            <div className='row'>
                <div className='col-md-4'>
                    <p className='w-title1 fs-50 p-relative'> Out Network  </p>
                        
                </div>
                <div className='col-md-8'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <Card hoverable className='g-sec-right text-center'>
                                <p className='g-sec-title'>100+</p>
                                <p className='g-sec-desc '>Employess</p>
                            </Card>
                        </div>
                        <div className='col-md-3'>
                            <Card hoverable className='g-sec-right text-center'>
                                <p className='g-sec-title '>30-50 lacs</p>
                                <p className='g-sec-desc '>Printing Capacity</p>
                            </Card>
                        </div>
                        <div className='col-md-3'>
                            <Card hoverable className='g-sec-right text-center'>
                                <p className='g-sec-title '>50+</p>
                                <p className='g-sec-desc '>Clients</p>
                            </Card>
                        </div>
                        <div className='col-md-3'>
                            <Card hoverable className='g-sec-right text-center'>
                                <p className='g-sec-title '>25 Yr</p>
                                <p className='g-sec-desc '>Experience</p>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default GlobalServiceComponent