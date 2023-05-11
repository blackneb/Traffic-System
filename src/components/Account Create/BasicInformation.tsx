import React, {useState} from 'react'
import { Button, Form, Input, Radio, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { add_registraion_basic_information } from '../../redux/Actions';

const BasicInformation = ({next,setCreateAccountReterive}:any) => {
  const registrationBasicInformation = useSelector((state:any) => state.registrationBasicInformation);
  const dispatch = useDispatch();
  const onFinish = (values: any) => {
    console.log('Success:', values);
    dispatch(add_registraion_basic_information(values));
    next();
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='flex justify-center my-4 '>
      <Form
      name="basicInformation"
      initialValues={registrationBasicInformation}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      labelCol={{ flex: '150px', span: 30 }}
      labelAlign="left"
      labelWrap
      colon={false}
      >
        <div className='flex flex-col h-[32rem]'>
        <Form.Item
            label="First Name"
            name="firstName"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="E-mail"
            name="email"
            rules={[{ required: true, message: 'Please Enter your E-mail!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="User Name"
            name="username"
            rules={[{ required: true, message: 'Please Enter your User Name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="Phone"
            rules={[{pattern: /^[\+]?[0-9]{3}[-\s\.]?[0-9]{9}$/,message: 'Please enter a valid Phone Number'},{ required: true, message: 'Please Enter Your Phone Number!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please Enter your Password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmpassword"
            rules={[{ required: true, message: 'Please confirm your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item 
            label="Profile Image" 
            name="profileImage"
            rules={[{ required: true, message: 'Please input your Profile Image!' }]}>
            <Upload beforeUpload={(file:any) =>{
              return new Promise((resolve:any,reject:any) => {
                if(file.size > 2){
                  reject("File size exceed");
                }
                else{
                  resolve("Success");
                }
              })
            }} >
              <div className=''>
                <PlusOutlined/>
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>

        </div>
        <div className='flex flex-row justify-center'>
          <Button style={{ margin: '0 8px' }} type="default" htmlType="submit">
            Next
          </Button>
          <Button style={{ margin: '0 8px' }} onClick={() => { setCreateAccountReterive(false) }}>
            Back to Login
          </Button>
        </div>
      
    
    </Form>
    </div>
  )
}

export default BasicInformation
