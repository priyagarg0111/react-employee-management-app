import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EmployeeContext from '../store/EmployeeContext';

const EmployeeDetail = () => {
  const navigate = useNavigate();
  const { employeeDetail } = useContext(EmployeeContext);
  const { name, email, phone } = employeeDetail;

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
          <Card className="mt-3">
            <Card.Header>Employee Name: {name}</Card.Header>
            <Card.Body>
              <Card.Title>Email: {email}</Card.Title>
              <Card.Text>Phone: {phone}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeeDetail;
