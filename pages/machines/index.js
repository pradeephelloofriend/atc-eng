import React from 'react'
import MachinesBreadcumb from '../../components/machines/MachinesBreadcumb'
import MachinesComponent from '../../components/machines/MachinesComponents'

//import SparesBreadcumb from '../../components/spares/SparesBreadcumb'
//import SparesComponent from '../../components/spares/SparesComponent'

function index() {
  return (
    <div>
      <MachinesBreadcumb />
      <MachinesComponent />
      {/*<SparesBreadcumb />
      <SparesComponent />*/}
    </div>
  )
}

export default index