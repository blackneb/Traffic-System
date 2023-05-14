import React from 'react'
import ReactMap from './Map/ReactMap'
import { Card } from 'antd'
import ChartYearAccident from './Charts/ChartYearAccident'

const Home = () => {
  return (
    <div className='flex flex-col justify-center'>
      <div className='flex flex-row justify-evenly'>
          <Card className='mx-4 my-4' size="small" title="To Day" style={{ width: 300 }}>
            <p>Number</p>
          </Card>
          <Card className='mx-4 my-4' size="small" title="This Week" style={{ width: 300 }}>
            <p>Number</p>
          </Card>
          <Card className='mx-4 my-4' size="small" title="This Month" style={{ width: 300 }}>
            <p>Number</p>
          </Card>
        </div>
        <div className='flex flex-row justify-center'>
          <ChartYearAccident/>
          
        </div>
    </div>
  )
}

export default Home
