import React from 'react'

import axios from 'axios'
import { concat, isNull, isArray, isError } from 'lodash'
import { apiUrlPeople as url, addEmployeesFormFields } from '../globals'

import AxiosError from '../common/AxiosError'
import Form from '../common/Form'

import './index.css'

class Employees extends React.Component {

  constructor(props) {
    super(props)
    this.state = { employees: null }
    this.addEmployee = this.addEmployee.bind(this)
  }

  componentDidMount() {
    axios.get(url)
      .then(res => this.setState({ employees: res.data }))
      .catch(err => this.setState({ employees: err }))
  }

  addEmployee = (data, callback) => {
    axios.post(url, data)
      .then(res => {
        callback(res)
        this.setState({ employees: concat(this.state.employees, res.data) })
      })
      .catch(err => console.error(err))
  }

  render() {
    if (isError(this.state.employees)) {
      // error
      return (
        <div className="Employees">
          <AxiosError err={this.state.employees} />
        </div>
      )
    } else if (isNull(this.state.employees)) {
      // loading
      return (
        <div className="Employees">
          <p>Loading...</p>
        </div>
      )
    } else if (isArray(this.state.employees)) {
      // success
      return (
        <div className="Employees">
          <h1 className="Employees__title">Employees</h1>
          <pre>{JSON.stringify(this.state.employees, null, 2)}</pre>
          <Form
            heading="Add Employee"
            fields={addEmployeesFormFields}
            handleSubmit={this.addEmployee}
          />
        </div>
      )
    } else {
      return null
    }
  }
}

export default Employees
