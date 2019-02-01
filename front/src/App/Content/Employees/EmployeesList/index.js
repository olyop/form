import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'

import './index.css'

const Employee = ({deleteEmployee,deleteLoading,_id,firstName,familyName,mobileNumber,email}) => (
  <div className="Employee">
    <div className="Employee__info">
      <h1 className="Employee__name">
        {firstName} {familyName}
      </h1>
      <div>
        <p className="Employee__contact">
          ({mobileNumber.countryCode}) {mobileNumber.phoneNumber}
        </p>
        <p className="Employee__contact">{email}</p>
      </div>
    </div>
    <div className="Employee__delete">
      {deleteLoading === _id ? <CircularProgress /> : (
        <i
          onClick={() => deleteEmployee(_id)}
          className="Employee__delete-icon material-icons"
          children="delete"
        />
      )}
    </div>
  </div>
)

const EmployeesList = ({ employees, deleteEmployee, deleteLoading }) => (
  <div className="EmployeesList">
    {employees.map(employee => (
      <Employee
        {...employee}
        deleteEmployee={deleteEmployee}
        deleteLoading={deleteLoading}
        key={employee._id}
      />
    ))}
  </div>
)

export default EmployeesList
