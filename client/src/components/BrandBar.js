import { observer } from 'mobx-react-lite';
import React from 'react';
import { useContext } from 'react';
import { Context } from '../index';
import {Card, Form, Row} from 'react-bootstrap';
import '../App.css'
const BrandBar = observer(() => {

    const {devices} = useContext(Context)
    return (
        <Form className='d-flex flex-wrap font-roboto' style={{fontFamily: 'Roboto', marginTop: '14px'}}>
            {devices.brands.map(brand =>
                <Card
                    style={{cursor: 'pointer', marginLeft:50, backgroundColor: 'rgb(255 246 246)'}}
                    key={brand.id}
                    className="p-3 font-roboto"
                    onClick={() => devices.setSelectedBrand(brand)}
                    border={brand.id === devices.selectedBrand.id ? 'danger' : 'light'}
                    
                >
                    {brand.name}

                </Card>

            )}
        </Form>
    );
});

export default BrandBar;