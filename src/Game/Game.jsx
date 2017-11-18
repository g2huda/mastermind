import React from 'react';
import PropTypes from 'prop-types'
import BoardContainer from '../Board/BoardContainer';
import GameOptions from './GameOptions'
import './Game.css'

const Game = ({settings, startGame, toggleDisplayNumbers}) => (
  <div className="Game">
    <BoardContainer />
    <GameOptions settings={settings} 
    startGame={startGame}
    toggleDisplayNumbers={toggleDisplayNumbers}
    />
    {/* <p>TIMER: {timer}</p> */}
  </div>
);

Game.PropTypes = {
  //timer: PropTypes.number.isRequired,
  startGame: PropTypes.func.isRequired
}
export default Game;
