import { Card } from 'antd'
import styles from './getInTouch.module.css'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { CheckOutlined } from '@ant-design/icons';

// Install Swiper modules
SwiperCore.use([Autoplay, Pagination]);
import {
    Button,
    message,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Mentions,
    Select,
    TreeSelect,
  } from 'antd';
import ClientsComponent from '../../clients/ClientsComponent';
import ClientListComponent from '../../clients/ClientListComponent';
import Axios from 'axios';
function ReviewComponent() {
  const [form] = Form.useForm();
  const onFinishFailed = (errorInfo) => {
    //console.log('Failed:', errorInfo);
  };

  const formItemLayout ='vertical'
  ? {
      labelCol: {
        span: 7,
      },
      wrapperCol: {
        span: 24,
      },
    }
  : null;
  const buttonItemLayout = 'vertical'
    ? {
        wrapperCol: {
          span: 40,
          offset: 0,
        },
      }
    : null;
    
  const onFinish =async (values) => {
    console.log('Success:', values);
    //sendEmail()
    const string={
            userName: values.name,
            email: values.email,
            number: values.phone,
            msg: 'Name:'+values.name+'<br/> Email:'+values.email+'<br/> Mobile:'+values.phone+'<br/>'+values.message
    }
    Axios.post('api/sendEmail',{data:string})
    .then(({data})=>{
        console.log('maildata',data)
            if(data=='1'){
                form.resetFields()
                message.success({
                    content: 'Your message Has been send successfully',
                    className: 'custom-class',
                    style: {
                      marginTop: '40vh',
                    },
                  });
            }else{
                message.error('Your message has not been send');
                message.success({
                    content: 'Your message has not been send',
                    className: 'custom-class',
                    style: {
                      marginTop: '40vh',
                    },
                  });
            }
    })

  }
  return (
    <div className="section-full content-inner bg-gray testi-area">
    <div className={`${styles.review_class} container`}>
      <div className='row'>
        <div className={'col-md-7  swip'}>
            <Card >
                <h2 style={{marginBottom:"-29px",fontSize:"25px"}}><b>Testimonials</b> {/*<span className={styles.head_class}>Review</span>*/}</h2>
                <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
           delay: 30000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}>
                 {/* <SwiperSlide>
                  <div className={styles.sw_cont}>
                    <h2> Filter Air Cleaner for Front Loading Clothes Dryer</h2>
                     <p>The filter air cleaner for front-loading clothes dryers is a game-changer for maintaining indoor air quality. I was tired of dust and lint circulating in my laundry room, so I installed this filter. It effectively traps lint and particles, preventing them from entering the dryer vent and circulating back into the air. The installation was simple—just snap it into place inside the dryer door. Now, my laundry area stays cleaner, and the dryer operates more efficiently. This filter air cleaner is a small investment with significant benefits for anyone with a front-loading dryer.</p>
                    <h6>Emily R.,<span className={styles.color_div}> Procurement Specialist</span></h6>
                  </div>
                  
                 </SwiperSlide> */}
                 
                 
                 <SwiperSlide>
                <div className={styles.testimonial_container} >
                  <div className={styles.testimonial_header}> Filter Air Cleaner for Front Loading Clothes Dryer</div>
                    <div className={styles.testimonial_content}>
                      <div className={styles.testimonial_text}>
                      <div className={styles.blockquote}>
                        <p>The filter air cleaner for front-loading clothes dryers is a game-changer for maintaining indoor air quality. I was tired of dust and lint circulating in my laundry room, so I installed this filter. It effectively traps lint and particles, preventing them from entering the dryer vent and circulating back into the air. The installation was simple just snap it into place inside the dryer door. Now, my laundry area stays cleaner, and the dryer operates more efficiently. This filter air cleaner is a small investment with significant benefits for anyone with a front-loading dryer.</p>
                       </div>
                        <h6 className={styles.testimonial_name}>Emily R.,<span className={styles.color_div}> Procurement Specialist</span></h6>
                    </div>
                  </div>
                </div>
                  </SwiperSlide>
                    <SwiperSlide>
                    <div className={styles.testimonial_container} >
                  <div className={styles.testimonial_header}> Precision Engineering Plastic Components for Dryers</div>
                  <div className={styles.testimonial_content}>
                      <div className={styles.testimonial_text}>
                        <div className={styles.blockquote}><p>
                  These precision-engineered plastic components for dryers exceeded my expectations. I needed to replace some worn parts in my dryer, and these components fit perfectly. The plastic is sturdy and well-crafted, ensuring durability and smooth operation. I appreciate the attention to detail in their design, which made assembly straightforward. These components have restored my dryer to like-new condition, making them an excellent choice for anyone needing reliable replacement parts.</p></div>
                    <h6 className={styles.testimonial_name}>John D.,<span className={styles.color_div}> Operations Director</span></h6></div>
                    </div>
                    </div>
                    </SwiperSlide>
                 <SwiperSlide>
                 <div className={styles.testimonial_container} >
                 <div className={styles.testimonial_header}> Vent Kit for Clothes Dryers</div>
                 <div className={styles.testimonial_content}>
                      <div className={styles.testimonial_text}>
                        <div className={styles.blockquote}>
                  <p>The vent kit for clothes dryers is a must-have accessory for anyone looking to improve ventilation efficiency. I installed this kit in minutes—it fit perfectly with my dryer and the exterior wall vent. The components are well-made and durable, ensuring a secure connection that prevents lint buildup and enhances dryer performance. Now, I have peace of mind knowing that my dryer operates safely with improved airflow. This vent kit is definitely worth the investment for its quality and ease of installation.</p></div>
                 <h6 className={styles.testimonial_name}><b>Sarah L.,</b><span className={styles.color_div}> Project Engineer</span></h6>
                 </div>
                 </div>
                 </div>
                 </SwiperSlide>
           </Swiper>
        <div className={styles.swip} >
          <ClientListComponent/>
           
                 </div>
            </Card>
        </div>
        <div className='col-md-5 get-class'>
        <Card>
            <h2 className='text-center'> Get in Touch</h2>
            <div className={styles.form_cl}>
        <Form
    {...formItemLayout}
    variant="filled"
        layout= 'vertical'
        onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
  >
    <Form.Item
     name="name"
      label="Username"
      className='n-lcass'
      rules={[
        {
          required: true,
          message: 'Name',
        },
      ]}
    >
      <Input className='form-control' placeholder="Name" />
    </Form.Item>
    <Form.Item
    className='n-lcass'
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Email',
        },
      ]}
    >
      <Input className='form-control' placeholder="Email"
      />
    </Form.Item>
    <Form.Item
    className='n-lcass'
      label="Phone"
      name="phone"
      rules={[
        {
          required: true,
          message: 'Phone',
        },
      ]}
    >
      <Input placeholder="Phone"
      />
    </Form.Item>

    <Form.Item
      label="Comment"
      name="message"
      className='comm-in'
      rules={[
        {
          required: true,
          message: 'Comment',
        },
      ]}
    >
      <Input.TextArea placeholder="Comment" />
    </Form.Item>
    <Form.Item {...buttonItemLayout}
    >
      <Button type="primary" htmlType="submit">
        Talk to our Team <CheckOutlined />
      </Button>
      <p className='pt-1'>* We do not spam</p>
    </Form.Item>
    </Form>
    </div>
        </Card>
        </div>

      </div>
    </div>
    </div>
  )
}

export default ReviewComponent
