import React from 'react';
import { Tabs } from 'antd';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectTabKey } from '../../redux/menu/menuSelector';
import { setTabKey } from '../../redux/menu/menuAction';
import ServicesAllComponent from './ServicesAllComponent';


const ServicesMainComponent = () => {

  const extraData = (
    <div>
      <div className="head-block">
        <h4 className="w-title">All Services</h4>
      </div>
    </div>
  );

  return (
    <div className="section-full content-inner-2 bg-light-white-5 solution-page wow fadeIn">
      <div className="container">
        <div className="row">
          <div className="col-12 nw-tab">
              <Tabs className='tab-new'
                tabBarExtraContent={extraData}
                tabPosition="right"
              >
                <Tabs.TabPane tab={<a>Lorem Ipsum</a>} >
                    <ServicesAllComponent />
                </Tabs.TabPane>
                <Tabs.TabPane tab={<a>New Data</a>} >
                    {/* <ServicesAllComponent /> */}
                </Tabs.TabPane>
                <Tabs.TabPane tab={<a>Rest Data</a>} >
                    {/* <ServicesAllComponent /> */}
                </Tabs.TabPane>
              

              </Tabs>
          
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  tabKey: selectTabKey,
});

const mapDispatchToProps = (dispatch) => ({
  setTabKey: (data) => dispatch(setTabKey(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServicesMainComponent)

