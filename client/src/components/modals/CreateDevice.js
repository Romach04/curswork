import React, { useContext, useState } from 'react';
import { Button, Modal, Form, Dropdown, Col, Row} from 'react-bootstrap';
import { Context } from '../../index';
const CreateDevice = ({show, onHide}) => {

    const {devices} = useContext(Context)
    const [info, setInfo] = useState([])


    const addInfo = () => {
      setInfo([...info, {title: '', desciption: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
      setInfo(info.filter(i => i.number !== number))
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Dropdown className='mt-4'>
              <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
              <Dropdown.Menu>
                  {devices.types.map(type =>
                    <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                  )}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className='mt-4'>
              <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
              <Dropdown.Menu>
                  {devices.brands.map(brand =>
                    <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                  )}
              </Dropdown.Menu>
            </Dropdown>
            <Form.Control
              className='mt-4'
              placeholder='Введите название файла'
            />
            <Form.Control
              className='mt-4'
              placeholder='Введите название устройства'
            />
            <Form.Control
              className='mt-4'
              placeholder='Загрузите файл'
              type='file'
            />
            <Button
            className='mt-2'
            onClick={addInfo}
            
            >Добавить new устройство</Button> 
            {
              info.map(i => 
                <Row className='mt-5 d-flex' key={i.number}>
                    <Col md={4}>
                        <Form.Control
                          placeholder='Название хар-ки'
                        />
                          
                    </Col>

                    <Col md={4}>
                        <Form.Control
                          placeholder='Введите описание'
                        />
                          
                    </Col>
                    <Col md={4}>
                        <Button
                         onClick={() => removeInfo(i.number)}
                        variant='outline-danger'>Удалить</Button>
                          
                    </Col>
                </Row>
            )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
            <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
            <Button variant='outline' onClick={onHide}>Добавить</Button>  
        <Button>Close</Button>
      </Modal.Footer>
    </Modal>
    );
};

export default CreateDevice;