import React from 'react';
import Container from 'react-bootstrap/Container';
import EmployeesList from './EmployeesList';
import EmployeePopup from './EmployeePopup';

export default function Home() {
  return (
    <Container>
      <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>Employees List</h2>
      <EmployeePopup />
      <EmployeesList />
    </Container>
  );
}
