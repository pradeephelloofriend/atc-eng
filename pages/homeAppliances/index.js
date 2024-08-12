import React from 'react'
import SparesBreadcumb from '../../components/spares/SparesBreadcumb'
import SparesComponent from '../../components/spares/SparesComponent'

function index() {
  return (
    <div>
      <SparesBreadcumb  title={'Home appliances'}/>
      <SparesComponent type={'home'}/>
    </div>
  )
}

export default index
