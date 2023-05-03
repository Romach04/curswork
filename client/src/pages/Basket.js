import React, {useContext} from "react";
import { Container, Form } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from '../index';
import {Spinner} from 'react-bootstrap';
import DeviceItem from "../components/DeviceItem";
const Basket = observer(() => {
    const {devices} = useContext(Context)
    return (
        <Container style={{marginTop: '100px'}} className='d-flex justify-content-center align-items-center'>
            <Form >
                <h2>Корзина пуста</h2>
            </Form>
        </Container>
    )
})

export default Basket;










/* {devices.basket.map(device =>
    <DeviceItem key={device.id} device={device}/>
)} */
