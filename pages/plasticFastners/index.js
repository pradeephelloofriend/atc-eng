import React from 'react'
import SparesBreadcumb from '../../components/spares/SparesBreadcumb'
import SparesComponent from '../../components/spares/SparesComponent'

function index() {
  return (
    <div>
      <SparesBreadcumb  title={'Plastic Fastners'} />
      <SparesComponent type={'extraparts'} />
    </div>
  )
}

export default index
