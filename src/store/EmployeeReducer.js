import actions from './actions';

// Create reducer to Handle Actions
const EmployeeReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_EMPLOYEE:
      return {
        employeesList: [
          ...state.employeesList,
          {
            id: action.employee.id,
            name: action.employee.name,
            email: action.employee.email,
            phone: action.employee.phone,
          },
        ],
      };

    case actions.DELETE_EMPLOYEE:
      const filteredEmployees = state.employeesList.filter(
        (emp) => emp.id !== action.empId
      );
      return {
        employeesList: filteredEmployees,
      };

    case actions.FETCH_EMPLOYEE:
      const fetchedEmployee = state.employeesList.filter(
        (emp) => emp.id === action.empId
      );
      return {
        employeeDetail: {
          id: fetchedEmployee[0].id,
          name: fetchedEmployee[0].name,
          email: fetchedEmployee[0].email,
          phone: fetchedEmployee[0].phone,
        },
        employeesList: [...state.employeesList],
      };

    case actions.UPDATE_EMPLOYEE:
      const existedEmployeeList = [...state.employeesList];

      const matchedIndex = existedEmployeeList.findIndex(
        (emp) => emp.id === action.employee.id
      );

      if (matchedIndex < 0) {
        existedEmployeeList.push({ ...action.employee });
      } else {
        const updatedEmployee = { ...existedEmployeeList[matchedIndex] };
        updatedEmployee.name = action.employee.name;
        updatedEmployee.phone = action.employee.phone;
        existedEmployeeList[matchedIndex] = updatedEmployee;
      }

      return {
        employeesList: existedEmployeeList,
        employeeDetail: existedEmployeeList[matchedIndex],
      };

    default:
      return state;
  }
};

export default EmployeeReducer;
