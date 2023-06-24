import React, { useState, useEffect } from 'react'
import Loginvector from '../images/Traffic.jpg'
import loadingsec from '../images/loadingsec.gif'
import { useForm } from 'react-hook-form'
import { Button, Input, Form, notification } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import { RiLockPasswordLine } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux';
import { add_user_type } from '../redux/Actions';
import axios from 'axios';

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

type NotificationType = 'success' | 'info' | 'warning' | 'error';


// const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
//   props,
//   ref,
// ) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });


interface loginprofile {
  username:string;
  password:string;
}

const Login = ({setlog, setCreateAccount}:any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [servity, setServity] = useState<any>("error");
  const vertical = 'top'
  const horizontal = 'right'
  const {register, handleSubmit} = useForm<loginprofile>();

  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };


  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const onFinish = async (values: any) => {
    setIsLoading(true);
    console.log('Success:', values);
    try {
      const response = await axios.post('http://ais.blackneb.com/api/token/', values, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      await console.log(response.data);
      try{
        const res =  await axios.post('http://ais.blackneb.com/api/traffic/login', values, {
        headers: {
          Authorization: `Bearer ${response.data.access}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(res.data);
      dispatch(add_user_type(res.data[0]));
      console.log(res.data[0].username);
      if(res.data[0].status === "pass"){
        setlog(true);
      }
      else{
        setIsLoading(false);
        handleClick();
        notification.error({
          message: 'Error',
          description: 'Login Failed.',
        });
      }
      }
      catch(error){
        setIsLoading(false);
        handleClick();
        notification.error({
          message: 'Error',
          description: 'Login Failed.',
        });
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      handleClick();
      notification.error({
        message: 'Error',
        description: 'Login Failed.',
      });
    }
    //setlog(true);
    
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const onSubmit = handleSubmit( async ()=>{
    
  })
  return (
    <div>
      <section className="flex flex-col md:flex-row h-screen items-center">
        <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img src={Loginvector} alt="" className="w-full h-full object-cover"/>
        </div>
        <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>
            <Form
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
              >
                <div>
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input name='username' style={{height:40}} prefix={<UserOutlined/>}/>
                </Form.Item>
                
                
              </div>

              <div className="mt-4">
              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password name='password' style={{height:40}} prefix={<RiLockPasswordLine/>}/>
              </Form.Item>
              </div>

              <div className="text-right mt-2">
                <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
              </div>                
              <Button htmlType="submit"className="w-full bg-blue-700 text-white">
              {isLoading ? <div className='flex flex-row justify-center align-center'><img src={loadingsec} alt="" className="w-8"/><p>Logging in</p></div> : 'Log in'}
              </Button>
              </Form>

            <hr className="my-6 border-gray-300 w-full"/>
            <div className='flex flex-row justify-between'>
              <p className="">Need an account?</p>
              <Button type='link' onClick={()=>{setCreateAccount(true)}} className="text-blue-500 hover:text-blue-700 font-semibold">Create an account</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
