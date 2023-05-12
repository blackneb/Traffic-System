import React from 'react'
import { Typography } from 'antd';

const { Title } = Typography;

const Keys = () => {
  return (
    <div className='mt-4 ml-4 flex flex-start flex-col'>
      <div>
        <Title level={5}>Public key</Title>

      </div>

      <div>
        <Title level={5}>Private Key</Title>
        
      </div>
    </div>
  )
}

export default Keys
