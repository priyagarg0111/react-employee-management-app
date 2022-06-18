import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import EmployeeContext from '../store/EmployeeContext';
import { useNavigate } from 'react-router-dom';

function EmployeeItem(props) {
  const { fetchEmployee, deleteEmployee } = useContext(EmployeeContext);
  const navigate = useNavigate();
  const { id, name, email, phone } = props.employee;

  const viewEmployeeHandler = () => {
    navigate(`/employee/detail/${id}`);
    fetchEmployee(id);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        <Button
          variant="primary"
          onClick={() => {
            navigate(`/employee/edit/${id}`);
            fetchEmployee(id);
          }}
        >
          Update
        </Button>
        <Button
          variant="danger"
          style={{ margin: '0 1rem' }}
          onClick={() => deleteEmployee(id)}
        >
          Delete
        </Button>
        <Button variant="info" onClick={viewEmployeeHandler}>
          View
        </Button>
      </td>
    </tr>
  );
}

export default EmployeeItem;
