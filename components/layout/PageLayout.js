import React from 'react'
import PageHeaderComponent from '../header/PageHeaderComponent'

const PageLayout = ({children}) => {
  
  return (
    <>
      <div className='page-content bg-white'>
        {/*<PageHeaderComponent />*/}
        <div className="content-block">
          {children}
        </div>

      </div>
    </>
    
  )
}

export default PageLayout