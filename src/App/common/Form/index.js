import React from 'react'
import PropTypes from 'prop-types'

import { toNumber } from 'lodash'
import { serializeFields, errState, checkIfErrors, reduceToErrState, newState } from './helpers'

import Heading from './Heading'
import Fields from './Fields'
import Submit from './Submit'

import './index.css'

class Form extends React.Component {

  constructor(props) {
    super(props)
    this.state = newState(this.props.fields)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (type, camelCase) => event => {
    const { value, name } = event.target
    if (type === 'text' || type === 'number' || type === 'selection') {
      this.setState(prevState => ({
        fields: {
          ...prevState.fields,
          [camelCase]: type === 'number' ? toNumber(value) : value
        }
      }))
    }
    if (type === 'date' || type === 'mobileNumber') {
      this.setState(prevState => ({
        fields: {
          ...prevState.fields,
          [camelCase]: {
            ...prevState.fields[camelCase],
            [name]: value
          }
        }
      }))
    }
    if (type === 'boolean') {
      this.setState(prevState => ({
        fields: {
          ...prevState.fields,
          [camelCase]: !prevState.fields[camelCase]
        }
      }))
    }
  }

  handleSubmit = () => {
    const fieldsErr = errState(this.props.fields, this.state.fields)
    if (checkIfErrors(fieldsErr)) {
      this.setState({ fieldsErr: reduceToErrState(fieldsErr) })
    } else {
      this.props.handleSubmit(this.state.fields, res => this.handleStatus(res))
      this.setState(newState(this.props.fields))
    }
  }

  handleStatus = res => {
    this.setState({ status: { code: res.status, text: res.statusText } })
    setTimeout(() => {
      this.setState({ status: { code: null, text: '' } })
    }, 5000)
  }

  render() {
    return (
      <div className="Form">
        <Heading
          text={this.props.heading}
        />
        <Fields
          state={this.state}
          handleChange={this.handleChange}
          fields={this.props.fields}
        />
        <Submit
          handleSubmit={this.handleSubmit}
          status={this.state.status}
        />
      </div>
    )
  }
}

const SerializeForm = props => (
  <Form
    {...props}
    fields={serializeFields(props.fields)}
  />
)

SerializeForm.propTypes = {
  heading: PropTypes.string,
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSubmit: PropTypes.func.isRequired
}
SerializeForm.defaultProps = {
  heading: 'Form'
}

export default SerializeForm
