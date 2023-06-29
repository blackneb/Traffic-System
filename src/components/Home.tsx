import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import ReactMap from './Map/ReactMap'
import { Card } from 'antd'
import ChartYearAccident from './Charts/ChartYearAccident'
import AccidentTypes from './Charts/AccidentTypes';
import AgeAccidentChart from './Charts/AgeAccidentChart';
import VehicleSpeedAccidentChart from './Charts/VehicleSpeedAccidentChart';
import { add_accidents, clear_accidents,only_accidents,clear_accidents_only } from '../redux/Actions';
import axios from 'axios';

const Home = () => {
  const dispatch = useDispatch();
  const trafficId = useSelector((state:any) => state.userType.admin);
  const simpleData = useSelector((state:any) => state.accidentOnly.Accidents).length;
  //const singleTrafficData = simpleData.filter((items:any) => items.traffic === trafficId).length;
  const breadcrumb:any[] = [
    {title:"Home",path:"/"}
  ]
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
    const initialState = {}
    axios.get("https://ais.blackneb.com/api/traffic/getaccidents").then((response:any) => {
      const accidents = response.data[0];
      const drivers = response.data[1];
      const plates = response.data[2];
      const injury = response.data[3];
      const involvedVehicles = response.data[4];
      const images = response.data[5]
      console.log(  response.data);
      dispatch(clear_accidents(initialState));
      dispatch(clear_accidents_only(initialState));
      for(let i = 0;i<accidents.length;i++){
        dispatch(only_accidents(accidents[i]));
        const newForm = {
            accidents:accidents[i],
            images:images.filter((items:any) => items.accident === accidents[i].id),
            injuredPeoples:injury.filter((items:any) => items.accident === accidents[i].id),
            involvedVehicles:involvedVehicles.filter((items:any) => items.accident === accidents[i].id),
            plates:plates.filter((items:any) => items.accident === accidents[i].id),
            drivers:drivers.filter((items:any) => items.accident === accidents[i].id)
        }
        dispatch(add_accidents(newForm))
      }
    })
  },[])
  return (
    <div className='flex flex-col justify-center'>
      <div className='shadow border-b-2 border-gray-400 mx-2 my-4'>
          <h1>Accident Registrations</h1>
        </div>
      <div className='flex flex-row justify-evenly flex-wrap'>
          <Card className='mx-4 my-4' size="small" title="Total accidents" style={{ width: 300 }}>
            <p>{simpleData}</p>
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
