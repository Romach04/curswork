import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from '../components/modals/CreateType';

const Admin = () => {
    const [brandVis,  setBrandVis] = useState(false)
    const [deviceVis,  setDeviceVis] = useState(false)
    const [typeVis,  setTypeVis] = useState(false)
    return (
        <Container className="d-flex flex-column ">
            <Button onClick={() => setBrandVis(true)} variant="outline-success" 
            className="mt-2">Добавить бренд
            </Button>
            <Button onClick={() => setDeviceVis(true)} variant="outline-success" 
            className="mt-2">Добавить device
            </Button>
            <Button onClick={() => setTypeVis(true)} variant="outline-success"
            className="mt-2">Добавить тип
            </Button>
            <CreateBrand show={brandVis} onHide={() => setBrandVis(false)}/>
            <CreateDevice show={deviceVis} onHide={() => setDeviceVis(false)}/>
            <CreateType show={typeVis} onHide={() => setTypeVis(false)}/>
        </Container>
    )
}

export default Admin;