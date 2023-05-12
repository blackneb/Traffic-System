import React, { useState } from 'react';
import type { TableProps } from 'antd';
import { Button, Space, Table,Input, Modal } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
import AccidentDetail from '../Modals/AccidentDetail';

const { Search } = Input;

interface DataType{
    id:string,
    vehicleId:string,
    date:string,
    time:string,
    driverName:string,
    numberOfVehicles:string,
  }

const AllAccideltsTable = ({data}:any) => {
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
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id.length - b.id.length,
      sortOrder: sortedInfo.columnKey === 'id' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Vehicle ID',
      dataIndex: 'vehicleId',
      key: 'vehicleId',
      sorter: (a, b) => a.vehicleId.length - b.vehicleId.length,
      sortOrder: sortedInfo.columnKey === 'vehicleId' ? sortedInfo.order : null,
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
        title: 'Driver Name',
        dataIndex: 'driverName',
        key: 'driverName',
        sorter: (a, b) => a.driverName.length - b.driverName.length,
        sortOrder: sortedInfo.columnKey === 'driverName' ? sortedInfo.order : null,
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
        <AccidentDetail/>
      </Modal>
      <p>Accidents Table</p>
      <Input className='mb-2' placeholder="Search With Driver Name" allowClear onChange={onChange} />
      <Table columns={columns} scroll={{ x: 900 }} style={{minHeight:700}} dataSource={data.filter((items:any) => items.driverName.toLowerCase().includes(searchValue))} onChange={handleChange} />
    </div>
  )
}

export default AllAccideltsTable
