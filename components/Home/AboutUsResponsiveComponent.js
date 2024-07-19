import React, { useState } from 'react';
import { Collapse, Card, Button } from 'antd';
import { HomeOutlined, UserOutlined, PicCenterOutlined, HistoryOutlined, CheckOutlined } from '@ant-design/icons';
import styles from '../../components/Home/aboutus/about.module.css'; 
import { useRouter } from 'next/router';


function AboutUsResponsiveComponent() {
	const router= useRouter();
    const [activeKey, setActiveKey] = useState(['1']); // State to manage active key

    const onChange = (key) => {
        setActiveKey(key); // Update active key state
        console.log(key);
    };

    const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;

    const items = [
        {
            key: '1',
            label: <span><HomeOutlined /><span className='new-s'>{'Who we are'}</span></span>,
            children: <Card
			>
				<div className={styles.first_tab}>
					<div className='row'>
						<div className='col-md-4'>
							<img src='/images/about_us.png' />
						</div>
						<div className='col-md-8'>
							<h4>Welcome to ATC Industries</h4>
							<p>ATC Industries, a dynamic partnership established in 1996 by the esteemed late Mr. A. T. Shah, has steadily grown to provide unparalleled service to our customers. With a strategic multi-location presence, we are dedicated to delivering exceptional solutions that meet diverse needs across various sectors.</p>
							<Button onClick={() => router.push('/contact-us')}>Request a Quote</Button>
						</div>
						{/* <div className={`col-md-4 ${styles.icon_cl} icon_cl`}>
							<h4>Our Services</h4>
							<li><CheckOutlined />Award-winning design</li>
							<li><CheckOutlined />Super Fast Customer support</li>
							<li><CheckOutlined /> Email Design </li>
							<li><CheckOutlined />Easy to Customize pages </li>
							<li><CheckOutlined />Starter Replacement </li>
							<li><CheckOutlined />Powerful Performance </li>
						</div> */}
					</div>
				</div>
			</Card>,
        },
        {
            key: '2',
            label: <span><UserOutlined /><span className='new-s'>Vision</span></span>,
            children:<Card>
			<div className={styles.first_tab}>
				<div className='row'>
					<div className='col-md-8'>
						{/* <h4>At Apurva Engineering, our vision is to be recognized as a global leader in providing innovative and sustainable solutions for the marine/offshore and industrial sectors. We aspire to set new standards of excellence in technical services and spare parts supply, driven by our commitment to quality, reliability, and customer satisfaction.</h4> */}
						<p>At ATC Industries, our vision is centered on becoming our customer's first choice by providing:</p>
						<p>
						<strong> Innovative Solutions:</strong> We strive to deliver creative and effective solutions tailored to our customer's specific needs and challenges.</p>
						<p><strong>Benchmark Supplier:</strong> We aim to set the standard as a benchmark supplier in our industry, known for reliability, quality, and customer satisfaction.</p>
						<p><strong>Establishing Value Addition Processes:</strong> We are committed to establishing value-added processes that enhance efficiency and deliver tangible benefits to our customers.</p>
						+91 7841069245
						{/* <p>Franklin’s extraordinary success in life and politics can be attributed to his perseverance to overcome his personal liabilities.</p> */}
						<h4>+91 7841069245</h4>
					</div>
					<div className='col-md-4'>
                                    <img src='/images/vision.jpg' />
                                </div>
					{/* <div className= {`col-md-4 ${styles.icon_cl} icon_cl`}>
						<h4>Our vision list</h4>
						<li><CheckOutlined />Award-winning design</li>
							<li><CheckOutlined />Super Fast Customer support</li>
							<li><CheckOutlined /> Email Design </li>
							<li><CheckOutlined />Easy to Customize pages </li>
							<li><CheckOutlined />Starter Replacement </li>
							<li><CheckOutlined />Powerful Performance </li>
					</div> */}
				</div>
				</div>
			</Card>,
        },
        {
            key: '3',  
            label: <span><PicCenterOutlined /><span className='new-s'>Our mission</span></span>,
            children: <Card
			>
				<div className={styles.first_tab}>
					<div className='row'>
						<div className='col-md-8'>
							<h4>Missions</h4>
							<p>Our mission is to empower our clients with superior technical expertise and unparalleled service, enabling them to enhance the efficiency, safety, and performance of their operations. We are dedicated to delivering innovative solutions tailored to meet the unique needs of each client, while upholding the highest standards of professionalism, integrity, and environmental responsibility. Through continuous improvement and investment in our people, processes, and technology, we strive to exceed expectations and create long-term value for our stakeholders.</p>
							<Button onClick={() => router.push('/contact-us')}>Request a Quote</Button>
						</div>
						{/* <div className={`col-md-4 ${styles.icon_cl} icon_cl`}>
						<h4>Our Services</h4>
						<li><CheckOutlined />Award-winning design</li>
							<li><CheckOutlined />Super Fast Customer support</li>
							<li><CheckOutlined /> Email Design </li>
							<li><CheckOutlined />Easy to Customize pages </li>
							<li><CheckOutlined />Starter Replacement </li>
							<li><CheckOutlined />Powerful Performance </li>
						</div> */}
							<div className='col-md-4'>
							<img src='/images/mission.jpg' />
						</div>
					</div>
				</div>
			</Card>,
        },
        {
            key: '4',
            label: <span><HistoryOutlined /><span className='new-s'>Our history</span></span>,
            children: <Card
			>
				<div className={styles.first_tab}>
					<div className='row'>
						<div className='col-md-8'>
							<h4>Our Journey with CommScope: 2006-07</h4>
							<p>In 2006-07, ATC Industries embarked on a transformative journey with Andrew Telecommunications, now part of CommScope. We specialized in the development and supply of thermoformed microwave antenna radomes, ranging from 4ft to 6ft diameters across various frequencies. </p>
							<p>Previously imported, these radomes were successfully localized in India, enhancing the supply chain with significant cost benefits and adding substantial value to our offerings. </p>
						</div>
						<div className='col-md-4'>
						{/*<p>Apurva Engineering registered as MSME dated 04th October 2017 and moving on fast-track at its milestones.</p>*/}
						{/* <p>Franklin’s extraordinary success in life and politics can be attributed to his perseverance to overcome his personal liabilities.</p> */}
						<Button onClick={() => router.push('/contact-us')}>Request a Quote</Button>
						</div>
							{/* <div className={`col-md-4 ${styles.icon_cl} icon_cl`}>
							<h4>Our Achievements</h4>
							<li><CheckOutlined />Award-winning design</li>
							<li><CheckOutlined />Super Fast Customer support</li>
							<li><CheckOutlined /> Email Design </li>
							<li><CheckOutlined />Easy to Customize pages </li>  
							<li><CheckOutlined />Starter Replacement </li>
							<li><CheckOutlined />Powerful Performance </li>
						</div> */}
					</div>
				</div>
			</Card>,
        },
    ];

    return (
		<div className='res-cl'>
        <Collapse accordion items={items} />
		</div>
    );
}

export default AboutUsResponsiveComponent;
