import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import { Select } from 'antd';
import AccidentTypesChart from './Charts/AccidentTypesChart';
import YearAccidentChart from './Charts/YearAccidentChart';
import VehicleSpeedAccidentChart from './Charts/VehicleSpeedAccidentChart';
import RoadTypesAccidentChart from './Charts/RoadTypesAccidentChart';
import GenderAccidentChart from './Charts/GenderAccidentChart';
import CityAccidentChart from './Charts/CityAccidentChart';
import AgeAccidentChart from './Charts/AgeAccidentChart';
import { DeathChart } from './Charts/DeathChart';

const Statistics = () => {
  const dispatch = useDispatch();
  const [labels, setLabels] = useState("AccidentTypesChart");
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Analytics",path:"/analytics"},
  ]
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
    setLabels(value);
  };
  
  const onSearch = (value: string) => {
    console.log('search:', value);
  };
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
  },[])

  return (
    <div className='mt-4 ml-4'>
      <Select
        showSearch
        placeholder="Select a Chart"
        optionFilterProp="children"
        style={{width:'400px'}}
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={[
          {
            value: 'AccidentTypesChart',
            label: 'Accident Types Chart',
          },
          {
            value: 'AgeAccidentChart',
            label: 'Age Accident Chart',
          },
          {
            value: 'YearAccidentChart',
            label: 'Year Accident Chart',
          },
          {
            value: 'VehicleSpeedAccidentChart',
            label: 'Vehicle Speed Accident Chart',
          },
          {
            value: 'RoadTypesAccidentChart',
            label: 'Road Types Accident Chart',
          },
          {
            value: 'GenderAccidentChart',
            label: 'Gender Accident Chart',
          },
          {
            value: 'CityAccidentChart',
            label: 'City Accident Chart',
          },
          {
            value: 'DeathChart',
            label: 'Death Chart',
          },
        ]}
      />
      <div className='flex justify-center'>
        {(()=>{
          switch(labels){
            case "AccidentTypesChart":
              return(
                <div>
                  <AccidentTypesChart/>
                </div>
              )
            case "AgeAccidentChart":
              return(
                <div>
                  <AgeAccidentChart/>
                </div>
              )
            case "YearAccidentChart":
              return(
                <div>
                  <YearAccidentChart/>
                </div>
              )
            case "VehicleSpeedAccidentChart":
              return(
                <div>
                  <VehicleSpeedAccidentChart/>
                </div>
              )
            case "RoadTypesAccidentChart":
              return(
                <div>
                  <RoadTypesAccidentChart/>
                </div>
              )
            case "GenderAccidentChart":
              return(
                <div>
                  <GenderAccidentChart/>
                </div>
              )
            case "CityAccidentChart":
              return(
                <div>
                  <CityAccidentChart/>
                </div>
              )
            case "DeathChart":
              return(
                <div>
                  <DeathChart/>
                </div>
              )          
          }
        })()}
      </div>
    </div>
  )
}

export default Statistics
