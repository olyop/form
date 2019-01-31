import React from 'react'

import axios from 'axios'
import { concat, without, isNull, isArray, isError } from 'lodash'
import { apiUrlPeople as url, addEmployeesFormFields } from '../globals'

import AxiosError from '../common/AxiosError'
import Form from '../common/Form'
import EmployeesList from './EmployeesList'

import './index.css'

const config = {
  headers: { 'Accept': 'application/json' }
}

class Employees extends React.Component {

  constructor(props) {
    super(props)
    this.state = { employees: null }
    this.addEmployee = this.addEmployee.bind(this)
    this.deleteEmployee = this.deleteEmployee.bind(this)
  }

  componentDidMount() {
    axios.get(url, config)
      .then(res => this.setState({ employees: res.data }))
      .catch(err => this.setState({ employees: err }))
  }

  addEmployee = (data, callback) => {
    axios.post(url, data, config)
      .then(res => {
        this.setState(
          prevState => { employees: concat(prevState.employees, res.data) },
          () => callback(res)
        )
      })
      .catch(err => console.error(err))
  }

  deleteEmployee = data => {
    axios.delete(url, data, config)
      .then(res => {
        this.setState(
          prevState => { employees: without(prevState.employees, data) }
        )
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
          <Form
            fields={addEmployeesFormFields}
            handleSubmit={this.addEmployee}
            className="Employees__form"
          />
          <EmployeesList
            employees={this.state.employees}
            deleteEmployee={this.deleteEmployee}
          />
        </div>
      )
    } else {
      return null
    }
  }
}

export default Employees
