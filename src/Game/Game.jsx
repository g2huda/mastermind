import React from 'react';
import BoardContainer from '../Board/BoardContainer';
import GameSettings from './GameSettings'
import './Game.css'

const Game = ({gameSettings}) => (
  <div className="Game">
    <BoardContainer />
    <GameSettings gameSettings={gameSettings} />
    {/* <p>TIMER: {timer}</p> */}
  </div>
);

export default Game;
