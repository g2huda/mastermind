import React from 'react';
import PropTypes from 'prop-types'
import BoardContainer from '../Board/BoardContainer';
import './Game.css'

const Game = ({startGame, timer}) => (
  <div className="Game">
    <BoardContainer />
    <button type="submit" onClick={startGame}>NEW GAME</button>
    <p>TIMER: {timer}</p>
  </div>
);

Game.PropTypes = {
  timer: PropTypes.number.isRequired,
  startGame: PropTypes.func.isRequired
}
export default Game;
