import React from 'react'
import Image from 'next/image'
import { Typography } from 'antd'
import {useRouter} from 'next/router'
const {Text}=Typography
const QualitySectionComponent = () => {
  const router = useRouter()
  return (
    <>
    <div className="section-full bg-gray content-inner">
		  <div className="container">
      <div className='row qa-box'>
              <div className='col-md-4'>
              <div className='head-block1'>
                              <h4 className="w-title">Quality Assurance</h4>
                              <p className='w-title1'> The Company has received certificates such as ISO 14001:2008, ISO 22000, FSC®c114394 </p>
                          </div>
                  
              </div>
              <div className='col-md-3'>
                  <div className="icon-bx-wraper left">
                      <div className="icon-bx-sm"><Image src='/images/qa/iso.png' alt='i1'height={300} width={300}/>  </div>
                      <div className="icon-content">
                          <Text>ISO Certification covers various aspects of Quality and Environmental Management.</Text>
                          
                          <div className='q-cf'>
                          
                            <a onClick={()=>router.push({pathname:'certificate'})} className=" m-r30 t-blue">ISO 9001-2015 certificate</a>
                            
                          </div>
                          <div className='q-cf'>
                            <a onClick={()=>router.push({pathname:'certificate'})} className=" m-r30 t-blue">ISO 14001-2015 certificate</a>
                          </div>
                          
                      </div>
                  </div>
              </div>
              <div className='col-md-3'>
                  <div className="icon-bx-wraper left">
                      <div className="icon-bx-sm"><Image src='/images/qa/gmp.png' alt='i1'height={300} width={300}/>  </div>
                      <div className="icon-content">
                          <Text>GMP Certification covers that products are consistently produced and controlled according to quality standards.</Text>
                          <div className='q-cf'>
                          
                          <a onClick={()=>router.push({pathname:'certificate'})} className="m-r30 t-blue">GMP certificate</a>
                          
                        </div>
                      </div>
                  </div>
              </div>
              {/* <div className='col-md-2'>
                  <div className="icon-bx-wraper left des">
                  <Image src='/images/qa/quality.jpg' alt='i1'height={61} width={250}/> 
                      
                      <div className="icon-content">
                          <div className='q-cf'>
                          <a onClick={()=>router.push({pathname:'certificate'})} className="m-r30 t-blue"
                          >DMF certificate</a>
                          
                        </div>
                      </div>
                  </div>
              </div> */}
          </div>
        </div>
    </div>
    </>
  )
}

export default QualitySectionComponent