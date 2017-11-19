import React from 'react';
import PropTypes from 'prop-types';
import './Board.css';

import Cell from './components/Cell';
import PegHolderContainer from './components/PegHolderContainer';
import CheckButton from './components/CheckButton';
import KeyPegHolder from './components/KeyPegHolder';
import Shield from './components/Shield';

const buildBoard = (game, peg, cursor, placePeg, checkSelection) => {
      var {availableColours, pegsOnBoard, currentRow, guessResults, target, completed} = peg;
      
      return pegsOnBoard.map((rowVal, rowInd) => {
        let currRow = pegsOnBoard.length-rowInd;
        return (
        <tr key={`board${rowInd}`}>
          <td>
            <KeyPegHolder key={`keyPegHolder${rowInd}`} keyPegs={target} guessResult={guessResults[currRow-1]}/>
          </td>
          {rowVal.map((colVal, colInd) =>(
          <td key={`peg${rowInd}${colInd}`}>
            <Cell key={`${rowInd}${colInd}`} currentClass={pegsOnBoard[currRow-1][colInd]}
              displayVal={game.displayNumbers} 
              value={availableColours.indexOf(pegsOnBoard[currRow-1][colInd])+1}
              onClick={()=>placePeg(currRow, colInd, cursor)}/>
          </td>))
          }
          <CheckButton key={rowInd} currRow={currRow} 
          activeRow={currentRow} 
          checkSelection={checkSelection}
          completed={completed}/>
        </tr>
      )})
}

const Board = ({game, peg, cursorType, placePeg, checkSelection}) => (
  <div className={`Board ${cursorType}`}> 
    <table>
      <tbody>
        <Shield target={peg.target} gameOver={game.gameOver} />
        {buildBoard(game, peg, cursorType, placePeg, checkSelection)}
      </tbody>
    </table>
    <PegHolderContainer />
  </div>
)

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
