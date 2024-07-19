import React from 'react'
import MainSliderComponent from '../components/slider/MainSliderComponent'
import ClientsComponent from '../components/clients/ClientsComponent'
import ReviewComponent from '../components/Home/getInTouch/ReviewComponent'
import LocationComponent from '../components/Home/locationfol/LocationComponent';
import CompaniesSmallScreenComponent from '../components/Home/CompaniesSmallScreenComponent';
import AboutNetworkComponent from '../components/about-us/AboutNetworkComponent';
import AboutGetToComponent from '../components/about-us/AboutGetToComponent';
import TabOneComponent from '../components/Home/forCompanies/TabOneComponent';
import CompaniesComponent from '../components/Home/forCompanies/CompaniesComponent';
const index = () => {
  return (
    <>
      <MainSliderComponent/>

      {/* <CompaniesComponent /> */}
      {/* <TrialComponent /> */}
      {/* <CompaniesResponsiveComponent /> */}
      {/* <ProductComponent/> */}

      {/* <StandForComponent/> */}
      {/* <NetworkComponent /> */}
      {/* <QualitySectionComponent/> */}
      {/* <AboutNetworkComponent /> */}

      <ReviewComponent />
      {/* <ClientsComponent/> */}
      <LocationComponent />
      {/* <ClientTestimonialComponent/> */}
    </>
  )
}

export default index