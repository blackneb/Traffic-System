import React, { useState } from 'react'
import { Button, Checkbox, Form, Input, Upload, DatePicker, TimePicker,InputNumber} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { add_people_in_involved_vehicle } from '../../redux/Actions';

const PeopleInInInvolvedVehicle = ({prev}:any) => {
    const dispatch = useDispatch();
    const peopleInInvolvedVehicle = useSelector((state:any) => state.peopleInInvolvedVehicle);
    
  
    const onFinish = async (values: any) => {
      console.log('Success:', values);
      dispatch(add_people_in_involved_vehicle(values));
    };
    
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
  return (
    <div className='flex justify-center my-4'>
       <Form
        name="basic"
        initialValues={peopleInInvolvedVehicle}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        labelCol={{ flex: '200px', span: 30 }}
        labelAlign="left"
        labelWrap
        colon={false}
      >
        <div className='flex flex-col'>
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[{ required: true, message: 'Please Enter the first name!' }]}
          >
           <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true, message: 'Please Enter the Last name!' }]}
          >
           <Input />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phoneNUmber"
            rules={[{ required: true, message: 'Please Enter the Phone Number!' }]}
          >
           <Input />
          </Form.Item>


        </div>
        <div className='flex flex-row justify-center'>
          <Button style={{ margin: '0 8px' }} type="default" htmlType="submit">
            Done
          </Button>
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default PeopleInInInvolvedVehicle
