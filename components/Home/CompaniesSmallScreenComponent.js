import React from 'react'
import CompaniesComponent from './forCompanies/CompaniesComponent';
import { useMediaQuery } from 'react-responsive';
import CompaniesResponsiveComponent from './CompaniesResponsiveComponent';

function CompaniesSmallScreenComponent() {
    
  const isSmallScreen = useMediaQuery({ maxWidth: 476 });
  return (
    <div>
      {isSmallScreen ? <CompaniesResponsiveComponent/> : <CompaniesComponent/>}
    </div>
  )
}

export default CompaniesSmallScreenComponent
