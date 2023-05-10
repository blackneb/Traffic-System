import React, { useState } from 'react'
import { Button, Checkbox, Form, Input, Upload, DatePicker, TimePicker} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';

const BasicInformation = ({next}:any) => {
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
            label="Date"
            name="date"
            rules={[{ required: true, message: 'Please Enter the date!' }]}
          >
           <DatePicker />
          </Form.Item>

          <Form.Item
            label="Time"
            name="time"
            rules={[{ required: true, message: 'Please Enter the Time!' }]}
          >
            <TimePicker />
          </Form.Item>

          <Form.Item
            label="Longitude"
            name="longitude"
            rules={[{ required: true, message: 'Please Enter the Longitude!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Latitude"
            name="latitude"
            rules={[{ required: true, message: 'Please Enter the latitude!' }]}
          >
            <Input />
          </Form.Item>
         
          <Form.Item
            label="Road Type"
            name="roadType"
            rules={[{ required: true, message: 'Please Enter the Road Type!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Vehicle Speed"
            name="vehicleSpeed"
            rules={[{ required: true, message: 'Please Enter the Vehicle Speed!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Traffic Signal"
            name="trafficSignal"
            rules={[{ required: true, message: 'Please Enter the Traffic Signal!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Road Side Far"
            name="roadSideFar"
            rules={[{ required: true, message: 'Please Enter the Road Side Far!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Number Of Injured People"
            name="numberOfInjuredPeople"
            rules={[{ required: true, message: 'Please Enter the Number of injured people!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Number Of Death"
            name="numberOfDeath"
            rules={[{ required: true, message: 'Please Enter the Number of Death!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Cost Estimation"
            name="costEstimation"
            rules={[{ required: true, message: 'Please Enter the Cost Estimation!' }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className='flex flex-row justify-center'>
          <Button style={{ margin: '0 8px' }} type="default" onClick={() => next()}>
            Next
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default BasicInformation
