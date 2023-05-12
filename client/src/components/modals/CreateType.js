import React, { useState } from 'react';
import { Button, Modal, Form} from 'react-bootstrap';
import { createType } from '../http/deviceApi';
const CreateType = ({show, onHide}) => {
  const [value, setValue] = useState('')

  const addType = () => {
      createType({name: value}).then(data => {
          setValue('')
      }).catch(e => alert(e.message))
      .finally(onHide())
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
            <Form.Control
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={"Введите название типа"}/>
        </Form>
      </Modal.Body>
      <Modal.Footer>
            <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
            <Button variant='outline'
            value={value}
            onChange={e => setValue(e.target.value)}
            onClick={addType}>Добавить</Button>
      </Modal.Footer>
    </Modal>
    );
};

export default CreateType;