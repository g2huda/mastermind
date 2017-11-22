import React from 'react';
import PropTypes from 'prop-types';
import './Board.css';
import './components/PegHolder.css';

import Shield from './components/Shield'
import PegHolder from './components/PegHolder'
import Board from './Board'

const BoardBuilder = ({game, peg}) => (
  <div className={`Board ${game.cursorType.colour}`}> 
    <table>
      <tbody>
        <Shield values={peg.target} gameOver={game.gameOver} displayNumbers={game.displayNumbers} />
        <Board {...peg} {...game} />
      </tbody>
    </table>
    <PegHolder values={peg.availableColours} displayNumbers={game.displayNumbers} onPegClick={peg.onPegClick} />
  </div>
)

BoardBuilder.PropTypes = {
  peg: PropTypes.shape({
    availableColours: PropTypes.arrayOf(PropTypes.string),
    target: PropTypes.arrayOf(PropTypes.string),
    currentRow: PropTypes.string,
    guessResults: PropTypes.arrayOf(PropTypes.shape({
      onSpot: PropTypes.number,
      notOnSpot: PropTypes.number
    })),
    currentGuess:PropTypes.arrayOf(PropTypes.string),
    pegsOnBoard: PropTypes.array,
    completed: PropTypes.bool
  }),
  cursorType: PropTypes.string.isRequired,
  placePeg: PropTypes.func.isRequired,
  checkSelection: PropTypes.func.isRequired,
}

export default BoardBuilder;
