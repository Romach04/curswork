import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import {Form} from 'react-bootstrap';
import DeviceItem from './DeviceItem';

const DeviceList = observer(() => {
    const {devices} = useContext(Context)
    return (
        <Form className='d-flex flex-wrap mt-5' >
            {devices.devices.map(device =>
                <DeviceItem key={device.id} device={device} />
            )}
        </Form>
    );
});

export default DeviceList;