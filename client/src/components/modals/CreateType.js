import React from 'react';
import { Button, Modal, Form} from 'react-bootstrap';
const CreateType = ({show, onHide}) => {
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
            <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
            <Button variant='outline' onClick={onHide}>Добавить</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button>Close</Button>
      </Modal.Footer>
    </Modal>
    );
};

export default CreateType;