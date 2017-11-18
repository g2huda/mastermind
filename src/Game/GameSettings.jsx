import React from 'react'
import PropTypes from 'prop-types'

import GameSettingsFactory from './GameSettingsFactory'

const GameSettings = ({gameSettings}) => (
    <form>
        {gameSettings.settings.options.map((setting, ind) => 
          GameSettingsFactory.build({...gameSettings, value: setting, key:setting}))}
    </form>
)

GameSettings.PropTypes = {
  gameSettings: PropTypes.shape({
    startNewGame: PropTypes.func,
    toggleDisplayNumbers: PropTypes.func.isRequired,
    loseGame: PropTypes.func.isRequired,
    startGame: PropTypes.func.isRequired,
    settings: PropTypes.shape({
      toggleDisplayNumbers: PropTypes.bool.isRequired,
      options: PropTypes.arrayOf(PropTypes.string).isRequired 
    }) 
  })
}
export default GameSettings