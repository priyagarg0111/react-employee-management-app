import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import EmployeeContext from '../store/EmployeeContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeEdit = () => {
  const { employeeDetail, updateEmployee, employeesList } =
    useContext(EmployeeContext);
  const { name, email, phone } = employeeDetail;
  const { id } = useParams();
  const navigate = useNavigate();
  const [ename, setEname] = useState(name);
  const [ephone, setEphone] = useState(phone);
  const [successMessage, setSuccessMessage] = useState('');

  const updateSubmitHandler = (event) => {
    event.preventDefault();

    const updatedEmp = {
      id: parseInt(id),
      name: ename,
      email,
      phone: ephone,
    };

    updateEmployee(updatedEmp);
    setSuccessMessage('Employee details are updated successfully!');
  };

  return (
    <Container>
      <Row>
        <Col sm={6}>
          <Button
            className="mt-5"
            bg="dark"
            variant="success"
            onClick={() => navigate('/')}
          >
            Go back
          </Button>
          <Form onSubmit={updateSubmitHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                defaultValue={ename}
                onChange={(e) => setEname(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control defaultValue={email} type="email" disabled />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                defaultValue={ephone}
                onChange={(e) => setEphone(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

          {successMessage && (
            <Alert variant="success" className="mt-4">
              {successMessage}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeeEdit;
