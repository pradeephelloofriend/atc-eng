import React, { useEffect, useState } from 'react'
import ReactECharts from 'echarts-for-react';
import { Container } from 'react-bootstrap';
import { Table, Tabs } from 'antd';
import { graphData, reportMenu } from './data';
import { generateChartOptions } from './graphConfig';
const { TabPane } = Tabs
import styles from './reports.module.css'


const ReportComponent = () => {
    const [tabKey, setTabKey] = useState(0)
    const [width, setWidth] = useState(0)
  useEffect(() => {
    function handleResize() {
      setWidth(parseInt(window.innerWidth))
    }
    window.addEventListener("resize", handleResize)
    
    handleResize()
    
    return () => { 
      window.removeEventListener("resize", handleResize)
    }
  }, [setWidth])

  const generateColumns = (data) => {
    const sample = data.table[0]; // Assuming all rows have the same structure
    return Object.keys(sample).map(key => ({
        title: key.charAt(0).toUpperCase() + key.slice(1),
        dataIndex: key,
        key,
    }));
};
const transposeData = (data) => {
    console.log(data)
    const transposedRows = Object.keys(data[0]).map((key) => ({
        key,
        field: key.charAt(0).toUpperCase() + key.slice(1),
        ...data.reduce((acc, row, index) => {
            acc[`value${index}`] = row[key];
            return acc;
        }, {}),
    }));
    
    return transposedRows;
};

const generateTransposedColumns = (data) => {
    const columnNames = data.map((_, index) => `Value ${index + 1}`);
    console.log(columnNames,data)
 
    const columns = [
        {
            title: 'Field', 
            dataIndex: 'field',
            key: 'field',
        },
        ...columnNames.map((name, index) => ({
            title: name,
            dataIndex: `value${index}`,
            key: `value${index}`,
        })),
    ];

    return columns;
};

  return (
    <section className='py-5 px-3'>
        
        <Container>
            {/* <Tabs activeKey={tabKey} tabPosition={width<900?'top':'left'}>
            {
                reportMenu.map((itm,index)=>
                    <TabPane tab={itm} key={index}>

                    </TabPane>
                )
            }
            </Tabs> */}
            {reportMenu.map((itm) => {
                const chartData = graphData.find((data) => data.id === itm.id);
                
                const transposedData = transposeData(chartData.table);
                const transposedColumns = generateTransposedColumns(chartData.table);

                return (
                    <div key={itm.id} className='py-5'>
                        <h2 className={styles.heading} style={{fontWeight:"bold"}}>{itm.title}</h2>

                        {
                            (itm.id==0 || itm.id==5) &&
                            <Table
                                columns={transposedColumns}
                                dataSource={transposedData}
                                pagination={false} // Disable pagination to show all rows
                                bordered
                                style={{ marginBottom: '20px' }}
                                scroll={{ x: 'max-content' }}
                                showHeader={false}
                            />
                        }

                        {/* ECharts Graph */}
                        <div style={{ height: 400, width: '100%' }}>
                            <ReactECharts
                                option={generateChartOptions(chartData)}
                                style={{ height: 400, width: '100%' }}
                                opts={{ renderer: 'svg' }}
                            />
                        </div>
                    </div>
                );
            })}
            
        </Container>
    </section>
  )
}

export default ReportComponent