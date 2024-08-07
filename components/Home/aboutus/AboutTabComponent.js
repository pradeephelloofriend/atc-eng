import React from 'react'
import { Tabs, Card, Button } from 'antd';
const { TabPane } = Tabs;
import { CheckOutlined, HomeOutlined, UserOutlined, PicCenterOutlined, HistoryOutlined } from '@ant-design/icons';
import styles from './about.module.css'
import { useRouter } from 'next/router';
import ClientListComponent from '../../clients/ClientListComponent';

function AboutTabComponent(
    { title1, title2, title3, title4, head1, para1 ,buttoncon, head2, list1, list2, list3, list4, list5, list6,
    head3, para3,para7,para8,para9, para2, head4, head5, head6, para4, para5, head7, para6 }
) 

{
    const router= useRouter()
    return (<>
    <div className='nd'>
            <Tabs className='tab-class' tabPosition="left">
                <TabPane className='all_tab' tab={<span><HomeOutlined />{title1}</span>} key="1">
                    <Card
                    style={{boxShadow:'none',borderRadius:'0px'}}
                    bordered={false}
                    >
                        <div className={styles.first_tab}>  
                            <div className='row'>
                                {/*<div className='col-md-4'>
                                    <img src='/images/about_us.png' />
                                </div>*/}
                                <div className=''>
                                    <h4>{head1}</h4>
                                    <p>{para1}</p>
                                    {/*<Button onClick={() => router.push('/contact-us')} size='middle' icon={<i class="las la-comment"></i>} className='btn_primary2'>Request a Quote</Button>*/}
                                </div>
                                {/* <div className={`col-md-4 ${styles.icon_cl} icon_cl`}>
                                    <h4>{head2}</h4>
                                    <li><CheckOutlined />{list1}</li>
                                    <li><CheckOutlined />{list2}</li>
                                    <li><CheckOutlined /> {list3} </li>
                                    <li><CheckOutlined />{list4} </li>
                                    <li><CheckOutlined />{list5} </li>
                                    <li><CheckOutlined />{list6} </li>
                                </div> */}
                            </div>
                        </div>
                    </Card>
                </TabPane>
                <TabPane tab={<span><UserOutlined />{title2}</span>} key="2">
                    <Card bordered={false} style={{boxShadow:'none',borderRadius:'0px'}}>
                    <div className={styles.first_tab}>
                        <div className='row'>
                            <div className='col-md-8 vision-box'>
                                <h4>{head3}</h4>
                                <p>{para3}</p>
                                <p dangerouslySetInnerHTML={{__html:para7}}></p>
                                <p  dangerouslySetInnerHTML={{__html:para8}}></p>
                                <p dangerouslySetInnerHTML={{__html:para9}}></p>
                                {/* <p>{para2}</p> */}
                                <h4>{head4}</h4>
                            </div>
                            <div className='col-md-4'>
                                    <img src='/images/vision.jpg' />
                                </div>
                            {/* <div className= {`col-md-4 ${styles.icon_cl} icon_cl`}>
                                <h4>{head5}</h4>
                                <li><CheckOutlined /> {list1}</li>
                                    <li><CheckOutlined />{list2}</li>
                                    <li><CheckOutlined />{list3}</li>
                                    <li><CheckOutlined />{list4}</li>
                                    <li><CheckOutlined />{list5}</li>
                                    <li><CheckOutlined />{list6}</li>
                            </div> */}
                            {/* <div className='col-md-4'>
                                <h4>{head3}</h4>
                                <p>{para3}</p>
                                </div> */}
                        </div>
                        </div>
                    </Card>
                </TabPane>
                <TabPane tab={<span><PicCenterOutlined />{title3}</span>} key="3">
                <Card bordered={false}
                style={{boxShadow:'none',borderRadius:'0px'}}
                    >
                        <div className={styles.first_tab}>
                            <div className='row'>
                                <div className='col-md-8'>
                                    <h4>{head7}</h4>
                                    <p>{para6}</p>
                                   {/* <Button onClick={() => router.push('/contact-us')} size='middle' icon={<i class="las la-comment"></i>} className='btn_primary2'>Request a Quote</Button>*/}
                                </div>
                                {/* <div className={`col-md-4 ${styles.icon_cl} icon_cl`}>
                                <h4>{head2}</h4>
                                <li><CheckOutlined /> {list1}</li>
                                    <li><CheckOutlined />{list2}</li>
                                    <li><CheckOutlined />{list3}</li>
                                    <li><CheckOutlined />{list4}</li>
                                    <li><CheckOutlined />{list5}</li>
                                    <li><CheckOutlined />{list6}</li>
                                </div> */}
                                    <div className='col-md-4'>
                                    <img src='/images/mission.jpg' />
                                </div>
                            </div>
                        </div>
                    </Card>
                </TabPane>
                <TabPane tab={<span><HistoryOutlined />{title4}</span>} key="4">
                <Card bordered={false}
                    style={{boxShadow:'none',borderRadius:'0px'}}
                    >
                        <div className={styles.first_tab}>
                            <div className='row'>
                                <div className=''>
                                    <h4>{head6}</h4>
                                    <p>{para4}</p>
                                  { /* <p>{para3}</p>*/}
                                  {/*<Button onClick={() => router.push('/contact-us')} size='middle' icon={<i class="las la-comment"></i>} className='btn_primary2'>Request a Quote</Button>*/}
                                </div>
                                {/* <div className='col-md-4'>
                                <p>{para5}</p>
                                <p>{para2}</p>
                                
                                </div> */}
                                    {/* <div className={`col-md-4 ${styles.icon_cl} icon_cl`}>
                                    <h4>{head7}</h4>
                                    <li><CheckOutlined /> {list1}</li>
                                    <li><CheckOutlined />{list2}</li>
                                    <li><CheckOutlined />{list3}</li>
                                    <li><CheckOutlined />{list4}</li>
                                    <li><CheckOutlined />{list5}</li>
                                    <li><CheckOutlined />{list6}</li>
                                </div> */}
                            </div>
                        </div>
                    </Card>
                </TabPane>
            </Tabs>
            
            </div>
           
        </>
    )
}



export default AboutTabComponent