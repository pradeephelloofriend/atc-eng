import React, { useEffect, useState } from 'react';
import { Card, Modal, Tabs } from 'antd';
const {Meta} = Card
//const { TabPane } = Tabs;
import { Machines } from './Machines';
import style from '../spares/sparse.module.css'
import Popup from '../spares/Popup';
import { Container } from 'react-bootstrap';
import MachineBlock1 from './MachineBlock1';
import MachineBlock2 from './MachineBlock2';
import MachineBlock3 from './MachineBlock3';
import MachineBlock4 from './MachineBlock4';

function MachinesComponent() { 
  console.log("here",Machines)
  const createPairs = (array) => {
    const pairs = [];
    for (let i = 0; i < array.length; i += 2) {
      pairs.push(array.slice(i, i + 2));
    }
    return pairs;
  };

  const data = createPairs(Machines.home)
  console.log(data)

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
    <section className='spare-pro'>
      <Container>
              <div className='head-block-center text-center'>
                              <h4 className="w-title">Equipments We Used</h4>
                              <p className='w-title1'>Cutting-Edge Technology</p>
                          </div>

                          {
                            data.map(itm=>
                                <MachineBlock1 data={itm}/>
                            )
                          }
                         {/* <MachineBlock1/> */}
                         {/* <MachineBlock2/> */}
                         {/* <MachineBlock3/>
                         <MachineBlock4/> */}
      </Container>
    {/* <div className='container'>
            
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
          </div>
        }
      </div> */}
    </section>
    </>
  )
}

export default MachinesComponent
