import React, { useReducer } from 'react';
import EmployeeContext from './EmployeeContext';
import { initialState } from './EmployeeContext';
import actions from './actions';
import EmployeeReducer from './EmployeeReducer';

//Create Provider
const EmployeeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(EmployeeReducer, initialState);

  const value = {
    employeesList: state.employeesList || [],
    employeeDetail: state.employeeDetail,
    addEmployee: (employee) =>
      dispatch({ type: actions.ADD_EMPLOYEE, employee }),
    deleteEmployee: (empId) =>
      dispatch({ type: actions.DELETE_EMPLOYEE, empId }),
    fetchEmployee: (empId) => dispatch({ type: actions.FETCH_EMPLOYEE, empId }),
    updateEmployee: (employee) =>
      dispatch({ type: actions.UPDATE_EMPLOYEE, employee }),
  };

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeProvider;
