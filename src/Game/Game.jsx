import React from 'react';
import PropTypes from 'prop-types'
import BoardContainer from '../Board/BoardContainer';
import GameSettings from './GameSettings'
import './Game.css'

const Game = ({/*settings, startGame, toggleDisplayNumbers*/ gameSettings}) => (
  <div className="Game">
    <BoardContainer />
    <GameSettings gameSettings={gameSettings}/* settings={settings} 
    startGame={startGame}
    toggleDisplayNumbers={toggleDisplayNumbers} */
    />
    {/* <p>TIMER: {timer}</p> */}
  </div>
);

Game.PropTypes = {
  //timer: PropTypes.number.isRequired,
  startGame: PropTypes.func.isRequired
}
export default Game;
