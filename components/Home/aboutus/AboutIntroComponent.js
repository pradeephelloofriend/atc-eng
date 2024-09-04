import React from 'react'
import styles from './about.module.css';
import { Col, Container, Row } from 'react-bootstrap';
const AboutIntroComponent = () => {
  return (
    <section className={`${styles.ab_intro} section-full content-inner`}>
        <Container>
            <Row>
                <Col md={7}>
                    <div className={styles.ab_intro_left}>
                        <h1 style={{fontSize:"30px"}}>CUSTOMER FIRST is the policy we work at ATC INDUSTRIES</h1>
                        <div className=''>
                            <p>ATC Industries is involved in the Manufacture of  Engineering Polymer Components made as per the specifications of various O.E.M s of Home Appliances, Telecom equipment manufacturers, and the Automobile sector.
                            </p>
                        </div>
                        <div className='text-right'>
                            <a class="read-more" href="">Read More<i class="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                </Col>
                <Col md={5} className={styles.right_intro}>
                    <div className={styles.ab_intro_right}>
                        <h4>ATC Industries, a part of THE SHAH GROUP OF COMPANIES, founded by late Mr. A. T. Shah, is a partnership concern established since 1996.
                        </h4>
                        <div className=''>
                            <p>Since then it has expanded and serves its customers by giving the multi location advantage.

                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default AboutIntroComponent