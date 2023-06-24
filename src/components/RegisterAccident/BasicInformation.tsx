import React, { useState } from 'react'
import { Button, Checkbox, Form, Input, Upload, DatePicker, TimePicker, InputNumber} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { add_basic_information } from '../../redux/Actions';
import moment from 'moment';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import locale from 'antd/locale/zh_CN';


const BasicInformation = ({next}:any) => {
    const format = 'HH:mm';
    const dispatch = useDispatch();
    const basicInformation = useSelector((state:any) => state.basicInformation);
    const onFinish = async (values: any) => {
      console.log('Success:', values);
      dispatch(add_basic_information(values));
      next();
    };
    
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
  return (
    <div className='flex justify-center my-4'>
       <Form
        name="basic"
        initialValues={basicInformation}
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
              label="Plate Number"
              >
              <Input.Group compact>
                  <Form.Item
                  name="plateCode"
                  noStyle
                  rules={[{ required: true, message: 'plate code is required' }]}
                  >
                  <Input style={{ width: '20%' }} placeholder="Code" />
                  </Form.Item>
                  <Form.Item
                  name='plateCity'
                  noStyle
                  rules={[{ required: true, message: 'plate country is required' }]}
                  >
                  <Input style={{ width: '30%' }} placeholder="City" />
                  </Form.Item>
                  <Form.Item
                  name='plateNumber'
                  noStyle
                  rules={[{ required: true, message: 'plate number is required' }]}
                  >
                  <Input style={{ width: '50%' }} placeholder="Number" />
                  </Form.Item>
              </Input.Group>
          </Form.Item>
          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: 'Please Enter the date!' }]}
          >
           <DatePicker/>
          </Form.Item>

          <Form.Item
            label="Time"
            name="time"
            rules={[{ required: true, message: 'Please Enter the Time!' }]}
          >
            <TimePicker format={format} />
          </Form.Item>

          <Form.Item
            label="Longitude"
            name="longitude"
            rules={[{ required: true, message: 'Please Enter the Longitude!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="City"
            name="city"
            rules={[{ required: true, message: 'Please Enter the City!' }]}
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
            name="roadSidefar"
            rules={[{ required: true, message: 'Please Enter the Road Side Far!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Number Of Injured People"
            name="injPeoplenumber"
            rules={[{ required: true, message: 'Please Enter the Number of injured people!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Number Of Death"
            name="deathNumber"
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
          <Button style={{ margin: '0 8px' }} type="default" htmlType="submit">
            Next
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default BasicInformation
