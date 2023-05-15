import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import ReactMap from './Map/ReactMap'
import { Card } from 'antd'
import ChartYearAccident from './Charts/ChartYearAccident'
import AccidentTypes from './Charts/AccidentTypes';

const Home = () => {
  const dispatch = useDispatch();
  const breadcrumb:any[] = [
    {title:"Home",path:"/"}
  ]
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
  },[])
  return (
    <div className='flex flex-col justify-center'>
      <div className='flex flex-row justify-evenly'>
          <Card className='mx-4 my-4' size="small" title="To Day" style={{ width: 300 }}>
            <p>Number</p>
          </Card>
          <Card className='mx-4 my-4' size="small" title="This Week" style={{ width: 300 }}>
            <p>Number</p>
          </Card>
          <Card className='mx-4 my-4' size="small" title="This Month" style={{ width: 300 }}>
            <p>Number</p>
          </Card>
        </div>
        <div className='flex flex-row justify-center'>
          <ChartYearAccident/>
          <AccidentTypes/>
        </div>
    </div>
  )
}

export default Home
