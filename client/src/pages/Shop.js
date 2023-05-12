/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import {Container, Col, Row} from 'react-bootstrap';
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import { observer } from "mobx-react-lite";
import {Context} from '../index';
import { fechBrand, fechTypes, fechDevice } from "../components/http/deviceApi";
import Pages from "../components/Pages";
import '../App.css'
const Shop = observer(() => {
    const {devices} = useContext(Context)

    useEffect(() => {
        fechTypes().then(data => devices.setTypes(data))
        fechBrand().then(data =>devices.setBrands(data))
        fechDevice(null, null, 1, 3).then(data =>{
            devices.setDevices(data)
            // devices.SetTotalCount(data.count)
        })
    }, [])


    useEffect(() => {
        fechDevice(devices.selectedType.id, devices.selectedBrand.id, devices.page, 3).then(data =>{
            devices.setDevices(data)
            // devices.SetTotalCount(data.count)
        })   
    }, [devices.page, devices.selectedType, devices.selectedBrand])
    return (
        <Container className="bcf" style={{boxShadow:'4px 4px 10px rgb(0 0 0 / 10%)'}}>
            <Row className="mt-3">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    )
})

export default Shop;