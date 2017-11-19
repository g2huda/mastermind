import React from 'react'
import PropTypes from 'prop-types'

const CheckButton = ({currRow, activeRow, checkSelection, gameOver}) => (
    <td className="checkButton">
    {currRow===activeRow && !gameOver?
      <button onClick={checkSelection} type="button">
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