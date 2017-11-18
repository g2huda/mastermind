import React from 'react'

const GiveUpButton = ({loseGame}) => (
    <button type="button" onClick={loseGame}>
        GIVE UP
    </button>
)

export default GiveUpButton