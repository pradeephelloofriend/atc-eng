import React, { useRef } from 'react'
import Image from 'next/image';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {setTabKey} from '../../redux/menu/menuAction'
import {selectMenuRef} from '../../redux/menu/menuSelector'
import { useRouter } from 'next/router'
import { menuItem } from '../../util/menuItem';
import { Button, Drawer } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import DrawerComponent from '../drawer/DrawerComponent';



const MenuItemComponent = ({ setTabKey,ref1 }) => {
	console.log()
	const [openN, setOpen] = React.useState(false);
	const [menu, setmenuData] = React.useState([]);
	const [firstMenu, setFirstMenu] = React.useState([]);
	const router = useRouter()
	const showDrawer = () => {
        setOpen(true);
      };
	  const handleSubMenuClick = (menuId, routeName, companyName) => {
		const routeCode = companyName.split(" ") 
	const rPath=routeCode.join("-")
	router.push({
		pathname:"/"+routeName+"/"+rPath+"/",
		query:{catCode:menuId,tabKey:rPath}
	})
	setTabKey(rPath);
	};
    
	function routeWithScroll(ref,tKey){
		setTabKey(tKey)
        router.push({
          pathname:'/about-us',
          query:{ref:ref}
        })
	}
	
    React.useEffect(() => {
		const menu3 = menuItem.filter(item => item.menuId == 3);
		const filteredSubMenus = menuItem.filter(item => item.menuName == 'Services').map(item => item.subMenu);
		setmenuData(filteredSubMenus);
		setFirstMenu(menu3)
        // setRef(ref1)
		// if (router.query.ref=='tab'){
		// 	window.scrollTo(0, ref)
			
		//   }
      }, [ref1,router])
      
	  if (!menu || !Array.isArray(menu[0])) {
		return null;
	}
    
    return (
        <>
		
		<ul className="nav navbar-nav">
					<li onClick={() => router.push('/')} className={router.pathname == '/' ? "active" : ""}>
						<a >Home</a>
					</li>
					<li className={router.pathname == '/about-us' ? "active" : ""}>
						<a onClick={() => router.push('/about-us')} >About Us</a>
						{/* </li> */}
						{/* <li  className={router.pathname=='/solutions'?"active":""}> <a href='#' >Services<i className="fa fa-chevron-down"></i></a> */}
						

					</li>



					{/* <li className={router.pathname == '' ? "active" : ""}>
						{firstMenu.map((x, y) => (<>
							<a onClick={() => router.push('')} >{x.menuName}<i className="fa fa-chevron-down"></i></a><ul className="sub-menu">
								{menu[0].map((company, index) => (
									<li><a onClick={() => handleSubMenuClick(x.menuId, x.routeName, company.companyName)}>{company.companyName}</a></li>
								))}
							</ul>
						</>
						))}

					</li> */}
{/* 
					<li className={router.pathname == '/' ? "active" : ""} onClick={() => router.push('/')} ><a>Industries</a>
					</li> */}
<li className={router.pathname == '/machines' ? "active" : ""} onClick={() => router.push('/machines')} ><a>Machines</a>
</li>
					<li className={router.pathname == '/spares' ? "active" : ""} onClick={() => router.push('/spares')} ><a>Engineered Products</a>
					</li>
					<li className={router.pathname == '/contat-us' ? "active" : ""} onClick={() => router.push('/contact-us')} ><a>Contact Us</a>
					</li>



				</ul>

						
        </>
    )
}
const mapStateToProps=createStructuredSelector({
	ref1:selectMenuRef,
	
  })
  const mapDispatchToProps=dispatch=>({
	setTabKey:data=>dispatch(setTabKey(data))
  })

export default connect(mapStateToProps,mapDispatchToProps) (MenuItemComponent)
