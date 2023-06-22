import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import ReactMap from './Map/ReactMap'
import { Card } from 'antd'
import ChartYearAccident from './Charts/ChartYearAccident'
import AccidentTypes from './Charts/AccidentTypes';
import AgeAccidentChart from './Charts/AgeAccidentChart';
import VehicleSpeedAccidentChart from './Charts/VehicleSpeedAccidentChart';

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
      <div className='shadow border-b-2 border-gray-400 mx-2 my-4'>
          <h1>Accident Registrations</h1>
        </div>
      <div className='flex flex-row justify-evenly flex-wrap'>
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
        <div className='shadow border-b-2 border-gray-400 mx-2 my-4'>
          <h1>Charts Highlight</h1>
        </div>
        <div className='flex flex-row justify-evenly flex-wrap'>
          <ChartYearAccident/>
          <AccidentTypes/>
          <AgeAccidentChart/>
          <VehicleSpeedAccidentChart/>
        </div>
    </div>
  )
}

export default Home
