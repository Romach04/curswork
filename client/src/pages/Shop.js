import React, { useContext, useEffect } from "react";
import {Container, Col, Row} from 'react-bootstrap';
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import { observer } from "mobx-react-lite";
import {Context} from '../index';
import { fechBrand, fechTypes, fechDevice } from "../components/http/deviceApi";
const Shop = observer(() => {
    const {devices} = useContext(Context)

    useEffect(() => {
        fechTypes().then(data => devices.setTypes(data))
        fechBrand().then(data =>devices.setBrands(data))
        fechDevice().then(data =>devices.setDevices(data))
    }, [])
    return (
        <Container>
            <Row className="mt-3">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                </Col>
            </Row>
        </Container>
    )
})

export default Shop;