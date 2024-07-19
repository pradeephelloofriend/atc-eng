import React from 'react'
import DrawerComponent from '../drawer/DrawerComponent'

const MainLayout = ({children}) => {
    return (
        <>
        <div id='bg'>
            <div className="page-wraper">
                
                {children}
            </div>
        </div>
        
        </>
    )
}
export default  MainLayout