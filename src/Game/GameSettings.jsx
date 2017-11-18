import React from 'react'
import PropTypes from 'prop-types'

import GameSettingsFactory from './GameSettingsFactory'

const GameSettings = ({gameSettings}) => (
    <form className="GameSettings">
        <header> Game Settings </header>
        {gameSettings.settings.options.map((setting, ind) => 
          GameSettingsFactory.build({...gameSettings, value: setting, key:setting}))}
        Total wins: {gameSettings.totalWon} <br/>
        total Lost: {gameSettings.totalLost}
    </form>
)

GameSettings.PropTypes = {
  gameSettings: PropTypes.shape({
    startNewGame: PropTypes.func,
    toggleDisplayNumbers: PropTypes.func,
    loseGame: PropTypes.func,
    startGame: PropTypes.func,
    settings: PropTypes.shape({
      displayNumbers: PropTypes.bool,
      options: PropTypes.arrayOf(PropTypes.string).isRequired 
    }),
    totalWon: PropTypes.number.isRequired,
    totalLost: PropTypes.number.isRequired 
  })
}
export default GameSettings