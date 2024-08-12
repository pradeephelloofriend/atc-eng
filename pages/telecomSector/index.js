import React from 'react'
import SparesBreadcumb from '../../components/spares/SparesBreadcumb'
import SparesComponent from '../../components/spares/SparesComponent'

function index() {
  return (
    <div>
      <SparesBreadcumb title={'Telecom Sector'} />
      <SparesComponent type={'telecom'} />
    </div>
  )
}

export default index
