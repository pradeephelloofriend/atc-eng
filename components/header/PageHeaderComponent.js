import React from 'react'
import {useRouter} from 'next/router'
import MainSliderComponent from '../slider/MainSliderComponent'
import BreadcumbComponent from '../breadcumb/BreadcumbComponent'
const PageHeaderComponent = () => {
    const router =useRouter()
  return (
    <>
    {router.pathname=='/'?
    <MainSliderComponent/>
    :
    <BreadcumbComponent/>
    }
    </>
  )
}

export default PageHeaderComponent