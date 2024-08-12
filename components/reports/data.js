export const reportMenu = [
    {title:'Growth Partnership With Commscope',id:0},
    {title:'PPM levels at Commscope',id:1},
    {title:'Internal PPM levels',id:2},
    {title:'Customer Complaints',id:3},
    {title:'Continuous monitoring of production',id:4},
    {title:'Monitoring of delivery performance',id:5}
]

export const graphData = [
    {
        id:0,
        table:[
            {
                year:'2020',
                sales:140844,
            },
            {
                year:'2021',
                sales:351734,
            },
            {
                year:'2022',
                sales:1134919,
            },
    
        ],
        note:"THERE HAS BEEN SIGNIFICANT GROWTH IN OUR BUSINESS WITH COMMSCOPE AND WE VALUE THIS PARTNERSHIP.",
        unit:'USD',
        graph:'line',
    },
    {
        id:1,
        table:[
            {
                month:'Nov-22',
                level:0,
            },
            {
                month:'Dec-22',
                level:67,
            },
            {
                month:'Jan-23',
                level:0,
            },
    
        ],
        note:"TARGET IS < 1000 PPM",
        unit:'PPM',
        graph:'bar',
    
    },
    {
        id:2,
        table:[
            {
                month:'Nov-22',
                level:473,
            },
            {
                month:'Dec-22',
                level:428,
            },
            {
                month:'Jan-23',
                level:488,
            },
    
        ],
        note:null,
        unit:'PPM',
        graph:'bar',
    
    },
    {
        id:3,
        table:[
            {
                month:'Nov-22',
                level:0,
            },
            {
                month:'Dec-22',
                level:1,
            },
            {
                month:'Jan-23',
                level:0,
            },
    
        ],
        note:"Target = 0",
        graph:'bar',    
    },
    {
        id:4,
        table:[
            {
                month:'Nov-22',
                level:2212900,
            },
            {
                month:'Dec-22',
                sales:2312850,
            },
            {
                month:'Jan-23',
                sales:210800,
            },
    
        ],
        note:"Monthwise Production",
        graph:'bar',
    },
    { 
        id:5,
        table:[
            {
                month:'Jan-22',
                plan:1196329,
                Delivery:1196326,
            },
            {
                month:'Feb-22',
                plan:1515080,
                Delivery:1515079,
            },
            {
                month:'Mar-22',
                plan:105800,
                Delivery:1058015,
            },
            {
                month:'Apr-22',
                plan:3035400,
                Delivery:3035410,
            },
            {
                month:'May-22',
                plan:1716000,
                Delivery:1716755,
            },
            {
                month:'Jun-22',
                plan:3083000,
                Delivery:3083609,
            },
            {
                month:'Jul-22',
                plan:4930000,
                Delivery:4943936,
            },
            {
                month:'Aug-22',
                plan:2776000,
                Delivery:2775968,
            },
            {
                month:'Sept-22',
                plan:2825000,
                Delivery:2826667,
            },
            {
                month:'Oct-22',
                plan:3055000,
                Delivery:3055870,
            },
            {
                month:'Nov-22',
                plan:3545800,
                Delivery:3545815,
            },
            {
                month:'Dec-22',
                plan:2890000,
                Delivery:2880454,
            },
    
        ],
        note:null,
        unit:'PPM',
        graph:'clustered bar chart', 
    
    }
]