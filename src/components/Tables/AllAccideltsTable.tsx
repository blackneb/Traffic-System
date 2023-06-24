import React, { useState } from 'react';
import type { TableProps } from 'antd';
import { Button, Space, Table,Input, Modal } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
import AccidentDetail from '../Modals/AccidentDetail';

const { Search } = Input;

interface DataType{
    id:string,
    date:string,
    time:string,
    city:string,
    road_type:string,
  }

const AllAccideltsTable = ({data}:any) => {
  const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedvalue, setSelectedValue] = useState();
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setSearchValue(e.target.value.toLowerCase());
  };
  

  const handleChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setSortedInfo(sorter as SorterResult<DataType>);
  };
  const onViewRow = (record:any) => {
    setSelectedValue(record);
    setOpenModal(true);
  }
  const columns: ColumnsType<DataType> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id.length - b.id.length,
      sortOrder: sortedInfo.columnKey === 'id' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
      sorter: (a, b) => a.city.length - b.city.length,
      sortOrder: sortedInfo.columnKey === 'city' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      sorter: (a, b) => a.date.length - b.date.length,
      sortOrder: sortedInfo.columnKey === 'date' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
      sorter: (a, b) => a.time.length - b.time.length,
      sortOrder: sortedInfo.columnKey === 'time' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
        title: 'Road_Type',
        dataIndex: 'road_type',
        key: 'road_type',
        sorter: (a, b) => a.road_type.length - b.road_type.length,
        sortOrder: sortedInfo.columnKey === 'v' ? sortedInfo.order : null,
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
        title="Accident Information"
        style={{ top: 20 }}
        open={openModal}
        onOk={() => setOpenModal(false)}
        onCancel={() => setOpenModal(false)}
        width={1200}
      >
        <AccidentDetail data={selectedvalue}/>
      </Modal>
      <p>Accidents Table</p>
      <Input className='mb-2' placeholder="Search With Driver Name" allowClear onChange={onChange} />
      <Table columns={columns} scroll={{ x: 900 }} style={{minHeight:700}} dataSource={data} onChange={handleChange} />
    </div>
  )
}

export default AllAccideltsTable
