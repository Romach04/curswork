import React, { useContext } from 'react';
import {observer} from 'mobx-react-lite';
import {Context} from '../index';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import '../App.css'
const TypeBar = observer(() => {
    const {devices} = useContext(Context)
    
    return (
        <ListGroup>
            {devices.types.map(type =>
                <ListGroup.Item
                    className='font-roboto'
                    style={{cursor: 'pointer'}}
                    active={type.id === devices.selectedType.id}
                    onClick={() => devices.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;