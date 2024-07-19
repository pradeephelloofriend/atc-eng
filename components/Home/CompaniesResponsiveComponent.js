import React, { useState, useEffect } from 'react';
import { Collapse, Button } from 'antd';
import { useRouter } from 'next/router';
import { setTabKey } from '../../redux/menu/menuAction';
import { menuItem } from '../../util/menuItem';
import { connect } from 'react-redux';
import styles from './forCompanies/forCompanies.module.css';

function CompaniesResponsiveComponent({ setTabKey }) {
    const [menu, setMenuData] = useState([]);
    const [firstMenu, setFirstMenu] = useState([]);
    const router = useRouter();

    const handleSubMenuClick = (menuId, routeName, companyName) => {
        const routeCode = companyName.split(" ");
        const rPath = routeCode.join("-");
        router.push({
            pathname: "/" + routeName + "/" + rPath + "/",
            query: { catCode: menuId, tabKey: rPath }
        });
        setTabKey(rPath);
    };

    useEffect(() => {
        const menu3 = menuItem.filter(item => item.menuId === 3);
        const filteredSubMenus = menuItem.filter(item => item.menuName === 'Services').map(item => item.subMenu);
        setMenuData(filteredSubMenus);
        setFirstMenu(menu3);
    }, [router]);

    if (!menu || !Array.isArray(menu[0])) {
        return null;
    }

    const items = menu[0].map((company, index) => ({
        key: `${index.toString()}`,
        label: <span>{company.companyName}</span>,
        content: (
            <div className={styles.image_container}>
                <img className={styles.image_div} src={company.compImage} alt={company.companyName} />
                <div className={styles.overlay_box}>
                    <h2>{company.companyName}</h2>
                    <p>{company.companydesc}</p>
                    <div className={`${styles.read_class} read-cl`}>
                        <Button onClick={() => handleSubMenuClick(firstMenu[3].menuId, firstMenu[3].routeName, company.companyName)}>Read More</Button>
                    </div>
                </div>
            </div>
        )
    }));
console.log("items", menu[0])
    return (
        <div className='service-sec'>
            <div className='head-block'>
                <h4 className="w-title">Our Services</h4>
                <p className='w-title1'> eCommerce fulfilment perfected</p>
            </div>
            <div className='com-cl'>
                <Collapse accordion items={items} />
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    setTabKey: (data) => dispatch(setTabKey(data)),
});
export default connect(null, mapDispatchToProps)(CompaniesResponsiveComponent);
