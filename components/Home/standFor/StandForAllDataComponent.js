import React from 'react';
import { Card } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import styles from './standFor.module.css'

function StandForAllDataComponent({title1, decs1, title2, desc2, title3, desc3}) {
    const [hoveredIndex, setHoveredIndex] = React.useState(null);

    const handleCardHover = (index) => {
      setHoveredIndex(index);
    };
  
    const handleCardLeave = () => {
      setHoveredIndex(null);
    };
  return (
    <div>
      <div className='standforcard'>
                    <div className='row'>
                    <div className='col-md-4 '>
                        <Card className={`standfor-card ${hoveredIndex === 0 ? 'hovered' : ''}`}
                onMouseEnter={() => handleCardHover(0)}
                onMouseLeave={handleCardLeave}>
                        <img src="/images/standfor/staff.png" alt="Service Commitment Image" />
                            <h2>{title1}</h2>
                            <div className='icon-class'></div>
                            <ArrowRightOutlined className='standfor-icon' />
                            <div className='hover-content'>
                  <p>{decs1}</p>
                </div>
                        </Card>
                        </div>
                        <div className='col-md-4 '>
                    <Card className={`standfor-card ${hoveredIndex === 1 ? 'hovered' : ''}`}
                onMouseEnter={() => handleCardHover(1)}
                onMouseLeave={handleCardLeave}>
                    <img src="/images/standfor/service1.jpg" alt="Service Commitment Image" />
                            <h2 className='text-white'>{title2}</h2>
                            <div className='icon-class'></div>
                            <ArrowRightOutlined className='standfor-icon' />
                            <div className='hover-content'>
                  <p>{desc2}</p>
                </div>
                        </Card>
                        </div>
                        <div className='col-md-4'>
                        <Card className={`standfor-card ${hoveredIndex === 2 ? 'hovered' : ''}`}
                onMouseEnter={() => handleCardHover(2)}
                onMouseLeave={handleCardLeave}>
                        <img src="/images/standfor/stock.png" alt="Service Commitment Image" />
                            <h2>{title3}</h2>
                            <div className='icon-class'></div>
                            <ArrowRightOutlined className='standfor-icon' />
                            <div className='hover-content'>
                  <p>{desc3}</p>
                </div>
                        </Card>
                        </div>
                        </div>
                    </div>
    </div>
  )
}

export default StandForAllDataComponent
