import React, { useRef } from 'react'
import Image from 'next/image';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {setTabKey} from '../../redux/menu/menuAction'
import {selectMenuRef} from '../../redux/menu/menuSelector'
import { useRouter } from 'next/router'



const MenuComponent = ({ setTabKey,ref1 }) => {
    const router = useRouter()
    const[ref,setRef]=React.useState() //about/history page
    
	function handleChildMenuClick(menuroute, subroute,cmName, catCode, subCatCode) {
		const routeCode = cmName.split(" ") 
		const rPath=routeCode.join("-")
		router.push({
			pathname:"/"+menuroute+"/"+subroute+"/"+rPath+"/",
			query:{catCode:catCode,subCatCode:subCatCode,tabKey:rPath}
		})
		setTabKey(rPath);
		
	  }

	  const handleSubMenuClick = (subMenuId, routeName, menuId, pCode) => {
		//console.log("pcode", pCode)
		//console.log('rote', routeName)
		router.push({pathname:"/"+pCode+"/"+routeName+"/",
		query:{catCode:menuId,subCatCode:subMenuId}
	})
		
	  
	  };
    
	function routeWithScroll(ref,tKey){
		setTabKey(tKey)
        router.push({
          pathname:'/about-us',
          query:{ref:ref}
        })
	}
	
    React.useEffect(() => {
        setRef(ref1)
		if (router.query.ref=='tab'){
			window.scrollTo(0, ref)
			
		  }
      }, [ref1,router])
      
    
    return (
        // <div className='men-div'>
        // <div className='container'>
		// 				{/* {router.pathname === '/' && <p>/ Home</p>} */}
        //     {router.pathname === '/about-us' && <p>Home/ About Us</p>}
		// 	{router.pathname === '/services' && <p>Home/ Services</p>}
		// 	{router.pathname === '/contact-us' && <p>Home/ Contact Us</p>}
        // </div>
        // </div>
		<></>
    )
}
const mapStateToProps=createStructuredSelector({
	ref1:selectMenuRef,
	
  })
  const mapDispatchToProps=dispatch=>({
	setTabKey:data=>dispatch(setTabKey(data))
  })

export default connect(mapStateToProps,mapDispatchToProps) (MenuComponent)
