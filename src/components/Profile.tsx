import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import { Form, Input, Button, notification } from 'antd';
import { useSelector } from 'react-redux';
import axios from 'axios';
const Profile = () => {
  const dispatch = useDispatch();
  const profileData = useSelector((state:any) => state.userType);
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Profile",path:"/profile"},
  ]
  const onFinish = (values: any) => {
    console.log('Success:', values);
    axios.post("http://ais.blackneb.com/api/traffic/updateaccount", values).then((response:any) => {
      console.log(response.data[0].status);
      if(response.data[0].status === "updated successfuly"){
        notification.success({
          message: 'success',
          description: 'Account updated Successfully',
        });
      }
    })

  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onFinishPassword = (values: any) => {
    console.log('Success:', values);
  };
  
  const onFinishFailedPassword = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
  },[])
  return (
    <div className='mx-4 my-4 flex justify-center'>
      <div className='flex flex-col justify-center w-96'>
        <div>
          <Form
            name="Address"
            //initialValues={AddressDefaultValue}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            labelCol={{ flex: '100px', span: 30 }}
            labelAlign="left"
            labelWrap
            colon={false}
            >
              <div className='flex flex-col'>
              <Form.Item label="User Name" name="username" initialValue={profileData.user_name} rules={[{ required: true, message: 'Please Enter username!' }]}>
                <Input placeholder=""/>
              </Form.Item>
              <Form.Item label="First Name" name="f_name" initialValue={profileData.f_name} rules={[{ required: true, message: 'Please Enter First Name!' }]}>
                <Input placeholder=""/>
              </Form.Item>
              <Form.Item label="Last Name" name="l_name" initialValue={profileData.l_name} rules={[{ required: true, message: 'Please Enter Last Name!' }]}>
                <Input placeholder=""/>
              </Form.Item>
              <Form.Item label="Email" name="email" initialValue={profileData.email} rules={[{ required: true, message: 'Please Enter Email!' }]}>
                <Input placeholder=""/>
              </Form.Item>
              <Form.Item label="Phone" name="phone" initialValue={profileData.phone} rules={[{ required: true, message: 'Please enter Phone!' }]}>
                <Input placeholder=""/>
              </Form.Item>
              </div>
              <div className='flex flex-row justify-center'>
                <Button style={{ margin: '0 8px' }} type="default" htmlType="submit">
                  Update Account
                </Button>
              </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Profile
