import React from 'react'
const SparesBreadcumb = ({title}) => {
  const  img = title=='Plastic Fastners'?'/images/breadcrumb/plasticbreadcrumb.jpg': title=='Home appliances'?'/images/breadcrumb/homeappliancebreadcrumb.jpg' : null
  return (
    <>
      <div className="kam-bnr-inr bg-pt about-breadcumb" style={img==null?{}:{backgroundImage:`url(${img})`}}>
        <div className="container">
          <div className="kam-bnr-inr-entry p-relative">
            <div className="some-facts "></div>
            <div className="text-uppercase sf-content">
              <p className='arrow-animation'>{title}</p>
              {/* <h3>lorem ipsum and new data to be made and make the new data for these</h3> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



export default SparesBreadcumb
