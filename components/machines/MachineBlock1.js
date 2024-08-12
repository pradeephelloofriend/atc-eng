import React from 'react'
import Collapse from 'react-bootstrap/Collapse';
import Image from 'next/image'
import { DownOutlined } from '@ant-design/icons'
import s1 from '../../public/images/machines/equip1.jpg'
import s2 from '../../public/images/machines/equip1.jpg'
import s3 from '../../public/images/machines/equip1.jpg'
import s4 from '../../public/images/machines/equip1.jpg'
import s5 from '../../public/images/machines/equip1.jpg'
const MachineBlock1 = ({data}) => {
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const[id,setId]=React.useState('')
    //const[active,setActive]=React.useState()
   const openMenu=(clickId)=>{
    if (id===clickId) {
        setId('')
        console.log(clickId,id)
    }else{
        setId(clickId)
    }
    // if(id==1){
    //     setOpen(!open)
    //     setOpen1(false)
    // }else{
    //     setOpen(false)
    //     setOpen1(!open1)
    // }
   }
   console.log(data[0].desc,id)
    React.useEffect(()=>{
        //alert(id)
        
       

    },[id])
    return (
        <div className='equip-block'>
            <div className='row'>
                {
                    data.map((itm,index)=>
                        <div className='col-md-6 m-t20 '>
                            <div onClick={() =>openMenu(index) } class={id==1 && open?"kam-box kam-img-box img-hvr-content-style-1 e-active":"kam-box kam-img-box img-hvr-content-style-1"}>
                                <div class="kam-media kam-img-overlay2 kam-img-effect zoom ">
                                    <img src={itm.thumImg} alt='' />
                                    <div class="kam-info-has p-a20">
                                        <div class="kam-info-has-text">{itm.title}</div>
                                        <DownOutlined />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                {
                    data.map((itm,index)=>
                        <Collapse className='eq-block1-col mt-5 ' in={id===index}>
                            <div id="eq-block1-content1" className='eq-block1-content'>
                                
                                <div className='eq-block1-box'>
                                <div className='head-block mb-4'>
                                    <h4 className="w-title">{itm.title}</h4>

                                </div>
                                    <div className='row'>
                                        {
                                            itm.desc!==undefined && 
                                            <div className='col-md-6'>
                                                <div className='e-box-lr' dangerouslySetInnerHTML={{__html:itm.desc}}>
                                                {/* <p>POLAR 137 E high-speed cutter with performance-enhancing options tailored to your own requirements.</p>
                                                <p>POLAR high-speed cutter 137 E marks the entry level to the cutting of medium-size formats, such as III-b print products. Formats up to a diagonal of 1,370 mm can be conveniently turned on the high-speed cutter. When dealing with larger sizes the material being cut can only be turned on the front table.</p> */}
                                                </div>
                                                
                                            </div>
                                        }
                                        
                                        {
                                            itm.desc!==undefined && 
                                            <div className='col-md-6'>
                                                <div class="kam-media-box">
                                                    <img src={itm.descImg[0]} alt='' />
                                                </div>
                                            </div>
                                        }
                                        {
                                            itm.desc==undefined && 
                                            itm.descImg.map((it,index)=>
                                                <div className='col-md-4'>
                                                    <div class="kam-media-box">
                                                        <img src={it.imgSrc} alt='' />
                                                        <p className='f-25'>{it.title}</p>
                                                    </div>
                                                </div>
                                            )
                                            
                                        }
                                    </div>

                                </div>
                            </div>
                        </Collapse>
                    )
                }
                {/* <Collapse className='eq-block1-col mt-5 ' in={open}>
                    <div id="eq-block1-content1" className='eq-block1-content'>
                        
                        <div className='eq-block1-box'>
                        <div className='head-block mb-4'>
                            <h4 className="w-title">Polar 137 E</h4>

                        </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='e-box-lr'>
                                    <p>POLAR 137 E high-speed cutter with performance-enhancing options tailored to your own requirements.</p>
                                    <p>POLAR high-speed cutter 137 E marks the entry level to the cutting of medium-size formats, such as III-b print products. Formats up to a diagonal of 1,370 mm can be conveniently turned on the high-speed cutter. When dealing with larger sizes the material being cut can only be turned on the front table.</p>
                                    </div>
                                    
                                </div>
                                <div className='col-md-6'>
                                    <div class="kam-media-box">

                                        <Image src={s1} alt='' />


                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </Collapse>
                <Collapse className='eq-block1-col mt-5 ' in={open1}>
                    <div id="eq-block1-content" className='eq-block1-content'>
                        
                        <div className='eq-block1-box'>
                                <div className='head-block mb-4'>
                                    <h4 className="w-title">Komori 28-6</h4>
                                    <p className='w-title1'>Colour with coating</p>
                                </div>
                            <div className='row'>
                                
                                <div className='col-md-6'>
                                    <div className='e-box-lr'>
                                        <p>Reduced consumption of printing materials due to efficiency enhancements as well as environmentally positive reduction of potentially harmful substances are just a few of the benefits of this multi-color press with in-line coater</p>
                                        <p className='f-25'>Features:</p>
                                        <ul class="intro-ul">
                                            <li>6 Color With Coater </li>
                                            <li>Consumer Electronics</li>
                                            <li>Technotrans refrigeration and recirculation</li>
                                            <li>Dedicate COATER</li>
                                            <li>Continuous Delivery</li>
                                            <li>IVT IR Drier</li>
                                        </ul>
                                    </div>
                                    
                                </div>
                                <div className='col-md-6'>
                                    <div class="kam-media-box">
                                        <Image src={s3} alt='' />
                                    </div>
                                </div>
                            </div>
                            

                        </div>
                        <div className='eq-block1-box'>
                            <div className='head-block-right mb-4'>
                                    <h4 className="w-title">Komori 32-2</h4>
                                    <p className='w-title1'>Colour</p>
                                </div>
                            <div className='row'>
                                
                                <div className='col-md-6'>
                                    <div class="kam-media-box">
                                        <Image src={s4} alt='' />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='e-box-lr text-right'>
                                       
                                        <ul class="intro-ul">
                                            <li>Size : 22x32 Inch</li>
                                            <li>2 Color Press</li>
                                            <li>Straight Machine</li>
                                            <li>Komorimatic Dampening</li>
                                            
                                        </ul>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            

                        </div>
                        <div className='eq-block1-box mt-5'>
                                <div className='head-block mb-4'>
                                    <h4 className="w-title">Roland 28-1</h4>
                                    <p className='w-title1'>Colour</p>
                                </div>
                            <div className='row'>
                                
                                <div className='col-md-6'>
                                    <div className='e-box-lr'>
                                        <p>Reduced consumption of printing materials due to efficiency enhancements as well as environmentally positive reduction of potentially harmful substances are just a few of the benefits of this multi-color press with in-line coater</p>
                                        <p className='f-25'>Features:</p>
                                        <ul class="intro-ul">
                                            <li>6 Color With Coater Press</li>
                                            <li>Consumer Electronics</li>
                                            <li>Technotrans refrigeration and recirculation</li>
                                            <li>Dedicate COATER</li>
                                            <li>Continuous Delivery</li>
                                            <li>IVT IR Drier</li>
                                        </ul>
                                    </div>
                                    
                                </div>
                                <div className='col-md-6'>
                                    <div class="kam-media-box">
                                        <Image src={s5} alt='' />
                                    </div>
                                </div>
                            </div>
                            

                        </div>
                    </div>
                    
                </Collapse> */}
            </div>
        </div>
    )
}

export default MachineBlock1