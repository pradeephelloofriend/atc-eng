import React from 'react'
import Marquee from "react-fast-marquee";
import Image from 'next/image'
import ClientListComponent from './ClientListComponent';
const ClientsComponent = () => {
  return (
    <>
        <div className="section-full bg-white content-inner-35">
              <div className="container ">
                    
                  <ClientListComponent/>  
              </div>
        </div>
    </>
  )
}

export default ClientsComponent