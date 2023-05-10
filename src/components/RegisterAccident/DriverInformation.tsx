import React, { useState } from 'react'
import { Button, Checkbox, Form, Input, Upload, DatePicker, TimePicker} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';


const DriverInformation = ({next,prev}:any) => {
     //const dispatch = useDispatch();
    //const basicinformation = useSelector((state:any) => state.basicInformation);
    //const address = useSelector((state:any) => state.address);
    //const accountSetupDefaultValues = useSelector((state:any) => state.accountSetup);
  
    const onFinish = async (values: any) => {
        console.log('Success:', values);
        //dispatch(add_account_set_up(values));
        //const submittedData = {...basicinformation, ...address, ...values};
        //console.log("submitted Data:",submittedData);
        //alert(JSON.stringify(submittedData,null,2));
      };
      
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <div className='flex justify-center my-4'>
       <Form
        name="basic"
        //initialValues={accountSetupDefaultValues}
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
            name="firstName"
            rules={[{ required: true, message: 'Please Enter the first name!' }]}
          >
           <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true, message: 'Please Enter the last name!' }]}
          >
           <Input />
          </Form.Item>

          <Form.Item
            label="Age"
            name="age"
            rules={[{ required: true, message: 'Please Enter the age!' }]}
          >
           <Input />
          </Form.Item>

          <Form.Item
            label="Gender"
            name="gender"
            rules={[{ required: true, message: 'Please Enter the Gender!' }]}
          >
           <Input />
          </Form.Item>

          <Form.Item
            label="License Number"
            name="licenseNumber"
            rules={[{ required: true, message: 'Please Enter the License Number!' }]}
          >
           <Input />
          </Form.Item>

          <Form.Item
            label="Occupation"
            name="occupation"
            rules={[{ required: true, message: 'Please Enter the Occupation!' }]}
          >
           <Input />
          </Form.Item>

          <Form.Item
            label="House Number"
            name="houseNumber"
            rules={[{ required: true, message: 'Please Enter the House Number!' }]}
          >
           <Input />
          </Form.Item>

          <Form.Item
            label="Sub City"
            name="subCity"
            rules={[{ required: true, message: 'Please Enter the SubCity!' }]}
          >
           <Input />
          </Form.Item>

          <Form.Item
            label="Kebele"
            name="kebele"
            rules={[{ required: true, message: 'Please Enter the Kebele!' }]}
          >
           <Input />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phoneNumber"
            rules={[{ required: true, message: 'Please Enter the Phone Number!' }]}
          >
           <Input />
          </Form.Item>

          <Form.Item
            label="Is Drunk?"
            name="drunk"
            rules={[{ required: true, message: 'Please Enter the Drunk!' }]}
          >
           <Input />
          </Form.Item>

          
        </div>
        <div className='flex flex-row justify-center'>
          <Button style={{ margin: '0 8px' }} type="default" onClick={() => next()}>
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
