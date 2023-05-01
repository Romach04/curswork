import React from "react";
import {Container, Col, Image, Form, Row, Card, Button} from 'react-bootstrap';
import starBig from '../assets/img/starBig.png';
const DevicePage = () => {
    const device = {id:1, name: 'Iphone', price: 25000, rating: 5 , img: 'https://cache3.youla.io/files/images/780_780/5a/d7/5ad7cde185e9d22b4a602862.jpg' };
    const description = [
        {id: 1, title: 'Оперативная память', description: '3 гб'},
        {id: 2, title: 'Оперативная память', description: '3 гб'},
        {id: 3, title: 'Оперативная память', description: '3 гб'},
        {id: 4, title: 'Оперативная память', description: '3 гб'},
        {id: 5, title: 'Оперативная память', description: '3 гб'},
    ]
    return (
        <Container className="mt-5">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Form className="d-flex flex-column aling-items-center">
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
                        style={{width: 300, height:300, fontSize: 30}}
                    >  
                        <h3>{device.price} р.</h3>
                        <Button variant="info">Добавить в корзину</Button>
                    </Card>
                </Col>

            </Row>
            <Row className="d-flex flex-column mt-5">
                <h1>Характеристки</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'Lightgray' : 'transparent', 
                    padding: 10}}>
                        {info.title} : {info.description}
                    </Row>
                )}
            </Row>

        </Container>
    )
}

export default DevicePage;