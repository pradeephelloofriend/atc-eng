import React from 'react';

function LocationAddressComponent({address1, address2, address3}) {
  return (<>
        <li><i className="ti-location-pin "></i>
        <strong>Address<p>{address1}</p>
        </strong></li>
       
        
   </>
  )
}

export default LocationAddressComponent
