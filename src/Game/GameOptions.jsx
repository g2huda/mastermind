import React from 'react'
import PropTypes from 'prop-types'
const GameOptions = ({settings, startGame, toggleDisplayNumbers}) => (
    <form>
        <label>
            <input
            type="checkbox"
            value={settings.options[0]}
            checked={settings.displayNumbers}
            onChange={toggleDisplayNumbers}
            />

          {settings.options[0]}
        </label>
    <button type="submit" onClick={startGame}>
    NEW GAME
  </button>
  </form>
)

export default GameOptions