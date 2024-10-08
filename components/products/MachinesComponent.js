import React from 'react'
import styles from './product.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import ForCompaniesHeaderComponent from '../Home/forCompanies/ForCompaniesHeaderComponent';
import { useRouter } from 'next/router';
const MachinesComponent = () => {
    const router = useRouter()
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
                    <Col md={8} className='mt-10'>
                        <div className={styles.prd_cont}>
                            <h4>Machines</h4>
                            <p>With superior infrastructure ensuring top-notch quality and efficiency in every product we deliver.</p>
                            <div className={styles.prd_cont_ul}>
                               <ul>
                                    <li><a onClick={() => router.push('/machines')}>EXTRUSION AND CORRUGATION LINES:</a></li>
                                    <li><a onClick={() => router.push('/machines')}>THERMOFORMING MACHINES UPTO 2.4M X 2.4M BENCH SIZE </a></li>
                                    <li><a onClick={() => router.push('/machines')}>CNC FABRIC AND SHEET CUTTING MACHINE</a></li>
                                    <li><a onClick={() => router.push('/machines')}>HIGH FREQUENCY WELDING MACHINE</a></li>
                                </ul>
                                <div className='mch_btn mt-3'>
                                    <a class="read-more" onClick={() => router.push('/machines')}>Read More<i class="fa fa-arrow-right"></i></a>
                                </div>
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
                            <p>Your one-stop shop for precision-engineered plastic components in PA, ABS, PP, and more. We specialize in injection molding, extrusion, blow molding, and thermoforming, delivering top-quality solutions for all your needs.</p>
                            <div className={styles.prd_cont_ul}>
                               <ul>
                                    <li><a onClick={() => router.push('/homeAppliances')}>WASHING MACHINE: WATER INLET HOSES</a></li>
                                    <li><a onClick={() => router.push('/homeAppliances')}>WASHING MACHINE: WATER EXHAUST HOSES </a></li>
                                    <li><a onClick={() => router.push('/homeAppliances')}>REFRIGERATOR: DRAIN HOSES</a></li>
                                    <li><a onClick={() => router.push('/homeAppliances')}>VARIOUS EXTRUDED AND FABRICATED PROFILES</a></li>
                                </ul>
                                <div className='mch_btn mt-3'>
                                    <a class="read-more" onClick={() => router.push('/homeAppliances')}>Read More<i class="fa fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className='mt-10'>
                        <div className={styles.prd_img}>
                            <img alt='machine' src='/images/products/home2-parent.png'/>
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
                    <Col md={8}  className='mt-10'>
                        <div className={styles.prd_cont}>
                            <h4>TELECOM SECTOR</h4>
                            <p>Empowering connectivity with innovative telecom solutions, including advanced radomes and EPS pallets for seamless communication infrastructure.</p>
                            <div className={styles.prd_cont_ul}>
                               <ul>
                                    <li><a onClick={() => router.push('/telecomSector')}>4FT FABRIC RADOME FOR MICROWAVE ANTENNAS</a></li>
                                    <li><a onClick={() => router.push('/telecomSector')}>Thermoformed Radomes</a></li>
                                    <li><a onClick={() => router.push('/telecomSector')}>THERMOFORMED EPS PALLETS</a></li>
                                    <li><a onClick={() => router.push('/telecomSector')}>RADOMES FOR TELECOM SECTOR</a></li>
                                </ul>
                                <div className='mch_btn mt-3'>
                                    <a class="read-more" onClick={() => router.push('/telecomSector')}>Read More<i class="fa fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    
                </Row>        
            </div>
            <div className={styles.prdLeft_item}>
                <Row>
                    
                    <Col md={8}>
                        <div className={styles.prd_cont}>
                            <h4>PLASTIC FASTENERS</h4>
                            <p>High-quality plastic fasteners designed for durability and versatile applications across industries.</p>
                            <div className={styles.prd_cont_ul}>
                               <ul>
                                    <li><a onClick={() => router.push('/plasticFastners')}>Cable Fasteners</a></li>
                                    <li><a onClick={() => router.push('/plasticFastners')}>Redomes </a></li>
                                </ul>
                                <div className='mch_btn mt-3'>
                                    <a class="read-more" onClick={() => router.push('/plasticFastners')}>Read More<i class="fa fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}  className='mt-10'>
                        <div className={styles.prd_img}>
                            <img alt='machine' src='/images/products/cable3.png'/>
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