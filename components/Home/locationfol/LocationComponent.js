import React from 'react'
import LocationEmailComponent from './LocationEmailComponent';
import { InfoCircleOutlined, QuestionCircleFilled } from '@ant-design/icons'
import styles from './location.module.css'
import { Popover } from 'antd';
import ForCompaniesHeaderComponent from '../forCompanies/ForCompaniesHeaderComponent';
import { Col, Row } from 'react-bootstrap';

function LocationComponent() {
  const dirContent = (
    <div className='map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15387.833115413032!2d73.9307656!3d15.3787457!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb934ade25ccd%3A0xd824bf39bd5c56d4!2sATC%20INDUSTRIES!5e0!3m2!1sen!2sin!4v1721110166460!5m2!1sen!2sin" ></iframe>
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3848.1515287590887!2d73.98220817488755!3d15.313998185261314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb175e99eb8dd%3A0xa807b001c6f3beed!2sOur%20Lady%20of%20Snows%20Church%2C%20Raia!5e0!3m2!1sen!2sin!4v1712741506245!5m2!1sen!2sin"></iframe> */}
    </div>
  )
  const unit1 = (
    <div className='map'>
      <img src='/images/about-us/unit1.jpg' />
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15387.833115413032!2d73.9307656!3d15.3787457!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb934ade25ccd%3A0xd824bf39bd5c56d4!2sATC%20INDUSTRIES!5e0!3m2!1sen!2sin!4v1721110166460!5m2!1sen!2sin" ></iframe> */}
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.9437643787637!2d73.97728967488787!3d15.325290985251547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb107bc92e4eb%3A0xd6e6d0fe28b6fdd7!2sSolva%20Rd%2C%20Camorlim%2C%20Goa%20403718!5e0!3m2!1sen!2sin!4v1712741642472!5m2!1sen!2sin" ></iframe> */}
    </div>
  )
  const unit2 = (
    <div className='map'>
      <img src='/images/about-us/unit2.jpg' />
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15387.500905355588!2d73.85413525079002!3d15.383242352663903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb83b2d4bc95d%3A0xe8a864d8ba3af8ba!2sSancoale%20Industrial%20Estate%2C%20Zuarinagar%2C%20Sancoale%2C%20Goa%20403726!5e0!3m2!1sen!2sin!4v1712741770286!5m2!1sen!2sin" ></iframe> */}
    </div>
  )
  return (
    <section className={`${styles.ab_intro} section-full ab_intro content-inner`}>

      <div className={`container loc_class`} >
        <ForCompaniesHeaderComponent title='Our Group Locations' desc='Leading Global and Local Companies' />

        <div className={styles.loc_box}>
          <Row>
            <Col md={3}>
              <div className={styles.loc_box_left}>
                <div className=''>
                  <img src='/images/location/loc1.jpg' />
                </div>
                <div className={styles.loc_cont}>
                  <h4>Registered Office</h4>
                  <p>G/11 JIGISHA BLDG MARGAO GOA</p>
                </div>
              </div>
            </Col>
            <Col md={9}>
              <div className={styles.loc_box_right}>
                <Row>
                  <Col md={6} >
                    <div className={styles.loc_box_unit}>
                      <div className='head-block'>
                        <h4 className="w-title">UNIT 1
                          <Popover className='dirPop' content={dirContent} >< QuestionCircleFilled className='ic-le' /></Popover>
                        </h4>
                      </div>
                      <div className='ucont'>
                        <li><i className="ti-location-pin "></i>
                          <strong>Address
                            <Popover className='dirPop' content={unit1} ><InfoCircleOutlined className='ic-info' /></Popover>
                            <p>PLOT No S-67 VERNA INDUSTRIAL ESTATE VERNA- GOA</p>
                          </strong></li>

                        {/* <li><i className="ti-mobile"></i><strong>Phone</strong><p>9822153245 | 9923590507</p></li>
            </div>
            <div>
      <li><i className="ti-email"></i><strong>Email</strong><p>amar.raicar@apurvaengineering.com</p></li> */}
                      </div>
                    </div>
                  </Col>
                  <Col md={6} >
                    <div className={styles.loc_box_unit} style={{background:'#338e910f'}}>
                      <div className='head-block'>
                        <h4 className="w-title">UNIT 2
                          {/* <Popover className='dirPop' content={map2cont} >< QuestionCircleFilled  className='ic-le'/></Popover> */}
                        </h4>
                      </div>
                      <div className='ucont'>
                        <li><i className="ti-location-pin "></i>
                          <strong>Address
                            <Popover className='dirPop' content={unit2} ><InfoCircleOutlined className='ic-info' /></Popover>
                            <p>ASIA TRADE COMBINES PLOT No 0 11, VERNA INDLUSTRIAL ESTATE VERNA - GOA</p>
                          </strong></li>
                        {/* <li><i className="ti-mobile"></i><strong>Phone</strong><p>9822153245 | 9923590507</p></li>
            </div>
            <div>
      <li><i className="ti-email"></i><strong>Email</strong><p>samir.juwarkar@apurvaengineering.com</p></li> */}
                      </div>
                    </div>
                  </Col>
                  <Col md={6} >
                    <div className={styles.loc_box_unit} style={{background:'#338e910f'}}>
                      <div className='head-block'>
                        <h4 className="w-title">UNIT 3
                          {/* <Popover className='dirPop' content={map2cont} >< QuestionCircleFilled  className='ic-le'/></Popover> */}
                        </h4>
                      </div>
                      <div className='ucont'>
                        <li><i className="ti-location-pin "></i>
                          <strong>Address<p>ATC POLY INDUSTRIES C109,M.I.D.C SUPA PARNER, DIST:AHMEDNAGAR MAHARASHTRA</p>
                          </strong></li>
                        {/* <li><i className="ti-mobile"></i><strong>Phone</strong><p>9822153245 | 9923590507</p></li>
            </div>
            <div>
      <li><i className="ti-email"></i><strong>Email</strong><p>samir.juwarkar@apurvaengineering.com</p></li> */}
                      </div>
                    </div>
                  </Col>
                  <Col md={6} >
                    <div className={styles.loc_box_unit}>
                      <div className='head-block'>
                        <h4 className="w-title">UNIT 4
                          {/* <Popover className='dirPop' content={map2cont} >< QuestionCircleFilled  className='ic-le'/></Popover> */}
                        </h4>
                      </div>
                      <div className='ucont'>
                        <li><i className="ti-location-pin "></i>
                          <strong>Address<p>ATC POLYLEX INDUSTRIES D5,6 G.I.D.C KUNDAIM INDL.ESTAE KUNDAIM - GOA</p>
                          </strong></li>
                        {/* <li><i className="ti-mobile"></i><strong>Phone</strong><p>9822153245 | 9923590507</p></li>
            </div>
            <div>
      <li><i className="ti-email"></i><strong>Email</strong><p>samir.juwarkar@apurvaengineering.com</p></li> */}
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>



      </div>
    </section>

  )
}

export default LocationComponent
