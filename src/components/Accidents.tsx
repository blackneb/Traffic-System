import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'antd';
import { PlusOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { accidents } from '../data/accidents';
import { add_breadcrumb } from '../redux/Actions';
import TrafficAccidentsTable from './Tables/TrafficAccidentsTable';

const Accidents = () => {
  const [openModal, setOpenModal] = useState(false);
  const data:any[] = accidents;
  const dispatch = useDispatch();
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Accidents",path:"/accidents"},
  ]
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
  },[])
  return (
    <div className='mt-4 ml-4'>
      <TrafficAccidentsTable data={data} />
    </div>
  )
}

export default Accidents
