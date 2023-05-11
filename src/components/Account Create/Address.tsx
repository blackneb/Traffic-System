import React, {useState} from 'react'
import { Button, Form, Input, Radio, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { add_address } from '../../redux/Actions';

const Address = ({next,prev,setCreateAccountReterive}:any) => {
  const AddressDefaultValue = useSelector((state:any) => state.address);
  const dispatch = useDispatch();
  const onFinish = (values: any) => {
    console.log('Success:', values);
    dispatch(add_address(values));
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='flex justify-center my-4 '>
      <Form
      name="Address"
      initialValues={AddressDefaultValue}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      labelCol={{ flex: '75px', span: 30 }}
      labelAlign="left"
      labelWrap
      colon={false}
      >
        <div className='flex flex-col h-[32rem]'>
        <Form.Item label="Sub City" name="SubCity" rules={[{ required: true, message: 'Please input Subcity!' }]}>
          <Input placeholder=""/>
        </Form.Item>
        <Form.Item label="Woreda" name="Woreda" rules={[{ required: true, message: 'Please input Woreda!' }]}>
          <Input placeholder=""/>
        </Form.Item>
        <Form.Item label="Kebele" name="Kebele" rules={[{ required: true, message: 'Please input kebele!' }]}>
          <Input placeholder=""/>
        </Form.Item>
        <Form.Item label="H.Number" name="HouseNumber" rules={[{ required: true, message: 'Please input House Number!' }]}>
          <Input placeholder=""/>
        </Form.Item>
        <Form.Item label="P.O.Box" name="POBox" rules={[{ required: true, message: 'Please input P.O.Box!' }]}>
          <Input placeholder=""/>
        </Form.Item>
        </div>
        <div className='flex flex-row justify-center'>
          <Button style={{ margin: '0 8px' }} type="default" htmlType="submit">
            Create Account
          </Button>
          <Button style={{ margin: '0 8px' }} type="default" onClick={() => prev()}>
            Prev
          </Button>
          <Button style={{ margin: '0 8px' }} onClick={() => { setCreateAccountReterive(false) }}>
            Back to Login
          </Button>
        </div>
      
    
    </Form>
    </div>
  )
}

export default Address
