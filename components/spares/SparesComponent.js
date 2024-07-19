import React, { useEffect, useState } from 'react';
import { Card, Modal, Tabs } from 'antd';
const {Meta} = Card
const { TabPane } = Tabs;
import {products} from './products'
import style from './sparse.module.css'
import Popup from './Popup';

function SparesComponent() { 
  // console.log("here",products)
  
  const [selected, setSelected] = useState(null)

  const [width, setWidth] = useState(0)
  useEffect(() => {
    function handleResize() {
      setWidth(parseInt(window.innerWidth))
    }
    window.addEventListener("resize", handleResize)
    
    handleResize()
    
    return () => { 
      window.removeEventListener("resize", handleResize)
    }
  }, [setWidth])
  // console.log(selected)

  const handleDeityClick = (type, index) => {
    setSelected({type:type,index:index});
    document.body.style.overflow = 'hidden'; 
  };

  const handleClose = () => {
    setSelected(null);
      document.body.style.overflow = 'auto'; 
  };

  return (
    <>
    <div className='spare-pro'>
    <div className=''>
        <Tabs defaultActiveKey='0' tabPosition={width<900?'top':'left'}>
          <TabPane tab={'HOME APPLIANCES'} key={0}>
            
            <div className='row ml-0'>
              {products.home.map((v,index)=>
                <div className='col-md-4' onClick={()=> handleDeityClick('home',index)} key={index}>
                  <Card hoverable cover={<img alt={v.title} src={v.thumImg} />}>
                    <Meta title={v.title}  />
                  </Card>
                </div>
              )}
            </div>
          
          </TabPane>
          <TabPane tab={'TELECOM SECTOR'} key={1}>

            <div className='row ml-0'>
              {products.telecom.map((v,index)=>
                <div className='col-md-4' onClick={()=> handleDeityClick('telecom',index)} key={index}>
                  <Card hoverable cover={<img alt={v.title} src={v.thumImg} />}>
                      <Meta title={v.title}  />
                  </Card>
                </div>
              )}
              </div>
          </TabPane>
        </Tabs>
        {
          selected !== null && 
          <div className={`${style.overlay}`} onClick={handleClose}>
              <Popup selected={products[selected.type][selected.index]} handleClose={handleClose}/>
              {/* <SiblingInfo selectDeity={selectDeity} handleClose={handleClose} /> */}
          </div>
        }
      </div>
    </div>
    </>
  )
}

export default SparesComponent
