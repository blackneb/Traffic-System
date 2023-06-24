import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'antd';
import { PlusOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { accidents } from '../data/accidents';
import { add_breadcrumb } from '../redux/Actions';
import AllAccideltsTable from './Tables/AllAccideltsTable';
import { add_accidents, clear_accidents,only_accidents,clear_accidents_only } from '../redux/Actions';
import axios from 'axios';

const AllAccident = () => {
  const [openModal, setOpenModal] = useState(false);
  const data:any[] = accidents;
  const simpleData = useSelector((state:any) => state.accidentOnly.Accidents);
  console.log(simpleData)
  const dispatch = useDispatch();
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Accidents",path:"/accidents"},
  ]
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
    const initialState = {}
    axios.get("http://ais.blackneb.com/api/traffic/getaccidents").then((response:any) => {
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
    <div className='mt-4 ml-4'>
      <AllAccideltsTable data={simpleData} />
    </div>
  )
}

export default AllAccident
