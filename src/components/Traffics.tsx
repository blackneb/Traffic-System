import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'antd';
import { PlusOutlined, PlusCircleOutlined } from '@ant-design/icons'
import TrafficCreateAccount from './Modals/TrafficCreateAccount';
import TrafficsList from './Tables/TrafficsList';
import { add_breadcrumb } from '../redux/Actions';
import { traffics } from '../redux/Actions';
import axios from 'axios';

const Traffics = () => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state:any) => state.traffics);
  console.log(data);
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Traffics",path:"/traffics"},
  ]
  const onViewRow = (record:any) => {
    setOpenModal(true);
  }

  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
    try{
      axios.get("https://ais.blackneb.com/api/traffic/gettraffic").then((response:any) => {
        console.log(response.data);
        dispatch(traffics(response.data));
      })
    }
    catch(error){
      console.log(error)
    }
  },[])
  return (
    <div className='mt-4 ml-4'>
      <Button onClick={()=>setOpenModal(true)} icon={<PlusCircleOutlined/>}>Add New Traffic</Button>
      <Modal
        title="Create Account For Traffics"
        style={{ top: 20 }}
        open={openModal}
        onOk={() => setOpenModal(false)}
        onCancel={() => setOpenModal(false)}
        width={800}
      >
        <TrafficCreateAccount/>
      </Modal>
      <TrafficsList data={data} />
    </div>
  )
}

export default Traffics
