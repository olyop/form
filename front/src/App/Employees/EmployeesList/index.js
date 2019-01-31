import React from 'react'

import './index.css'

const Employee = ({ deleteEmployee, _id, firstName, familyName, mobileNumber, email }) => (
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
      <i
        onClick={() => deleteEmployee(_id)}
        className="Employee__delete-icon material-icons"
        children="delete"
      />
    </div>
  </div>
)

const EmployeesList = ({ employees, deleteEmployee }) => (
  <div className="EmployeesList">
    {employees.map(employee => (
      <Employee
        {...employee}
        deleteEmployee={deleteEmployee}
        key={employee._id}
      />
    ))}
  </div>
)

export default EmployeesList
