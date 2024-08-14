import React, { useEffect, useState } from 'react';
import { Card, Modal, Tabs } from 'antd';
const {Meta} = Card
const { TabPane } = Tabs;
import {products} from './products'
import style from './sparse.module.css'
import Popup from './Popup';
import ExtraPopup from './ExtraPopup.js';
import MachineBlock1 from '../machines/MachineBlock1.js';
import { Container } from 'react-bootstrap';

function SparesComponent({type}) { 
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
    // document.body.style.overflow = 'hidden'; 
  };

  const handleClose = () => {
    setSelected(null);
      document.body.style.overflow = 'auto'; 
  };
  
  const createPairs = (array) => {
    const pairs = [];
    for (let i = 0; i < array.length; i += 2) {
      pairs.push(array.slice(i, i + 2));
    }
    return pairs;
  };

  const data = createPairs(products[type])
  // console.log(data)

  return (
    <>
    <div className='spare-pro'>
    <div className=''>
        {/* <Tabs defaultActiveKey='0' tabPosition={width<900?'top':'left'} style={{fontSize:"10px"}}>
          <TabPane tab={'HOME APPLIANCES'} key={0}> */}
          <Container>
            {
              data.map(itm=>
                <MachineBlock1 data={itm}/>
              )
            }
          </Container>
            
            {/* <div className='row'>
              {products[type].map((v,index)=>
                <div className='col-md-3' onClick={()=> handleDeityClick('home',index)} key={index}>
                  <Card hoverable cover={<img alt={v.title} src={v.thumImg} />}>
                    <Meta title={v.title}  />
                  </Card>
                </div>
              )}
            </div> */}
          
          {/* </TabPane>
          <TabPane tab={'TELECOM SECTOR'} key={1}> */}

            {/* <div className='row'>
              {products.telecom.map((v,index)=>
                <div className='col-md-3' onClick={()=> handleDeityClick('telecom',index)} key={index}>
                  <Card hoverable cover={<img alt={v.title} src={v.thumImg} />}>
                      <Meta title={v.title}  />
                  </Card>
                </div>
              )}
              </div> */}
          {/* </TabPane>
          <TabPane tab={'PLASTIC FASTENERS'} key={2}> */}

            {/* <div className='row'>
              {products.extraparts.map((item,index)=>
                <div className='col-md-3' onClick={()=> handleDeityClick('extraparts',index)} key={index}>
                  <Card hoverable cover={<img alt={item.title} src={item.thumImg} />}>
                      <Meta title={item.title}  />
                  </Card>
                </div>
              )}
              </div> */}
          {/* </TabPane>
        </Tabs> */}
        {/* {
          selected !== null && 
          <div className={`${style.overlay}`} onClick={handleClose}>
              {
                selected.type=='extraparts' ?
                  <ExtraPopup selected={products[selected.type][selected.index]} handleClose={handleClose}/>
                :
                  <Popup selected={products[selected.type][selected.index]} handleClose={handleClose}/>
              }
          </div>
        } */}
      </div>
    </div>
    </>
  )
}

export default SparesComponent
