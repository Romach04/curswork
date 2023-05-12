import React, { useEffect, useState, useContext } from "react";
import {Container, Col, Image, Form, Row, Card, Button} from 'react-bootstrap';
import starBig from '../assets/img/starBig.png';
import { useParams } from "react-router-dom";
import { fechOneDevice, addToBasket } from "../components/http/deviceApi";
import {Context} from '../index'
import '../App.css'
const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    const {devices} = useContext(Context)

    useEffect(() => {
        fechOneDevice(id).then(data => setDevice(data))
    }, [])


    const add = () => {
        const formData = new FormData()
        formData.append('deviceId', id)
        addToBasket(formData).then(response => alert(`Товар ` + device.name + ` был добавлен в вашу корзину!`))
    }

    return (
        <Container className="mt-5 font-roboto bcf" style={{boxShadow:'0 4px 10px rgb(0 0 0 / 10%)', height: '700px' }}>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={4}>
                    <Form className="d-flex align-items-center">
                        <h2>{device.name}</h2>
                        <div className="d-flex align-items-center justify-content-center"
                        style={{background: `url(${starBig}) no-repeat center center`,
                        width:240, color:'white', fontSize: 40, height:240, backgroundSize: 'cover'}}
                        >
                        {device.rating}
                        </div>

                    </Form>

                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height:300, fontSize: 30, marginTop: '35px', borderRadius: '2px'}}
                    >  
                        <h3>{device.price} р.</h3>
                        <Button 
                        onClick={add}
                        variant="info"
                        >Добавить в корзину</Button>
                    </Card>
                </Col>

            </Row>
            <Row className="d-flex flex-column mt-5">
                <h1>Характеристки</h1>
                {device.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'Lightgray' : 'transparent', 
                    padding: 10, marginLeft: 1}}>
                        {info.title} : {info.description}
                    </Row>
                )}
            </Row>

        </Container>
    )
}

export default DevicePage;