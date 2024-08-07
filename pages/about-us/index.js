import React from 'react'
import AboutBreadCumbComponent from '../../components/about-us/AboutBreadCumbComponent'
import { Radio, Tabs } from 'antd';
import AboutIhmComponent from '../../components/about-us/AboutIhmComponent';
import AboutNetworkComponent from '../../components/about-us/AboutNetworkComponent';
import AboutLeadershipComponent from '../../components/about-us/AboutLeadershipComponent';
import AboutRecognitionComponent from '../../components/about-us/AboutRecognitionComponent';
import MissionComponent from '../../components/about-us/MissionComponent';
import VisionComponent from '../../components/about-us/VisionComponent';
import AboutGetToComponent from '../../components/about-us/AboutGetToComponent';
import AboutHistoryComponent from '../../components/about-us/AboutHistoryComponent';
import ClientsComponent from '../../components/clients/ClientsComponent'
import ReviewComponent from '../../components/Home/getInTouch/ReviewComponent';
import AboutApurvaComponent from '../../components/about-us/AboutApurvaComponent';
import VisionAndMission from '../../components/about-us/VisionAndMission';
import  Certificate  from '../../components/about-us/Certificate';
const index = () => {
 
  return (
    <>
    <AboutBreadCumbComponent/>
    <AboutIhmComponent/>
    <AboutApurvaComponent />
    <VisionAndMission/>
    <VisionComponent/>
    
    {/* <AboutLeadershipComponent /> */}
    {/*<AboutNetworkComponent />*/}
    {/* <AboutGetToComponent /> */}
    {/* <MissionComponent /> */}
    {/* <ClientsComponent/> */}
    <Certificate />
    <ReviewComponent/>
    </>
    
  )
}

export default index