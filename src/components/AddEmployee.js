import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import classes from './Error.module.css';
import EmployeeContext from '../store/EmployeeContext';

function AddEmployee({ closePopup }) {
  const { employeesList, addEmployee } = useContext(EmployeeContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const submitFormHandler = (event) => {
    event.preventDefault();

    const newEmp = {
      id: employeesList.length + 1,
      name,
      email,
      phone,
    };

    if (name === '') {
      setErrors({ name: true });
      return;
    } else if (email === '') {
      setErrors({ email: true });
      return;
    } else if (phone === '') {
      setErrors({ phone: true });
      return;
    } else if (phone.trim().length !== 10 && !phone.match(/^[6-9]\d{9}$/)) {
      setErrors({ phone: true });
      return;
    }

    addEmployee(newEmp);
    closePopup();
  };

  return (
    <>
      <Form onSubmit={submitFormHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            placeholder="Enter full name..."
            value={name}
            className={errors.name ? classes.errorInput : ''}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && (
            <span className={classes.errorHint}>Please enter full name!</span>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            placeholder="Enter email address..."
            value={email}
            type="email"
            className={errors.email ? classes.errorInput : ''}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <span className={classes.errorHint}>
              Please enter an email address!
            </span>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            placeholder="Enter phone number..."
            value={phone}
            className={errors.phone ? classes.errorInput : ''}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && (
            <span className={classes.errorHint}>
              Please enter a valid phone number!
            </span>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default AddEmployee;
