import React from 'react'
import PropTypes from 'prop-types'

const CheckButton = ({currRow, activeRow, checkSelection}) => (
    <td className="checkButton">
    {currRow===activeRow?
      <button onClick={checkSelection} type="submit">
        CHECK
      </button>:null}
    </td>
)
CheckButton.PropTypes = {
    currRow: PropTypes.number.isRequired,
    activeRow: PropTypes.number.isRequired,
    checkSelection: PropTypes.func.isRequired
}
export default CheckButton