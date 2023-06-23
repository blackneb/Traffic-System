import React, { useState } from 'react';
import type { TableProps } from 'antd';
import { Button, Space, Table,Input, Modal } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';

const { Search } = Input;

interface DataType{
    id:string,
    f_name:string,
    l_name:string,
    user_name:string,
    email:string,
    phone:string
  }

const TrafficsList = ({data}:any) => {
    const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setSearchValue(e.target.value.toLowerCase());
  };
  

  const handleChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setSortedInfo(sorter as SorterResult<DataType>);
  };
  const onViewRow = (record:any) => {
    setOpenModal(true);
  }
  const columns: ColumnsType<DataType> = [
    {
      title: 'User Name',
      dataIndex: 'user_name',
      key: 'user_name',
      sorter: (a, b) => a.user_name.length - b.user_name.length,
      sortOrder: sortedInfo.columnKey === 'user_name' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Name',
      dataIndex: 'f_name',
      key: 'f_name',
      sorter: (a, b) => a.f_name.length - b.f_name.length,
      sortOrder: sortedInfo.columnKey === 'f_name' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
      key: 'phone',
      sorter: (a, b) => a.phone.length - b.phone.length,
      sortOrder: sortedInfo.columnKey === 'phone' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => a.email.length - b.email.length,
      sortOrder: sortedInfo.columnKey === 'email' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (record) => <div><Button onClick={()=>{ onViewRow(record); }} type='link'>view</Button></div> ,
    },
  ];
  return (
    <div className='mx-4 mt-4 bg-white shadow rounded-md border-0 p-2 shadow'>
      <Modal
        title="Traffic Information"
        style={{ top: 20 }}
        open={openModal}
        onOk={() => setOpenModal(false)}
        onCancel={() => setOpenModal(false)}
        width={1200}
      >
      </Modal>
      <p>Traffic Table</p>
      <Input className='mb-2' placeholder="Search With Traffic Name" allowClear onChange={onChange} />
      <Table columns={columns} scroll={{ x: 900 }} style={{minHeight:700}}  onChange={handleChange} />
    </div>
  )
}

export default TrafficsList
