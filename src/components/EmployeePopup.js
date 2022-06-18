import React, { useState } from 'react';
import AddEmployee from './AddEmployee';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EmployeePopup() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" style={{ margin: '2rem 0' }} onClick={handleShow}>
        Add Employee
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddEmployee closePopup={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EmployeePopup;
