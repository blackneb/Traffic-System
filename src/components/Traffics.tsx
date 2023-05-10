import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'antd';
import { PlusOutlined, PlusCircleOutlined } from '@ant-design/icons'
import TrafficCreateAccount from './Modals/TrafficCreateAccount';
import {traffics} from '../data/traffics';
import TrafficsList from './Tables/TrafficsList';

const Traffics = () => {
  const [openModal, setOpenModal] = useState(false);
  const data:any[] = traffics;
  //const dispatch = useDispatch();
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Experts",path:"/course"},
  ]
  const onViewRow = (record:any) => {
    setOpenModal(true);
  }

  useEffect(() => {
    //dispatch(add_breadcrumb(breadcrumb));
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
