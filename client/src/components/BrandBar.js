import { observer } from 'mobx-react-lite';
import React from 'react';
import { useContext } from 'react';
import { Context } from '../index';
import {Card, Form} from 'react-bootstrap';
const BrandBar = observer(() => {

    const {devices} = useContext(Context)
    return (
        <Form className='d-flex'>
            {devices.brands.map(brand =>
                <Card
                    key={brand.id}
                    className="p-3"
                >
                    {brand.name}

                </Card>

            )}
        </Form>
    );
});

export default BrandBar;