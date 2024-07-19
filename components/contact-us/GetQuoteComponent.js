import React from 'react'

import Axios from 'axios';
import { Form,Radio,Select, Input, Button, Checkbox,Typography,message  } from 'antd';

const {Title,Text}=Typography
const { TextArea } = Input;

const GetQuoteComponent = () => {
    const [form] = Form.useForm();
    const [role,setRole]=React.useState('Printed Foil')
    function onChange(value) {
        //console.log(`selected-veichle rtype', ${value}`);
    }
    const onChangeV = (e) => {
        //console.log('radio checked', e.target.value);
        //setValue(e.target.value);
        setRole(e.target.value)
      };
    const onFinish =async (values) => {
        // console.log('Success:', values);
        //sendEmail()
        const string={
                from: "Inquiry@camsoft.co.in",
                to: "dabot3223@gmail.com",
                userName: values.name,
                email: values.email,
                number: values.phone,
                msg: 'Name:'+values.name+'<br/> Email:'+values.email+'<br/> Mobile:'+values.phone+'<br/>'+values.message
        }
        Axios.post('api/sendEmail',{data:string})
        .then(({data})=>{
            // console.log('maildata',data)
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
       

    //console.log('success:', values)
 
      };
    
      const onFinishFailed = (errorInfo) => {
        //console.log('Failed:', errorInfo);
      };
  return (
    <>
     <div className='quote_form shop-account'>
    
              <Form
                  form={form}
                  name="basic"
                  layout="vertical"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
              >
                  {/* <Form.Item */}
                      {/* name='driverType' */}
                      {/* rules={[{ required: true, message: "Please Select the Service Type " }]} */}
                  {/* > */}
                      {/* <Radio.Group className="mt-10"  onChange={onChangeV}> */}
                          {/* <Radio value="Printed Foil">Offshore Services</Radio> */}
                          {/* <Radio value="Printed Leaflets">Stevedoring</Radio> */}
                          {/* <Radio value="Audit">Marine and Engineering Services</Radio> */}
                          {/* <Radio value="Audit">Equipment and Machinery</Radio> */}
                          {/* <Radio value="Audit">Underwater Salvaging, Wreck Removal and Repairs</Radio> */}
                      {/* </Radio.Group> */}
                  {/* </Form.Item> */}
                  <Form.Item label="" style={{ marginBottom: 0 }}>
                      <Form.Item
                          name="name"
                          rules={[{ required: true }]}
                          style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                      >
                          <Input className='form-control' placeholder="Name*" />
                      </Form.Item>
                      <Form.Item
                          name="email"
                          rules={[{ required: true,type:'email', }]}
                          style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 0 0 16px' }}
                      >
                          <Input className='form-control' placeholder="Email*" />
                      </Form.Item>
                  </Form.Item>
                  <Form.Item
                      label=""
                      name="phone"
                      
                      rules={[
                          {
                              required: false,
                              message: 'Please enter valid Phone!',
                          },
                      ]}
                  >
                      <Input className='form-control' placeholder='Phone' />
                  </Form.Item>

                  <Form.Item
                      label=""
                      name="message"
                      rules={[
                          {
                              required: false,
                              message: 'Please input your password!',
                          },
                      ]}
                  >
                      <TextArea  rows={4} placeholder="Message" />
                  </Form.Item>
                 <br/> 
                 
                  
                   
                
                  <Form.Item className="text-center" >
                    
                      <Button  className='site-button  btnhover13' type="primary" htmlType="submit">
                      Submit Request
                      </Button>
                  </Form.Item>
              </Form>
          </div>
    </>
  )
}

export default GetQuoteComponent