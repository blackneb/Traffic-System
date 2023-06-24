import React from 'react'
import { Descriptions,QRCode, Badge } from 'antd';
import ReactMap from '../Map/ReactMap';
import { useSelector, useDispatch } from 'react-redux';

const AccidentDetail = ({data}:any) => {
  const accidentInformation = useSelector((state:any) => state.accident.totalAccidents);
  const accidentInfo = accidentInformation.filter((items:any) =>  items.accidents.id === data.id);
  const involvedVehicles = accidentInfo[0].involvedVehicles;
  const injured = accidentInfo[0].injuredPeoples;
  const images = accidentInfo[0].images;
  console.log(involvedVehicles);
  return (
    <div className=''>
        <Descriptions bordered>
            <Descriptions.Item label="Plate Number" span={3}>3-AA-C07456</Descriptions.Item>
            <Descriptions.Item label="Date" span={3}>{data.date}</Descriptions.Item>
            <Descriptions.Item label="Time" span={2}>{data.time}</Descriptions.Item>
            <Descriptions.Item label="Road Type">{data.road_type}</Descriptions.Item>
            <Descriptions.Item label="Vehicle Speed" span={2}>{data.vehicle_speed}</Descriptions.Item>
            <Descriptions.Item label="Traffic Signal" span={2}><Badge status="processing" text={data.traffic_signal} /></Descriptions.Item>
            <Descriptions.Item label="Road Side Far" span={2}>{data.road_side_far}</Descriptions.Item>
            <Descriptions.Item label="Number of Injured People" span={3}>{data.injured_people_number}</Descriptions.Item>
            <Descriptions.Item label="Number of Death" span={2}>{data.death_number}</Descriptions.Item>
            <Descriptions.Item label="Current Estimation">{data.cost_estimation}</Descriptions.Item>
            <Descriptions.Item label="Driver Name" span={2}>{accidentInfo[0].drivers[0].f_name}</Descriptions.Item>
            <Descriptions.Item label="Driver Age">{accidentInfo[0].drivers[0].age}</Descriptions.Item>
            <Descriptions.Item label="Driver Gender" span={2}>{accidentInfo[0].drivers[0].gender}</Descriptions.Item>
            <Descriptions.Item label="Driver License Number">{accidentInfo[0].drivers[0].license_number}</Descriptions.Item>
            <Descriptions.Item label="Driver Occupation" span={2}>{accidentInfo[0].drivers[0].occupation}</Descriptions.Item>
            <Descriptions.Item label="Driver Subcity">{accidentInfo[0].drivers[0].subcity}</Descriptions.Item>
            <Descriptions.Item label="Driver Kebele">{accidentInfo[0].drivers[0].kebele}</Descriptions.Item>
            <Descriptions.Item label="Driver Phone Number">{accidentInfo[0].drivers[0].phone_number}</Descriptions.Item>
            <Descriptions.Item label="Does the Driver Drunk?">{accidentInfo[0].drivers[0].isdrunk}</Descriptions.Item>
            <Descriptions.Item label="Driver House Number">{accidentInfo[0].drivers[0].house_number}</Descriptions.Item>
            <Descriptions.Item label="Involved Vehicles" span={3}>
              {
                involvedVehicles.map((items:any) => (
                  <div>
                    Driver Name:{items.driver_f_name + " "  + items.driver_l_name}
                    <br />
                    Owner Name: {items.owner_f_name + " " + items.owner_l_name}
                    <br />
                    Driver License Number: {items.driver_license_number}
                    <br />
                    Driver Phone Number: {items.driver_phone}
                    <br />
                    Owner Phone Number: {items.owner_phone}
                    <br />
                    Plate Number: 2AAB34567
                    <br />
                    <p>----------------------------------------------------</p>
                  </div>
                  ))
              }
            </Descriptions.Item>
            <Descriptions.Item label="Injured People" span={3}>
            {
                injured.map((items:any) => (
                  <div>
                    Full Name:{items.f_name + " "  + items.l_name}
                    <br />
                    Injury Type: {items.injurytype}
                    <br />
                    Phone Number: {items.phone}
                    <br />
                    <p>----------------------------------------------------</p>
                  </div>
                  ))
              }
            </Descriptions.Item>
            <Descriptions.Item label="Location" span={3}> <ReactMap/> </Descriptions.Item>
            <Descriptions.Item label="Accident Images" span={3}>
            {
                images.map((items:any) => (
                  <div>
                    <img className='h-64' src={"http://blackneb.com/images/photos/" + items.image_path} alt="Description of the image" />
                  </div>
                  ))
              }        
            </Descriptions.Item>
            <Descriptions.Item label="QR Code">
              <div>
              < QRCode value={data.id.toString()} size={250} />
              </div>
            </Descriptions.Item>
        </Descriptions>
    </div>
  )
}

export default AccidentDetail
