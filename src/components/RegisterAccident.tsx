import React,{ useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import { Button, message, Steps, theme } from 'antd';
import BasicInformation from './RegisterAccident/BasicInformation';
import DriverInformation from './RegisterAccident/DriverInformation';
import InvolvedVehicle from './RegisterAccident/InvolvedVehicle';
import PeopleInInInvolvedVehicle from './RegisterAccident/PeopleInInInvolvedVehicle';

const RegisterAccident = () => {
  const dispatch = useDispatch();
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Register-Accident",path:"/registeraccident"},
  ]
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
  },[])

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: 'Basic Information',
      content: <BasicInformation next={next} /> ,
    },
    {
      title: 'Driver Information',
      content: <DriverInformation next={next} prev={prev}/> ,
    },
    {
      title: 'Involved Vehicles',
      content: <InvolvedVehicle next={next} prev={prev}/> ,
    },
    {
        title: 'People In Involved Vehicles',
        content: <PeopleInInInvolvedVehicle prev={prev}/> ,
      }
  ];
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    lineHeight: '260px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <div>
      <div className='flex flex-col justify-center mx-4 mt-4'>
        <Steps current={current} items={items} />
        <div className=''>{steps[current].content}</div>
        <div className='flex justify-center mt-10'>
        {/* {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Previous
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button style={{ margin: '0 8px' }} type="default" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button style={{ margin: '0 8px' }} type="default" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )} */}
        </div>
      </div>
    </div>
  )
}

export default RegisterAccident
