import React from 'react'
import { BackTop, Button } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import { setTabKey } from '../../redux/menu/menuAction';
import { menuItem } from '../../util/menuItem';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

const FooterComponent = ({ setTabKey }) => {
    
	const [menu, setmenuData] = React.useState([]);
	const [firstMenu, setFirstMenu] = React.useState([]);
	const router = useRouter()

    const handleClick = () => {
        router.push('/about-us')
    }

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
        const menu3 = menuItem.filter(item => item.menuId === 3);
		const filteredSubMenus = menuItem.filter(item => item.menuName === 'Services').map(item => item.subMenu);
        setmenuData(filteredSubMenus);
		setFirstMenu(menu3)
    }, [ router])

	if (!menu || !Array.isArray(menu[0])) {
		return null;
	}
    return (
        <>
            <footer className="site-footer">
                <div className="footer-top footer-area">
                    <div className="container">
                        <div className="row gap-3 justify-center">

                        <div className="col-md-4 footer-col-4 ">


                            <div className="widget widget_services border-0 n-da">

                                <img className="footer-logo" src='/images/logo/aplogo.png' alt="" style={{width:"", height:"70px"}} />
                                {/* <p className='text-white'>IHM are exclusive dealers for L&T Valves in Telangana. The company has a series of
                                    successful innovations to its credit,
                                    including mission-critical solutions
                                    for defence and aerospace Industries.
                                </p> */}
                                <ul>
                                    <a className='text-white'></a><br></br>
                                    <a className='text-white'> ATC Industries, specializes in manufacturing high-quality engineering polymer components for OEMs in the home appliances, telecom equipment, and automobile sectors.
                                    </a><br></br>
                                    <a className='text-white'>Contact us: +91 7841069245</a><br></br>
                                    <a className='text-white'>Email: <u>apurvaengineering23@gmail.com</u></a><br></br>
                                    <a className='text-white'>GST: 30CBAPR9562D1ZS</a><br></br>
                                    
                                    {/* <a className='text-white'>Reach out: <u>rc-reachout@adports.ae</u></a><br></br> */}
                                    {/* <a className='text-white'>Whistleblowing: <u>Online portal</u></a> */}
                                </ul>
                                <div className="footer-social">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-rss"></i></a></li>
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>

                            </div>

                            {/* <div className="widget widget_services border-0 ">
                            <h5 className="w-title text-white">ABOUT COMPANY</h5>
                            <ul>
                                <li><a >About Us</a></li>
                                <li><a >Services </a></li>
                                <li><a >Infrastructure</a></li>
                                
                            </ul>
                            </div> */}

                            {/* <div className="widget  widget_getintuch ">
                            <h5 className="w-title text-white">Working Hours</h5>
                            <ul className='text-white'>
                                        <li><i className="ti-location-pin "></i><strong>address</strong> Flat # 5-1-525, Hill Street, Ranigunj Secunerabad, Telangana, 500003 </li>
                                        <li><i className="ti-mobile"></i><strong>phone</strong>040-66 383 718 (24/7 Support Line)</li>
                                        <li><i className="ti-mobile"></i><strong>mobile number</strong>918096776660 </li>
                                        <li><i className="ti-email"></i><strong>email</strong>info@example.com</li>
                                    </ul>
                            </div> */}
                            </div>

                            <div className="col-md-3">
                                <div className="widget widget_services border-0 ">
                                    <h5 className="w-title text-white">About Company</h5>
                                    
                                    <ul>
                                      <li><a onClick={() => router.push('/about-us')}>Our Expertise</a></li>
                                      <li><a onClick={() => router.push('/about-us')}>Quality Infrastructure </a></li>
                                      <li><a onClick={() => router.push('/about-us')}>Commitment to Excellence</a></li>
                                      <li><a onClick={() => router.push('/about-us')}>Client Centric Approach</a></li>
                                      
                                  </ul>
                                  </div>
                                    </div>

                                    
                            <div className="col-md-3">
                                <div className="widget widget_services border-0 ">
                                    <h5 className="w-title text-white">Policy</h5>
                                    
                                    <ul>
                                        <li><a onClick={() => router.push('/customerPolicy')}>Customer Policy</a></li>
                                        <li><a onClick={() => router.push('/privacy')}>Privacy Policy</a></li>
                                      {/* <li><a onClick={() => router.push('/about-us')}>Quality Infrastructure </a></li>
                                      <li><a onClick={() => router.push('/about-us')}>Commitment to Excellence</a></li>
                                      <li><a onClick={() => router.push('/about-us')}>Client Centric Approach</a></li> */}
                                      
                                  </ul>
                                  </div>
                                    </div>

                        {/* <div className="col-md-3">
                                <div className="widget widget_services border-0 ">
                                {firstMenu.map((x, y) => (
                                    <>
                                    <h5 className="w-title text-white">{x.menuName}</h5>
                                    <ul>
                                    {menu[0].map((company, index) => (
									<li><a onClick={() => handleSubMenuClick(x.menuId, x.routeName, company.companyName)}>{company.companyName}</a></li>
								))}

                                    </ul>
                                </>
))}

                                </div>
                            </div> */}
                                {/* <div className="widget widget_services border-0">
                          
                                  <img className="footer-logo" src='/images/footer/ihmFooterLogo.png'  alt=""/> */}
                                {/* <p className='text-white'>IHM are exclusive dealers for L&T Valves in Telangana. The company has a series of 
successful innovations to its credit, 
including mission-critical solutions 
for defence and aerospace Industries.
</p> */}
                                {/* <div className="footer-social">
                                        <ul>
                                            <li><a href="#"><i className="fa fa-rss"></i></a></li>
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                        </ul>
						            </div>
                                    
                          </div> */}
                                {/* <div className="col-md-4  footer-col-4">
                              <div className="widget widget_services border-0 pl-100">
                                  <h5 className="w-title text-white">Company</h5>
                                  <ul>
                                      <li><a >About Us</a></li>
                                      <li><a >Services </a></li>
                                      <li><a >Infrastructure</a></li>
                                      
                                  </ul>
                              </div>
                          </div> */}
                            

                        </div>
                    </div>
                </div>

                <div className="footer-bottom bg-red-c">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 text-left "> <span>Copyright © 2024 ATC Industries</span> </div>
                            <div className="col-md-6 col-sm-6 text-right ">
                                <div className="widget-link ">
                                    <ul>
                                        <li><a onClick={() => router.push('/about-us')}> About Us</a></li>
                                        <li><a onClick={() => router.push('/contact-us')}> Help Desk</a></li>
                                        {/* <li><a onClick={() => router.push('/privacy')}> Privacy Policy</a></li> */}
                                    </ul>
                                </div>
                            </div>
                            {/* <BackTop>
                                <Button icon={<UpOutlined />} size="large" />

                            </BackTop> */}

                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}


const mapDispatchToProps = (dispatch) => ({
    setTabKey: (data) => dispatch(setTabKey(data)),
});
export default connect(null, mapDispatchToProps)(FooterComponent)