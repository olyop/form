import React from 'react'

import { upperFirst } from 'lodash'

import './index.css'

const AxiosErrorPre = props => (
  <pre className="AxiosError__pre">
    {JSON.stringify(props.obj, null, 2)}
  </pre>
)

const AxiosError = props => {
  if (props.err.response) {
    console.error(props.err.response.data)
  }
  return (
    <div className="AxiosError">
      <h1 className="AxiosError__h1">Axios Error </h1>
      <ul>
        {['config', 'response'].map((item, index) => (
          <li key={index}>
            <h2 className="AxiosError__h2">{upperFirst(item)}:</h2>
            <AxiosErrorPre obj={props.err[item] || {}} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AxiosError
