import React, { useContext } from 'react';
import {Card, Form, Col, Image, Button} from 'react-bootstrap';
import star from '../assets/img/star.png';
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTER } from '../utils/const';
import {Context} from '../index';
import '../App.css'
const BasketItem = ({device}) => {

    const navigate = useNavigate()
    const {devices} = useContext(Context)
    return (
        <Col md={3} className='d-flex mt-3 ms-auto me-auto' onClick={() => navigate(DEVICE_ROUTER + '/' + device.id)}>
            <Card style={{width : 150, cursor: 'pointer',}} className='font-roboto' border={"light"}>
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
                <div>
                {device.name}
                </div>

                
            </Card>
        </Col>
    );
};

export default BasketItem;