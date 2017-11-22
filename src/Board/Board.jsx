import React from 'react';
import PropTypes from 'prop-types';
import './Board.css';

import CheckButton from './components/CheckButton';
import KeyPegHolder from './components/KeyPegHolder';
import CellFactory,{PEG_ON_BOARD} from './components/CellFactory'


const Board = ({ gameOver, pegsOnBoard, currentRow, guessResults, 
  target, cursorType, placePeg, checkSelection, displayNumbers}) => {
  return pegsOnBoard.map((rowVal, rowInd) => {
    return (
    <tr key={`board${rowInd}`}>
      <td>
        <KeyPegHolder key={`keyPegHolder${rowInd}`} keyPegs={target} guessResult={guessResults[rowInd]}/>
      </td>
      {rowVal.map((colVal, colInd) =>(
      <td key={`peg${rowInd}${colInd}`}>
        {CellFactory.build({type: PEG_ON_BOARD, key: `${rowInd}${colInd}`, 
        colour: colVal, 
        displayNumbers: displayNumbers,
        placePeg: placePeg,
        rowInd: rowInd, colInd: colInd, cursor:cursorType})}
      </td>))
      }
      <CheckButton key={rowInd} currRow={rowInd+1} 
      activeRow={currentRow} 
      checkSelection={checkSelection}
      gameOver={gameOver}/>
    </tr>
  )})
}

Board.PropTypes = {
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

export default Board;
