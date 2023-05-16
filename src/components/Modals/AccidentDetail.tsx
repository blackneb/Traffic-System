import React from 'react'
import { Descriptions, Badge } from 'antd';
import ReactMap from '../Map/ReactMap';

const AccidentDetail = () => {
  return (
    <div className=''>
        <Descriptions bordered>
            <Descriptions.Item label="Plate Number" span={3}>3-AA-C07456</Descriptions.Item>
            <Descriptions.Item label="Date" span={3}>9/15/2022</Descriptions.Item>
            <Descriptions.Item label="Time" span={2}>10:25 AM</Descriptions.Item>
            <Descriptions.Item label="Road Type">Silver</Descriptions.Item>
            <Descriptions.Item label="Vehicle Speed" span={2}>1200</Descriptions.Item>
            <Descriptions.Item label="Traffic Signal" span={2}><Badge status="processing" text="5" /></Descriptions.Item>
            <Descriptions.Item label="Road Side Far" span={2}>2005</Descriptions.Item>
            <Descriptions.Item label="Number of Injured People" span={3}>6 Ton</Descriptions.Item>
            <Descriptions.Item label="Number of Death" span={2}>5</Descriptions.Item>
            <Descriptions.Item label="Current Estimation">12000000</Descriptions.Item>
            <Descriptions.Item label="Driver Name" span={2}>Jhon Doe</Descriptions.Item>
            <Descriptions.Item label="Driver Age">Learning</Descriptions.Item>
            <Descriptions.Item label="Driver Gender" span={2}>Yes</Descriptions.Item>
            <Descriptions.Item label="Driver License Number">Jhon Doe</Descriptions.Item>
            <Descriptions.Item label="Driver Occupation" span={2}>Third Party</Descriptions.Item>
            <Descriptions.Item label="Driver Subcity">Any Driver</Descriptions.Item>
            <Descriptions.Item label="Driver Kebele">Any Driver</Descriptions.Item>
            <Descriptions.Item label="Driver Phone Number">Any Driver</Descriptions.Item>
            <Descriptions.Item label="Does the Driver Drunk?">Any Driver</Descriptions.Item>
            <Descriptions.Item label="Driver House Number">Any Driver</Descriptions.Item>
            <Descriptions.Item label="Involved Vehicles" span={3}>
                Driver Name: Abebe Kebede
                <br />
                Owner Name: Kebede Abebe
                <br />
                Driver License Number: LCD3523LJ6453
                <br />
                Driver Phone Number: +2519457863
                <br />
                Owner Phone Number: +2519563214
                <br />
                Plate Number: 2AAB34567
                <br />
            </Descriptions.Item>
            <Descriptions.Item label="Involved Vehicles" span={3}>
                Name: Abebe Kebede
                <br />
                Phone Number: Kebede Abebe
                <br />
            </Descriptions.Item>
            <Descriptions.Item label="Location" span={3}> <ReactMap/> </Descriptions.Item>
            <Descriptions.Item label="Accident Images" span={3}>Any Driver</Descriptions.Item>
        </Descriptions>
    </div>
  )
}

export default AccidentDetail
