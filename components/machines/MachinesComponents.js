import React, { useEffect, useState } from 'react';
import { Card, Modal, Tabs } from 'antd';
const {Meta} = Card
//const { TabPane } = Tabs;
import { Machines } from './Machines';
import style from '../spares/sparse.module.css'
import Popup from '../spares/Popup';

function MachinesComponent() { 
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
    <div className='container'>
        {/*<Tabs defaultActiveKey='0' tabPosition={width<900?'top':'left'}>
          <TabPane tab={'HOME APPLIANCES'} key={0}>*/}
            
            <div className='row ml-0'>
              {Machines.home.map((v,index)=>
                <div className='col-md-4' onClick={()=> handleDeityClick('home',index)} key={index}>
                  <Card hoverable cover={<img alt={v.title} src={v.thumImg} />}>
                    <Meta title={v.title}  />
                  </Card>
                </div>
              )}
            </div>
          
         
        {
          selected !== null && 
          <div className={`${style.overlay}`} onClick={handleClose}>
              <Popup selected={Machines[selected.type][selected.index]} handleClose={handleClose}/>
              {/* <SiblingInfo selectDeity={selectDeity} handleClose={handleClose} /> */}
          </div>
        }
      </div>
    </div>
    </>
  )
}

export default MachinesComponent
