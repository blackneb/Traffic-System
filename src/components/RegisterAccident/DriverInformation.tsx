import React, { useState } from 'react'
import { Button, Checkbox, Form, Input, Upload, DatePicker, TimePicker} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { add_driver_information } from '../../redux/Actions';


const DriverInformation = ({next,prev}:any) => {
    const dispatch = useDispatch();
    const driverInformation = useSelector((state:any) => state.driverInformation);
  
    const onFinish = async (values: any) => {
        console.log('Success:', values);
        dispatch(add_driver_information(values));
        next();
      };
      
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <div className='flex justify-center my-4'>
       <Form
        name="basic"
        initialValues={driverInformation}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        labelCol={{ flex: '150px', span: 30 }}
        labelAlign="left"
        labelWrap
        colon={false}
      >
        <div className='flex flex-col'>
          <Form.Item
            label="First Name"
            name="driverfname"
            rules={[{ required: true, message: 'Please Enter the first name!' }]}
          >
           <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="driverlname"
            rules={[{ required: true, message: 'Please Enter the last name!' }]}
          >
           <Input />
          </Form.Item>

          <Form.Item
            label="Age"
            name="driverage"
            rules={[{ required: true, message: 'Please Enter the age!' }]}
          >
           <Input />
          </Form.Item>

          <Form.Item
            label="Gender"
            name="driverGender"
            rules={[{ required: true, message: 'Please Enter the Gender!' }]}
          >
           <Input />
          </Form.Item>

          <Form.Item
            label="License Number"
            name="driverLicenseNumber"
            rules={[{ required: true, message: 'Please Enter the License Number!' }]}
          >
           <Input />
          </Form.Item>

          <Form.Item
            label="Occupation"
            name="driverOccupation"
            rules={[{ required: true, message: 'Please Enter the Occupation!' }]}
          >
           <Input />
          </Form.Item>

          <Form.Item
            label="House Number"
            name="driverHouseNumber"
            rules={[{ required: true, message: 'Please Enter the House Number!' }]}
          >
           <Input />
          </Form.Item>

          <Form.Item
            label="Sub City"
            name="driverSubcity"
            rules={[{ required: true, message: 'Please Enter the SubCity!' }]}
          >
           <Input />
          </Form.Item>

          <Form.Item
            label="Kebele"
            name="driverKebele"
            rules={[{ required: true, message: 'Please Enter the Kebele!' }]}
          >
           <Input />
          </Form.Item>

          <Form.Item
            label="Woreda"
            name="driverWoreda"
            rules={[{ required: true, message: 'Please Enter the Woreda!' }]}
          >
           <Input />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="driverPhonenumber"
            rules={[{ required: true, message: 'Please Enter the Phone Number!' }]}
          >
           <Input />
          </Form.Item>

          <Form.Item
            label="Is Drunk?"
            name="isDrunk"
            rules={[{ required: true, message: 'Please Enter the Drunk!' }]}
          >
           <Input />
          </Form.Item>

          
        </div>
        <div className='flex flex-row justify-center'>
          <Button style={{ margin: '0 8px' }} type="default" htmlType="submit">
            Next
          </Button>
            <Button style={{ margin: '0 8px' }} type="default" onClick={() => prev()}>
            Prev
            </Button>
        </div>
      </Form>
    </div>
  )
}

export default DriverInformation
