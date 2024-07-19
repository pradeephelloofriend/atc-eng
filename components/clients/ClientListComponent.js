import React from 'react'
import Marquee from "react-fast-marquee";
import Image from 'next/image'
import { width } from '@fortawesome/free-solid-svg-icons/fa0';
const ClientListComponent = () => {
  return (
    <div className='position-realtive ' style={{display:"flex", gap:"10px", padding:"20px", flexWrap:"wrap", alignItems:'center', flexDirection:"column"}}>
      <h2 style={{width:"", fontWeight:"bold"}}>Our Clients</h2>
      <div style={{display:"flex", gap:"30px", padding:"20px", flexWrap:"wrap"}}>
        <div style={{width:"auto"}}>
          <h3 style={{display:"flex", justifyContent:"center", width:"100%", fontWeight:"bold", fontSize:"25px"}}>HOME APPLIANCES</h3>
          <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"20px"}}>
            <div style={{display:"flex", gap:"20px"}}>
              <p><img src='/images/clients/IFB.png' width={100} /> </p>
              <p><img src='/images/clients/whirlpool.png' width={100} /> </p>
            </div>
            <div style={{display:"flex", gap:"20px"}}>
              <p><img src='/images/clients/ion_logo.png' width={100} /></p>
              <p><img src='/images/clients/onida.png' width={100} /> </p>
            </div>
            {/* MICR Electronics Ltd( ONIDA )
                 Ion Exchange India Ltd
                 WHIRLPOOL of India Ltd
                 IFB Industries Ltd Washing Machines & AC

                 Commscope India Pvt. Ltd

                 Hyundai Construction Equipment Pvt. Ltd
             */}
          </div>
        </div>
        <div style={{padding:"0px 0px 10px 20px"}}>
        <div>
          <h3 style={{display:"flex", justifyContent:"center", width:"100%", fontWeight:"bold", fontSize:"25px"}}>TELECOM SECTOR</h3>
          <div style={{display:"flex", flexDirection:"", justifyContent:"center", gap:"20px", width:"100%"}}>
            <p><img src='/images/clients/commscope.png' width={150} /> </p>
          </div>
        </div>
        
        <div>
          <h3 style={{display:"flex", justifyContent:"center", width:"100%", fontWeight:"bold", fontSize:"25px"}}>AUTOMOTIVE SECTOR</h3>
          <div style={{display:"flex", flexDirection:"", justifyContent:"center", gap:"20px", width:"100%"}}>
            <p><img src='/images/clients/hundai.png' width={200} /> </p>
          </div>
        </div>
      </div>
      </div>
                    {/* <Marquee speed={50}>
                        <Image  width={145} height={80} src='/images/clients/c1-min.png' alt=""/>
                        <Image  width={145} height={80} src='/images/clients/c2-min.png' alt=""/>
                        <Image  width={145} height={80} src='/images/clients/c3-min.png' alt=""/>
                        <Image  width={145} height={80} src='/images/clients/c4-min.png' alt=""/>
                        <Image  width={145} height={80} src='/images/clients/c5-min.png' alt=""/>
                        <Image  width={145} height={80} src='/images/clients/c6-min.png' alt=""/>
                        <Image  width={145} height={80} src='/images/clients/c7-min.png' alt=""/>
                        <Image  width={145} height={80} src='/images/clients/c7-min.png' alt=""/>
                        <Image  width={145} height={80} src='/images/clients/c8-min.png' alt=""/>
                        <Image  width={145} height={80} src='/images/clients/c9-min.png' alt=""/>
                    </Marquee> */}
    </div>
  )
}

export default ClientListComponent