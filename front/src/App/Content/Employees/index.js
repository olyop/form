import React from 'react'

import axios from 'axios'
import { concat, isNull, isArray, isError } from 'lodash'
import { apiUrlPeople as url, addEmployeesFormFields } from '../../globals'

import AxiosError from '../../common/AxiosError'
import Form from '../../common/Form'
import EmployeesList from './EmployeesList'

import './index.css'

const config = {
  headers: { 'Accept': 'application/json' }
}

class Employees extends React.Component {

  constructor(props) {
    super(props)
    this.state = { employees: null, deleteLoading: null }
    this.addEmployee = this.addEmployee.bind(this)
    this.deleteEmployee = this.deleteEmployee.bind(this)
  }

  componentDidMount() {
    axios.get(url, config)
      .then(res => this.setState({ employees: res.data }))
      .catch(err => this.setState({ employees: err }))
  }

  addEmployee = data => {
    axios.post(url, data, config)
      .then(res => {
        this.setState(prevState => ({
          employees: concat(prevState.employees, res.data)
        }))
      })
      .catch(err => this.setState({ employees: err }))
  }

  deleteEmployee = _id => {
    this.setState(
      { deleteLoading: _id },
      () => {
        axios.delete(url, { data: { _id } })
          .then(res => {
            this.setState(prevState => ({
              employees: prevState.employees.filter(x => x._id !== res.data._id),
              deleteLoading: null
            }))
          })
          .catch(err => {
            this.setState({
              employees: err,
              deleteLoading: null
            })
          })
      }
    )
  }

  render() {
    const { employees, deleteLoading } = this.state
    if (isError(employees)) {
      // error
      return (
        <div className="Employees">
          <AxiosError err={employees} />
        </div>
      )
    } else if (isNull(employees)) {
      // loading
      return (
        <div className="Employees">
          <p>Loading...</p>
        </div>
      )
    } else if (isArray(employees)) {
      // success
      return (
        <div className="Employees">
          <Form
            fields={addEmployeesFormFields}
            handleSubmit={this.addEmployee}
            className="Employees__form"
          />
          <EmployeesList
            employees={employees}
            deleteEmployee={this.deleteEmployee}
            deleteLoading={deleteLoading}
          />
        </div>
      )
    } else {
      return null
    }
  }
}

export default Employees
