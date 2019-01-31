import React from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'

const Submit = ({ handleSubmit }) => (
  <div className="Form__submit">
    <Button
      onClick={handleSubmit}
      variant="contained"
      children="Submit"
    />
  </div>
)

Submit.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default Submit
