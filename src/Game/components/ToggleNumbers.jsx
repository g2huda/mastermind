import React from 'react'
import PropTypes from 'prop-types'

const ToggleNumbers = ({value, displayNumbers, toggleDisplayNumbers}) => (
    <div>
        <input
        type="checkbox"
        value={value}
        checked={displayNumbers}
        onChange={toggleDisplayNumbers}
        />
        Display Numbers
    </div>
)

ToggleNumbers.PropTypes = {
    value: PropTypes.string.isRequired,
    displayNumbers: PropTypes.bool.isRequired,
    toggleDisplayNumbers: PropTypes.func.isRequired
}
export default ToggleNumbers