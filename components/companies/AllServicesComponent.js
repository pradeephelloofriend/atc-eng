import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import { menuItem } from '../../util/menuItem';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectTabKey } from '../../redux/menu/menuSelector';
import { setTabKey } from '../../redux/menu/menuAction';
import RepairServicesComponent from './RepairServicesComponent';
import SteeringMarineComponent from './SteeringMarineComponent';
import HydraulicComponent from './HydraulicComponent';
import MarineTransmissionComponent from './MarineTransmissionComponent';
import WindlessServiceComponent from './WindlessServiceComponent';
import ValvesComponent from './ValvesComponent';
import PipelineComponent from './PipelineComponent';

const AllServicesComponent = ({ tabKey, catCode, setTabKey }) => {
  const [newData, setNewData] = React.useState();
  const[tabLayout,setTablLayout]=React.useState(null)

  useEffect(() => {
    const filterData = menuItem.find(x => x.menuId == catCode);
    const filteredChildMenu = filterData?.subMenu || [];
    setNewData(filteredChildMenu);

    function handleResize() {
      if (window.matchMedia("(min-width: 1400px)").matches) {
        setTablLayout("right")
       
        // Viewport is less or equal to 700 pixels wide
        //console.log("min-width: 1400px")
      } else if(window.matchMedia("(min-width: 1200px)").matches) {
        setTablLayout("right")
       
        // Viewport is greater than 700 pixels wide
        //console.log("min-width: 1200px")
      }else if(window.matchMedia("(min-width: 992px)").matches){
        setTablLayout("right")
        
        //console.log("min-width: 1200px")
      }else if(window.matchMedia("(min-width: 768px)").matches){
        setTablLayout("top")
        
        //console.log("min-width: 768px")
      }else if(window.matchMedia("(min-width: 576px)").matches){
        setTablLayout("top")
        
        //console.log("min-width: 768px")
      }else{
        setTablLayout("top")
        
        //console.log("min-width: 576px")
      }
    
    }
    handleResize()
    window.addEventListener('resize', handleResize)
  }, [catCode]);

  const extraData = (
    <div>
      <div className="head-block">
        <h4 className="w-title">All Services</h4>
      </div>
    </div>
  );

  const onChange = (tabKey) => {
    setTabKey(tabKey)
  }
  return (
    <div className="section-full content-inner-2 bg-light-white-5 solution-page wow fadeIn">
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <div className='tabs-d'>
            <Tabs className='tab-new'
                tabBarExtraContent={extraData}
                tabPosition={tabLayout}
                onChange={onChange}
                activeKey={tabKey}
              >
                {newData && newData.map((submenu, index) => {
                  const routeCode = submenu.companyName.split(" ");
                  const rPath = routeCode.join("-");
                  return (
                  <Tabs.TabPane key={rPath} tab={<a>{submenu.companyName}</a>}>
                        {submenu.companyName === 'Marine and Industrial Engine Repairs' && <RepairServicesComponent />}
                        {submenu.companyName === 'Marine Hydraulic Steering System' && <SteeringMarineComponent />}
                        {submenu.companyName === 'Hydraulic System' && <HydraulicComponent />}
                        {submenu.companyName === 'Marine Transmissions' && <MarineTransmissionComponent />}
                        {submenu.companyName === 'Windlass Servicing' && <WindlessServiceComponent />}
                        {submenu.companyName === 'Valves and Pumps' && <ValvesComponent />}
                        {submenu.companyName === 'Pipe Fabrication' && <PipelineComponent />}
                  </Tabs.TabPane>
                  )
                  })}
              </Tabs>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AllServicesComponent);
