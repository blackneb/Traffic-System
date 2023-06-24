import React, {useState} from 'react'
import { Button, Form, Input, Upload, notification} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import loading from '../../images/loading.gif'


import axios from 'axios';

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

interface json{
  username:any;
  password:any;
  firstname:any;
  lastname:any;
  phone:any;
  pimage:any;
  admin_id:any;
  email:any;
}


const TrafficCreateAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
    const formData = new FormData();
    const onFinish = async (values: any) => {
      setIsLoading(true);
        //console.log('Success:', values);
        console.log(values.pimage.file);
        //console.log(JSON.stringify(jsonArray,null,2));
        formData.delete('image');
        formData.append("image", values.pimage.file);
        // for( let i=0;i<values.pimage.file.length; i++){
        //   formData.append("image[]", values.file[i]);
        // }
      axios.post( "http://blackneb.com/images/Upload_file.php", formData).then(res => {
        console.log(res.data);
        if(res.data.status === "success"){
          console.log("posting info...")
          const jsonArray:json = {
            "username":values.userName,
            "password":values.password,
            "firstname":values.firstName,
            "lastname":values.lastName,
            "phone":values.phone,
            "pimage":res.data.name,
            "admin_id":"2",
            "email":values.email
          }
          console.log(JSON.stringify(jsonArray,null,2));
          axios.post("http://ais.blackneb.com/api/traffic/addnewtraffic",jsonArray).then(response => {
            console.log(response.data[0].status);
            if(response.data[0].status === "created"){
              setIsLoading(false);
              notification.success({
                message: 'Success',
                description: 'Traffic Account created successfully',
              });
            }
            else if(response.data[0].status === "failed"){
              setIsLoading(false);
              notification.error({
                message: 'Error',
                description: 'Traffic Account is not created',
              });
            }
          })
        }
        else{
            console.log("Item Upload Failed");
            setIsLoading(false);
            notification.error({
              message: 'Error',
              description: 'Traffic Account is not created',
            });
        }
    })
      };

      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
        notification.error({
          message: 'Error',
          description: 'Traffic Account is not created',
        });
      };
  return (
    <div className='flex justify-center'>
      <Form
        name="basic"
        labelCol={{ flex: '100px', span: 30 }}
        labelAlign="left"
        labelWrap
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className='flex flex-col'>
          <Form.Item
                label="First Name"
                name="firstName"
                rules={[{ required: true, message: 'Please input Traffics first name!' }]}
           >
            <Input />
          </Form.Item>
          <Form.Item
                label="Last Name"
                name="lastName"
                rules={[{ required: true, message: 'Please input Traffics last name!' }]}
           >
            <Input />
          </Form.Item>
          <Form.Item
            label="Username"
            name="userName"
            rules={[{ required: true, message: 'Please input Traffics username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
                label="Profile Pic"
                name="pimage"
                rules={[{ required: true, message: 'Please input Traffics image!' }]}
           >
            <Upload maxCount={1} listType="picture-card" beforeUpload={(file:any) =>{
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
                <UploadOutlined/>
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>
          <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input Traffics email!' }]}
           >
            <Input />
          </Form.Item>
          <Form.Item
                label="Phone"
                name="phone"
                rules={[{ required: true, message: 'Please input Traffics phone!' }]}
           >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please generate password!' }]}
          >
            <Input.Password/>
          </Form.Item>
        </div>
        <div className='flex flex-row justify-center'>
          <Button style={{ margin: '0 8px', padding:'2px' }} type="default" htmlType="submit">
          {isLoading ? <div className='flex flex-row justify-center align-center'><img src={loading} alt="" className="w-8"/><p>Creating Account</p></div> : 'Create Account'}
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default TrafficCreateAccount
