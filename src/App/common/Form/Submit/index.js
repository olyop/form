import React from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import { inRange } from 'lodash'

const determineColor = code => {
  if (inRange(code, 200, 399)) { return '#4CAF50' }
  else if (inRange(code, 400, 599)) { return '#F44336' }
  else { return '#333333' }
}

const Submit = ({ handleSubmit, status }) => (
  <div className="Form__submit">
    <Button
      onClick={handleSubmit}
      variant="contained"
      children="Submit"
    />
    {status.code === null ? null : (
      <p
        style={{ color: determineColor(status.code) }}
        children={`${status.code} - ${status.text}`}
        className="Form__status"
      />
    )}
  </div>
)

Submit.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  status: PropTypes.object.isRequired
}

export default Submit
