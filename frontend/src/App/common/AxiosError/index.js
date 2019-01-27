import React from 'react'

import { upperFirst } from 'lodash'

import './index.css'

const errorHeadings = ['request', 'response']

const AxiosErrorPre = ({ obj }) => (
  <pre className="AxiosError__pre">
    {JSON.stringify(obj, null, 2)}
  </pre>
)

const AxiosErrorListItem = ({ item, err }) => (
  <div className="AxiosError__item">
    <h2 className="AxiosError__h2">{upperFirst(item)}</h2>
    <AxiosErrorPre obj={err[item === 'request' ? 'config' : item] || {}} />
  </div>
)

const AxiosError = ({ err }) => {
  if (err.response) { console.error(err.response.data) }
  return (
    <div className="AxiosError">
      <h1 className="AxiosError__h1">Axios Error</h1>
      <div className="AxiosError__list">
        {errorHeadings.map(item => (
          <AxiosErrorListItem
            key={item}
            item={item}
            err={err}
          />
        ))}
      </div>
    </div>
  )
}

export default AxiosError
