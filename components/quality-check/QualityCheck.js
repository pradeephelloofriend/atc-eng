import React from 'react'
import styles from '../products/product.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import ForCompaniesHeaderComponent from '../Home/forCompanies/ForCompaniesHeaderComponent';
import { useRouter } from 'next/router';

const QualityCheck = () => {
    const router = useRouter()
  return (
    <div className="section-full content-inner testi-area">
        <Container>
        <ForCompaniesHeaderComponent title='Quality Check' desc='Setting the Benchmark for Qaulity' />
            <div className={styles.prd_box}>
                <div className={styles.prdLeft_item}>
                    <Row>
                        <Col md={4}>
                            <div className={styles.prd_img}>
                                <img alt='machine' src='/images/qaulity/qaulity.jpg'/>
                            </div>
                        </Col>
                        <Col md={8}>
                            <div className={styles.prd_cont}>
                                <h4>Quality Assurance</h4>
                                {/* <p>With superior infrastructure ensuring top-notch quality and efficiency in every product we deliver.</p> */}
                                <div className={styles.prd_cont_ul}>
                                <ul>
                                        <li><b>Quality Assurance:</b> We follow strict norms in production and inspection to deliver defect-free products.</li>
                                        <li><b>Techniques:</b> Advanced methods like SPC, FMEA, and 5S ensure top-quality practices.</li>
                                        <li><b>Preventive Measures:</b> Horizontal deployment ensures consistent quality across product lines.</li>
                                        <li><b>OEM Collaboration:</b>Direct online links with OEMs maintain alignment with their standards.</li>
                                    </ul>
                                    {/* <div className='mch_btn mt-3'>
                                        <a class="read-more" onClick={() => router.push('/machines')}>Read More<i class="fa fa-arrow-right"></i>
                                    </div> */}
                                </div>
                                
                                
                            </div>
                        </Col>
                        
                    </Row>        
                </div>
                <div className={styles.prdLeft_item}>
                    <Row>
                        
                        <Col md={8}>
                            <div className={styles.prd_cont}>
                                <h4>Deflection Testing And Tensile Testing</h4>
                                {/* <p>Your one-stop shop for precision-engineered plastic components in PA, ABS, PP, and more. We specialize in injection molding, extrusion, blow molding, and thermoforming, delivering top-quality solutions for all your needs.</p> */}
                                <div className={styles.prd_cont_ul}>
                                <ul>
                                        <li><b>Purpose:</b> These tests evaluate the strength and flexibility of materials used in our products.</li>
                                        <li><b>Equipment:</b> Includes advanced machinery capable of measuring material deflection under load and determining tensile strength, ensuring products meet rigorous performance standards.</li>
                                        <li><b>Benefits:</b> Enables precise assessment of material properties to ensure durability and reliability in various applications.</li>
                                    </ul>
                                    {/* <div className='mch_btn mt-3'>
                                        <a class="read-more" onClick={() => router.push('/homeAppliances')}>Read More<i class="fa fa-arrow-right"></i>
                                    </div> */}
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={styles.prd_img}>
                                <img alt='machine' src='/images/qaulity/qaulity2.jpg'/>
                            </div>
                        </Col>
                    </Row>        
                </div>
                <div className={styles.prdLeft_item}>
                    <Row>
                        <Col md={4}>
                            <div className={styles.prd_img}>
                                <img alt='machine' src='/images/qaulity/qaulity3.jpg'/>
                            </div>
                        </Col>
                        <Col md={8}>
                            <div className={styles.prd_cont}>
                                <h4>Coating Thickness Equipment:</h4>
                                {/* <p>With superior infrastructure ensuring top-notch quality and efficiency in every product we deliver.</p> */}
                                <div className={styles.prd_cont_ul}>
                                <ul>
                                        <li><b>Purpose:</b> Measures the thickness of coatings applied to our products, ensuring uniformity and adherence to specifications.</li>
                                        <li><b>Equipment:</b> Utilizes specialized tools and gauges to accurately gauge coating thickness, critical for corrosion protection and aesthetic quality.</li>
                                        <li><b>Benefits:</b> Ensures consistent product quality and performance by verifying coating integrity and adherence.</li>
                                    </ul>
                                    {/* <div className='mch_btn mt-3'>
                                        <a class="read-more" onClick={() => router.push('/machines')}>Read More<i class="fa fa-arrow-right"></i>
                                    </div> */}
                                </div>
                                
                                
                            </div>
                        </Col>
                        
                    </Row>        
                </div>
                <div className={styles.prdLeft_item}>
                    <Row>
                        
                        <Col md={8}>
                            <div className={styles.prd_cont}>
                                <h4>Tensile Testing Machine:</h4>
                                {/* <p>Your one-stop shop for precision-engineered plastic components in PA, ABS, PP, and more. We specialize in injection molding, extrusion, blow molding, and thermoforming, delivering top-quality solutions for all your needs.</p> */}
                                <div className={styles.prd_cont_ul}>
                                <ul>
                                        <li><b>Purpose:</b> Determines the tensile strength and elongation properties of materials, crucial for assessing product durability and safety.</li>
                                        <li><b>Equipment:</b> Employs advanced testing machines capable of applying controlled tensile forces to samples and measuring their response.</li>
                                        <li><b>Benefits:</b> Provides essential data for material selection, quality control, and compliance with industry standards, ensuring reliable performance in diverse applications.</li>
                                    </ul>
                                    {/* <div className='mch_btn mt-3'>
                                        <a class="read-more" onClick={() => router.push('/homeAppliances')}>Read More<i class="fa fa-arrow-right"></i>
                                    </div> */}
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={styles.prd_img}>
                                <img alt='machine' src='/images/qaulity/qaulity4.jpg'/>
                            </div>
                        </Col>
                    </Row>        
                </div>
            </div>
        </Container>
        
    </div>
  )
}

export default QualityCheck