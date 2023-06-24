import React, { useState } from 'react'
import { Button, Checkbox, Form, Input, Upload, DatePicker, TimePicker,InputNumber} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';


const AccidentImages = ({prev}:any) => {
    const dispatch = useDispatch();
    const peopleInInvolvedVehicle = useSelector((state:any) => state.peopleInInvolvedVehicle);
    const userType:string = useSelector((state:any) => state.userType.admin).toString();
    console.log(userType)
    const basicInformation = useSelector((state:any) => state.basicInformation);
    const driverInformation = useSelector((state:any) => state.driverInformation);
    const involvedVehicle = useSelector((state:any) => state.involvedVehicle);
  
    const formData = new FormData();
    const onFinish = async (values: any) => {
        console.log(basicInformation)
        console.log(driverInformation)
        console.log(involvedVehicle)
        console.log(peopleInInvolvedVehicle)
        const customTime:string = basicInformation.time.$H + ":" + basicInformation.time.$m;
        const customDate:string = basicInformation.time.$y + "-" + basicInformation.time.$M + "-" + basicInformation.time.$D;
        console.log(customDate)
        const json = {
            plateCode:basicInformation.plateCode,
            plateCity:basicInformation.plateCity,
            plateNumber:basicInformation.plateNumber,
            date:customDate,
            time:customTime,
            longitude:basicInformation.longitude,
            latitude:basicInformation.latitude,
            roadType:basicInformation.roadType,
            vehicleSpeed:basicInformation.vehicleSpeed,
            trafficSignal:basicInformation.trafficSignal,
            roadSidefar:basicInformation.roadSidefar,
            injPeoplenumber:basicInformation.injPeoplenumber,
            deathNumber:basicInformation.deathNumber,
            costEstimation:basicInformation.costEstimation,
            city:basicInformation.city
        }
        
        //console.log('Success:', values);
        console.log(values.pimage.file);
        //console.log(JSON.stringify(jsonArray,null,2));
        formData.delete('image');
        formData.append("image", values.pimage.file);
        // for( let i=0;i<values.pimage.file.length; i++){
        //   formData.append("image[]", values.file[i]);
        // }
      axios.post( "http://blackneb.com/images/Upload_file.php", formData).then(res => {
        console.log(res.data);
        if(res.data.status === "success"){
            const image = {
                images:[res.data.name]
            }
            const traffic_id = {
                traffic_id: userType
            }
            const jsonArray = { ...json, ...driverInformation, ...involvedVehicle, ...peopleInInvolvedVehicle, ...image, ...traffic_id };
            const sendData = JSON.stringify(jsonArray,null,2);
            console.log(JSON.stringify(jsonArray,null,2))
            axios.post("http://ais.blackneb.com/api/traffic/registeraccident", jsonArray).then(response => {
                console.log(response.data);
            })
          console.log("posting info...")
        }
        else{
            console.log("Item Upload Failed");
        }
    })
      };
    
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    const confirmSubmission = () => {
      

    }
  return (
    <div className='flex justify-center my-4'>
       <Form
        name="basic"
        initialValues={involvedVehicle}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        labelCol={{ flex: '200px', span: 30 }}
        labelAlign="left"
        labelWrap
        colon={false}
      >
        <div className='flex flex-col'>
        <Form.Item
                label="Profile Pic"
                name="pimage"
                rules={[{ required: true, message: 'Please input Traffics image!' }]}
           >
            <Upload maxCount={1} listType="picture-card" beforeUpload={(file:any) =>{
              return new Promise((resolve:any,reject:any) => {
                if(file.size > 2){
                  reject("File size exceed");
                }
                else{
                  resolve("Success");
                }
              })
            }} >
              <div className=''>
                <UploadOutlined/>
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>



        </div>
        <div className='flex flex-row justify-center'>
            <Button style={{ margin: '0 8px' }} type="default" htmlType="submit">
              Finish
            </Button>
            <Button style={{ margin: '0 8px' }} type="default" onClick={() => prev()}>
                Prev
            </Button>
        </div>
      </Form>
    </div>
  )
}

export default AccidentImages