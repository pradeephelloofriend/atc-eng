import React, { useEffect } from 'react'
import { Tabs, Button } from 'antd';
const { TabPane } = Tabs;
import styles from './forCompanies.module.css'
import { setTabKey } from '../../../redux/menu/menuAction';
import { menuItem } from '../../../util/menuItem';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
function TabOneComponent(
    {title1, desc1, title2, desc2, title3, desc3, title4, decs4, setTabKey}) 
{

  
	const [menu, setmenuData] = React.useState([]);
	const [firstMenu, setFirstMenu] = React.useState([]);
  
  const[tabLayout,setTablLayout]=React.useState(null)
	const router = useRouter()

    const handleSubMenuClick = (menuId, routeName, companyName) => {
		const routeCode = companyName.split(" ") 
	const rPath=routeCode.join("-")
	router.push({
		pathname:"/"+routeName+"/"+rPath+"/",
		query:{catCode:menuId,tabKey:rPath}
	})
	setTabKey(rPath);
	};

    React.useEffect(() => {
        const menu3 = menuItem.filter(item => item.menuId == 3);
		const filteredSubMenus = menuItem.filter(item => item.menuName == 'Services').map(item => item.subMenu);
        setmenuData(filteredSubMenus);
		setFirstMenu(menu3)


    function handleResize() {
      if (window.matchMedia("(min-width: 1400px)").matches) {
        setTablLayout("left")
       
        // Viewport is less or equal to 700 pixels wide
        //console.log("min-width: 1400px")
      } else if(window.matchMedia("(min-width: 1200px)").matches) {
        setTablLayout("left")
       
        // Viewport is greater than 700 pixels wide
        //console.log("min-width: 1200px")
      }else if(window.matchMedia("(min-width: 992px)").matches){
        setTablLayout("left")
        
        //console.log("min-width: 1200px")
      }else if(window.matchMedia("(min-width: 768px)").matches){
        setTablLayout("top")
        
        //console.log("min-width: 768px")
      }else if(window.matchMedia("(min-width: 576px)").matches){
        setTablLayout("top")
        
        //console.log("min-width: 768px")
      }else{
        setTablLayout("top")
        
        //console.log("min-width: 576px")
      }
    
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    }, [ router])

	if (!menu || !Array.isArray(menu[0])) {
		return null;
	}
  return (
    <div className='nd'>
       {firstMenu.map((x, y) => (
      <Tabs className='tab-class' tabPosition={tabLayout}>
        {menu[0].map((company, index) => (
        <TabPane tab={company.companyName} key={index.toString()}>
              <div className={styles.image_container} >
                <img className={styles.image_div} src={company.compImage} alt='maharshtra' />
                <div className={styles.overlay_box}>
                  <h2 >{company.companyName}</h2>
                  <p >{company.companydesc}
                  <div className={`${styles.read_class} read-cl `}>
                    <Button onClick={() => handleSubMenuClick(x.menuId, x.routeName, company.companyName)}>Read More</Button>
                  </div>
                  </p>
                </div>
              </div>
            </TabPane>
        ))}
          </Tabs>
       ))}
    </div>
  )
}
const mapDispatchToProps = (dispatch) => ({
  setTabKey: (data) => dispatch(setTabKey(data)),
});
export default connect(null, mapDispatchToProps)(TabOneComponent)
