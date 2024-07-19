import React from 'react'
import GetQuoteComponent from './GetQuoteComponent'

const ContactUsComponent = () => {
  return (
    <>
          <div className="section-full bg-light content-inner new-customer wow fadeIn">
                <div className="container">
                    <div className='row'>
                        
                        <div className='col-12 col-md-12'>
                            <div className='new-block-center text-center'>
                              <h4 className="w-title">Let's Work Together</h4>
                              <p className='w-title1'>Contact our team of experts today to discuss all your services needs.</p>
                           
                            </div>
                            <div className='nc-right-block plr-8'>
                                <GetQuoteComponent/>

                            </div>
                        </div>
                    </div>
                </div>
                
          </div>
      </>
  )
}

export default ContactUsComponent

