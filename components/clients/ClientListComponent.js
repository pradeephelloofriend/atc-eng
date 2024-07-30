import React from 'react'
import Marquee from "react-fast-marquee";
import Image from 'next/image'
import { width } from '@fortawesome/free-solid-svg-icons/fa0';
const ClientListComponent = () => {
  return (
    <div className='position-realtive '>
      {/*<h2 style={{ width: "", fontWeight: "bold" }}>Our Clients</h2>*/}

      <Marquee speed={50}>
        <Image width={145} height={80} src='/images/clients/IFB.png' alt="" />
        <Image width={145} height={80} src='/images/clients/whirlpool.png' alt="" />
        <Image width={145} height={80} src='/images/clients/ion_logo.png' alt="" />
        <Image width={145} height={80} src='/images/clients/onida.png' alt="" />
        <Image width={145} height={80} src='/images/clients/commscope.png' alt="" />
        <Image width={145} height={80} src='/images/clients/hundai.png' alt="" />

      </Marquee>
    </div>
  )
}

export default ClientListComponent