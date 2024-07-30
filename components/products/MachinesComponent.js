import React from 'react'
import styles from './product.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import ForCompaniesHeaderComponent from '../Home/forCompanies/ForCompaniesHeaderComponent';
const MachinesComponent = () => {
  return (
    <div className="section-full content-inner testi-area">
        <Container>
        <ForCompaniesHeaderComponent title='Wide Range Of Products' desc='Leading Global and Local Companies' />
        <div className={styles.prd_box}>
            <div className={styles.prdLeft_item}>
                <Row>
                    <Col md={4}>
                        <div className={styles.prd_img}>
                            <img alt='machine' src='/images/machines/mchBg.jpg'/>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className={styles.prd_cont}>
                            <h4>Machines</h4>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                            <div className={styles.prd_cont_ul}>
                               <ul>
                                    <li><a onClick={() => router.push('/about-us')}>EXTRUSION AND CORRUGATION LINES:</a></li>
                                    <li><a onClick={() => router.push('/about-us')}>THERMOFORMING MACHINES UPTO 2.4M X 2.4M BENCH SIZE: </a></li>
                                    <li><a onClick={() => router.push('/about-us')}>CNC FABRIC AND SHEET CUTTING MACHINE:</a></li>
                                    <li><a onClick={() => router.push('/about-us')}>HIGH FREQUENCY WELDING MACHINE:</a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    
                </Row>        
            </div>
            <div className={styles.prdLeft_item}>
                <Row>
                    
                    <Col md={8}>
                        <div className={styles.prd_cont}>
                            <h4>HOME APPLIANCES</h4>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                            <div className={styles.prd_cont_ul}>
                               <ul>
                                    <li><a onClick={() => router.push('/about-us')}>WASHING MACHINE: WATER INLET HOSES</a></li>
                                    <li><a onClick={() => router.push('/about-us')}>WASHING MACHINE: WATER EXHAUST HOSES </a></li>
                                    <li><a onClick={() => router.push('/about-us')}>REFRIGERATOR: DRAIN HOSES:</a></li>
                                    <li><a onClick={() => router.push('/about-us')}>VARIOUS EXTRUDED AND FABRICATED PROFILES:</a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={styles.prd_img}>
                            <img alt='machine' src='/images/machines/wm.jpg'/>
                        </div>
                    </Col>
                </Row>        
            </div>
            <div className={styles.prdLeft_item}>
                <Row>
                    <Col md={4}>
                        <div className={styles.prd_img}>
                            <img alt='machine' src='/images/machines/tm.jpg'/>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className={styles.prd_cont}>
                            <h4>TELECOM SECTOR</h4>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                            <div className={styles.prd_cont_ul}>
                               <ul>
                                    <li><a onClick={() => router.push('/about-us')}>4FT FABRIC RADOME FOR MICROWAVE ANTENNAS</a></li>
                                    <li><a onClick={() => router.push('/about-us')}>Thermoformed Radomes</a></li>
                                    <li><a onClick={() => router.push('/about-us')}>THERMOFORMED EPS PALLETS:</a></li>
                                    <li><a onClick={() => router.push('/about-us')}>RADOMES FOR TELECOM SECTOR</a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    
                </Row>        
            </div>
            
        </div>
        </Container>
    </div>
  )
}

export default MachinesComponent