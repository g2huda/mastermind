import React from 'react';
import PropTypes from 'prop-types';

import Shield from './components/Shield'
import PegHolder from './components/PegHolder'
import Board from './Board'

const BoardBuilder = ({shield, board, boardDispatch, pegHolder, pegHolderDispatch}) => (
  <div className={`Board ${board.cursorType.colour}`}> 
    <table>
      <tbody>
        <Shield {...shield} />
        <Board {...board} {...boardDispatch} />
      </tbody>
    </table>
    <PegHolder {...pegHolder} {...pegHolderDispatch} />
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
