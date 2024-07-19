import React from 'react';
import { useState } from 'react';
import { Tabs } from 'antd';
import ForCompaniesHeaderComponent from './ForCompaniesHeaderComponent';
import TabOneComponent from './TabOneComponent';



const CompaniesComponent = () => {

  return (
    <div className="section-full content-inner bg-gray testi-area">
      <div className="container">
        <ForCompaniesHeaderComponent title='Our Services' desc='Leading Global and Local Companies' />
        <div className='pt-3'>
          <TabOneComponent
          title1='Maharashtra Seamless Limited'
          desc1='Maharashtra Seamless Limited (MSL), incorporated
          on 10th May 1988, is the flagship company of the
          well-diversified DP Jindal Group. The Company is
          engaged in the manufacture of seamless pipes
          which find application in oil exploration, boilers,
          pipelines, petrochemicals etc. The plant is located at
          Raigad, Maharashtra, and is equipped with state-of￾the-art machinery.'
          title2='Jindal Saw Limited'
          desc2='Jindal SAWLtd. is a part of the O.P. Jindal Group, one
          of the countries topmost industry houses and the
          foremost indigenous steel producers and exporters.
          It started operation in the year 1984, when it became
          the first company in India to manufacture
          Submerged Arc Welded (SAW) Pipes using the
          internationallyacclaimed U-O-E technology.'
          title3='JCO Gas Pipe Limited'
          desc3='JCO Gas Pipe Ltd. is a company promoted by D.P
          Jindal Group and Chokhani Group. The plant is
          centrally located near Nagpur with state of the art
          Japanese mill for manufacturing of pipes of highest
          quality.'
          title4='Jindal Star'
          decs4='Jindal Star, with its unique offerings, enjoys brand
          leadership in the market and is one of the oldest,
          best and largest manufacturers of ERW (Black and
          Galvanized) Steel Pipes & Tubes in India. Earlier
          branded as Jindal Ghaziabad, it has been in this
          business formore than 4 decades.'
           />

        </div>

      </div>
    </div>

  )
}

export default CompaniesComponent