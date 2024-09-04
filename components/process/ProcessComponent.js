
import React from 'react'
import styles from './process.module.css';
import { Col, Container, Row } from 'react-bootstrap';

const ProcessComponent = () => {
  return (
    <section className={`${styles.ab_intro} section-full content-inner`}>
        <Container>
            <div className={styles.pr_heading}>
                <h1>Plastic Processing Capabilities</h1>
            </div>
            <div className={styles.pr_box}>
                <Row>
                    <Col md={7} sm={12}>
                        <Row>
                            <Col md={4} sm={6} >
                                <div className={styles.pr_item_box}>
                                    <div className={styles.item_top}>
                                        <h4>Injection Molding </h4>
                                    </div>
                                    <div className={styles.item_btm}>
                                        <h6>100MT/ANNUM</h6>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} sm={6}>
                                <div className={styles.pr_item_box}>
                                    <div className={styles.item_top}>
                                        <h4>Extrusion Of Profiles And Sheets</h4>
                                    </div>
                                    <div className={styles.item_btm}>
                                        <h6>100MT/ANNUM</h6>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} sm={6}>
                                <div className={styles.pr_item_box}>
                                    <div className={styles.item_top}>
                                        <h4>Blow Molding   </h4>
                                    </div>
                                    <div className={styles.item_btm}>
                                        <h6>80MT/ANNUM</h6>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={5}>
                        <Row>
                            <Col md={6} sm={6}>
                                <div className={styles.pr_item_box}>
                                    <div className={styles.item_top}>
                                        <h4>Thermoforming/vaccum Form </h4>
                                    </div>
                                    <div className={styles.item_btm}>
                                        <h6>1200MT/ANNUM</h6>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} sm={6}>
                                <div className={styles.pr_item_box}>
                                    <div className={styles.item_top}>
                                        <h4>Cutting And High Frequency Plastic Welding 
                                        </h4>
                                    </div>
                                    <div className={styles.item_btm}>
                                        <h6>100MT/ANNUM</h6>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Container>
    </section>
  )
}

export default ProcessComponent