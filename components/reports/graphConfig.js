import * as d3 from 'd3-scale-chromatic';

// export const generateChartOptions = (data) => {
//     let options = {};

//     // Define common grid options
//     const gridOptions = {
//         left: '3%',
//         right: '4%',
//         bottom: '3%',
//         containLabel: true,
//     };

//     // Define colors for each chart
//     const colors = ['#5470C6', '#91CC75', '#EE6666', '#73C0DE', '#FAC858', '#3BA272'];

//     switch (data.graph) {
//         case 'line':
//             options = {
//                 color: colors,
//                 grid: gridOptions,
//                 tooltip: {
//                     trigger: 'axis',
//                 },
//                 xAxis: {
//                     type: 'category',
//                     boundaryGap: false,
//                     data: data.table.map(item => item.year),
//                 },
//                 yAxis: {
//                     type: 'value',
//                     axisLine: {
//                         show: true,
//                     },
//                     axisTick: {
//                         show: true,
//                     },
//                     splitLine: {
//                         show: true,
//                     },
//                 },
//                 series: [
//                     {
//                         name: 'Sales',
//                         type: 'line',
//                         data: data.table.map(item => item.sales),
//                     },
//                 ],
//             };
//             break;

//         case 'bar':
//             options = {
//                 color: colors,
//                 grid: gridOptions,
//                 tooltip: {
//                     trigger: 'axis',
//                 },
//                 xAxis: {
//                     type: 'category',
//                     data: data.table.map(item => item.month || item.year),
//                 },
//                 yAxis: {
//                     type: 'value',
//                     axisLine: {
//                         show: true,
//                     },
//                     axisTick: {
//                         show: true,
//                     },
//                     splitLine: {
//                         show: true,
//                     },
//                     minInterval: 5, 
//                 },
//                 series: [
//                     {
//                         name: 'Level',
//                         type: 'bar',
//                         data: data.table.map(item => item.level || item.sales),
//                     },
//                 ],
//             };
//             break;

//         case 'clustered bar chart':
//             options = {
//                 color: colors,
//                 grid: gridOptions,
//                 tooltip: {
//                     trigger: 'axis',
//                 },
//                 xAxis: {
//                     type: 'category',
//                     data: data.table.map(item => item.month || item.year),
//                 },
//                 yAxis: {
//                     type: 'value',
//                     axisLine: {
//                         show: true,
//                     },
//                     axisTick: {
//                         show: true,
//                     },
//                     splitLine: {
//                         show: true,
//                     },
//                     minInterval: 100, // Adjust this as necessary for extra levels
//                 },
//                 series: [
//                     {
//                         name: 'Plan',
//                         type: 'bar',
//                         data: data.table.map(item => item.plan),
//                         stack: 'Total',
//                     },
//                     {
//                         name: 'Delivery',
//                         type: 'bar',
//                         data: data.table.map(item => item.Delivery),
//                         stack: 'Total',
//                     },
//                 ],
//             };
//             break;

//         default:
//             options = {};
//             break;
//     }

//     return options;
// };


export const getColorPalette  = (length) => {
    const palette = d3.schemeCategory10;
    
    return Array.from({ length }, (_, i) => palette[i % palette.length]);
  };

export const generateChartOptions = (data) => {
    let options = {};

    var colors = getColorPalette(data.table.length); 
    // console.log(colors,data.table.length)

    const gridOptions = {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    };

    switch (data.graph) {
        case 'line':
            options = {
                color: colors,
                grid: gridOptions,
                tooltip: {
                    trigger: 'axis',
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: data.table.map(item => item.year),
                },
                yAxis: {
                    type: 'value',
                    axisLine: {
                        show: true,
                    },
                    axisTick: {
                        show: true,
                    },
                    splitLine: {
                        show: true,
                    },
                },
                series: [
                    {
                        name: 'Sales',
                        type: 'line',
                        data: data.table.map(item => item.sales),
                    },
                ],
            };
            break;

        case 'bar':
            options = {
                color: colors,
                grid: gridOptions,
                tooltip: {
                    trigger: 'axis',
                },
                xAxis: {
                    type: 'category',
                    data: data.table.map(item => item.month || item.year),
                },
                yAxis: {
                    type: 'value',
                    axisLine: {
                        show: true,
                    },
                    axisTick: {
                        show: true,
                    },
                    splitLine: {
                        show: true,
                    },
                    minInterval: 10, 
                },
                series: [
                    {
                        name: 'Level',
                        type: 'bar',
                        data: data.table.map((item,index) =>{
                            if (item.level) {
                                return {
                                    value:item.level,
                                    itemStyle:{
                                        color:colors[index]
                                    }
                                }
                            }else{
                                return{
                                    value:item.sales,
                                    itemStyle:{
                                        color:colors[index]
                                    }
                                }
                            }
                        }),
                    },
                ],
            };
            break;

        case 'clustered bar chart':
            colors = getColorPalette(2);
            options = {
                color: colors,
                title: {
                    text: 'Chart Title',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: ['Plan', 'Delivery'],
                    bottom: 0,
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '10%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: data.table.map(item => item.month || item.year),
                    axisTick: {
                        alignWithLabel: true
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLine: {
                        show: true,
                    },
                    axisTick: {
                        show: true,
                    },
                    splitLine: {
                        show: true,
                    },
                    minInterval: 100, 
                },
                series: [
                    {
                        name: 'Plan',
                        type: 'bar',
                        barWidth: '30%',
                        data: data.table.map(item => item.plan),
                    },
                    {
                        name: 'Delivery',
                        type: 'bar',
                        barWidth: '30%',
                        data: data.table.map(item => item.Delivery),
                    }
                ]
            };
            break;

        default:
            options = {};
            break;
    }

    return options;
};