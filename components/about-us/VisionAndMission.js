import React from "react";
import AboutLeadershipComponent from "./AboutLeadershipComponent";
import MissionComponent from "./MissionComponent";
import styles from './abt.module.css'

const VisionAndMission = () => {
  return (
    
    <div className={` ${styles.newl}  `} >
    
        
      <div className="container " style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignContent:"center",gap:"30px",paddingTop:"30px",backgroundColor:"#f5f5f5"}}  >
     
      < AboutLeadershipComponent />
      
      <MissionComponent />
     
      </div>
      </div>
      
    
  )
}
export default VisionAndMission