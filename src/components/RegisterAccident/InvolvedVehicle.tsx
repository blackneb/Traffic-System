import React, { useState } from 'react'
import { Button, Checkbox, Form, Input, Upload, DatePicker, TimePicker,InputNumber} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { add_involved_vehicle } from '../../redux/Actions';

const InvolvedVehicle = ({next,prev}:any) => {
    const dispatch = useDispatch();
    const [data, setData] = useState<any>([]);
    const involvedVehicle = useSelector((state:any) => state.involvedVehicle);
  
    const onFinish = async (values: any) => {
      console.log('Success:', values);
      dispatch(add_involved_vehicle(values));
    };
    
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
  return (
    <div className='flex justify-center my-4'>
       <Form
        name="basic"
        initialValues={involvedVehicle}
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
              label="Plate Number"
              >
              <Input.Group compact>
                  <Form.Item
                  name="plateCode"
                  noStyle
                  rules={[{ required: true, message: 'plate code is required' }]}
                  >
                  <InputNumber style={{ width: '20%' }} placeholder="Code" />
                  </Form.Item>
                  <Form.Item
                  name='plateCountry'
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
              label="Driver First Name"
              name="driverFirstName"
              rules={[{ required: true, message: 'Please Enter the driver first name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Driver Last Name"
            name="driverLastName"
            rules={[{ required: true, message: 'Please Enter the driver first name!' }]}
          >
           <Input />
          </Form.Item>

          <Form.Item
            label="Owner First Name"
            name="ownerFirstName"
            rules={[{ required: true, message: 'Please Enter the owner first name!' }]}
          >
           <Input />
          </Form.Item>

          <Form.Item
            label="Owner Last Name"
            name="ownerLastName"
            rules={[{ required: true, message: 'Please Enter the owner first name!' }]}
          >
           <Input />
          </Form.Item>

          <Form.Item
            label="Driver License Number"
            name="driverLicenseNumber"
            rules={[{ required: true, message: 'Please Enter the driver license number!' }]}
          >
           <Input />
          </Form.Item>

          <Form.Item
            label="Driver Phone Number"
            name="driverPhoneNumber"
            rules={[{ required: true, message: 'Please Enter the driver phone number!' }]}
          >
           <Input />
          </Form.Item>

          <Form.Item
            label="Owner Phone Number"
            name="ownerPhoneNumber"
            rules={[{ required: true, message: 'Please Enter the owner phone number!' }]}
          >
           <Input />
          </Form.Item>



        </div>
        <div className='flex flex-row justify-center my-4'>
            <Button style={{ margin: '0 8px' }} type="default" htmlType="submit">
              ADD
            </Button>
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

export default InvolvedVehicle
