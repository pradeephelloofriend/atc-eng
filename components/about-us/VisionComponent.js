import React from 'react'
import styles from './abt.module.css'
import { Card,Tabs } from 'antd'

const { TabPane } = Tabs;

const VisionComponent = () => {
  return (
    <div className={`${styles.dif_class} diff-class`}>
    <div className='container'>
        <div className='head-block-center text-center'>
              <h4 className="w-title">OUR JOURNEY WITH COMMSCOPE
              </h4>
              <p className='w-title1'>A skilled leader who excels in guiding teams</p>
            </div>
            <div >
            <Tabs tabPosition='left'  className='visionTabs'>
                
            <TabPane   tab="2006-07" key="1" >
                <div >
            <div className={styles.row} style={{padding:"0px"}}>
                <div className='col-md-6 text-center'>
                    <Card hoverable>
                        <h1 className='fs'>2006-07</h1>
                        <h3>Our Journey with CommScope: 2006-07
                        </h3>
                        <h6>
                        In 2006-07, ATC Industries embarked on a transformative journey with Andrew Telecommunications, now part of CommScope. We specialized in the development and supply of thermoformed microwave antenna radomes, ranging from 4ft to 6ft diameters across various frequencies</h6>

                        <h6>Previously imported, these radomes were successfully localized in India, enhancing the supply chain with significant cost benefits and adding substantial value to our offerings.</h6>
                    </Card>
                  
                </div>
                </div>
                </div>
                </TabPane>
                <TabPane tab="Year 2008" key="2">
                <div className='col-md-6 text-center'>
                    <Card hoverable>
                        <h1>Year 2008
                        </h1>
                        <h3>The Journey Continues: Year 2008
                        </h3>
                        <h6>In 2008, ATC Industries expanded its offerings with the development and supply of various plastic fasteners for radomes. Additionally, we began supplying a wide range of cable fastening products, further enhancing our commitment to delivering comprehensive solutions in the telecommunications sector.

</h6>

                    </Card>
                    </div>
                    </TabPane>
                
                <TabPane tab="Year 2016" key="3">
                <div className='col-md-6 text-center'>
                    <Card hoverable>
                        <h1>Year 2016
                        </h1>
                        <h3>The Journey Continues: Year 2016
                        </h3>
                        <h6>In 2008, ATC Industries expanded its offerings with the development and supply of various plastic fasteners for radomes. Additionally, we began supplying a wide range of cable fastening products, further enhancing our commitment to delivering comprehensive solutions in the telecommunications sector.

</h6> <h6> Our commitment to this project included the deployment of new machinery, skilled manpower, and comprehensive system enhancements to ensure seamless support and operational excellence.
</h6>
                    </Card>
                    </div>
                    </TabPane>
                
                <TabPane tab="Years 2017-18" key="4">
                <div className='col-md-6 text-center'>
                    <Card hoverable>
                        <h1> Years 2017-18

                        </h1>
                        <h3>The Journey Continues: Year 2016
                        </h3>
                        <h6>During 2017-18, ATC Industries strengthened its partnership with CommScope, achieving significant milestones. This period marked the development and initiation of supplies for 2ft and 3ft polycarbonate flute board radomes.
                        </h6><h6>This project exemplified our commitment to continuous improvement and value creation, consolidating various radome thicknesses into a single solution across all frequencies. This initiative not only delivered cost benefits but also streamlined production efficiency.
                        </h6>
                      
                      
                    </Card>
                    </div>
                    </TabPane>
                
                <TabPane tab="Years 2020-21" key="5">
                <div className='col-md-6 text-center'>
                    <Card hoverable>
                        <h1> Years 2020-21
                        </h1>
                        <h3>The Partnership Moves Forward: Years 2020-21
                        </h3>
                        <h6>In 2020-21, ATC Industries continued to advance its partnership with CommScope through active support of a localization project initiative. This collaborative effort saw Team ATC developing kit items, parts, packaging solutions, cable assemblies, corrugated tubes, and various other components for different business units within CommScope.

                        </h6><h6>Simultaneously, our expansion plans for Unit 2 were already in progress, allowing us to leverage all necessary infrastructure to facilitate and enhance this initiative.</h6>
                    </Card>
                    </div>
                    </TabPane>
                    
        </Tabs>
        </div>       
               


            </div>
      </div>
      
  )
}

export default VisionComponent