import React, { useContext, useState } from 'react';
import {Card, Form, Col, Image} from 'react-bootstrap';
import star from '../assets/img/star.png';
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTER } from '../utils/const';
import {Context} from '../index';
import '../App.css'
import './style/Device.css'
 
const DeviceItem = ({device}) => {

    const navigate = useNavigate()
    const {devices} = useContext(Context)
    return ( 
           <Col md={3} className='mt-3 ms-4 item animated fadeInLeft' style={{boxShadow:'0 4px 10px rgb(0 0 0 / 10%)', paddingLeft: '44px', padding: '10px 0 10px 44px', }} onClick={() => navigate(DEVICE_ROUTER + '/' + device.id)}>
                <Card style={{width : 150, cursor: 'pointer', }} className='font-roboto' border={"light"}>
                    <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
                    <div className='text-black-50 mt-1 d-flex justify-content-between align-items-center'>
                        {devices.brands.map(brand =>
                            device.brandId === brand.id ? brand.name : ''
                        )}
                        <div className='d-flex align-items-center'> 
                            <div>{device.rating}</div>
                            <Image width={17} height={17} src={star}/>
                        </div>
                        
                    </div>
                    <div>{device.name}</div>
                </Card>
            </Col>

    );
};

export default DeviceItem;