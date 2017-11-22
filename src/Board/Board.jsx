import React from 'react';
import PropTypes from 'prop-types';
import './Board.css';
import './components/PegHolder.css';

import Shield from './components/Shield'
import PegHolder from './components/PegHolder'
import Cell from './components/Cell';
import CheckButton from './components/CheckButton';
import KeyPegHolder from './components/KeyPegHolder';
//import RowFactory,{BOARD} from './components/RowFactory'

const buildBoard = (game, peg, cursor, placePeg, checkSelection) => {
      var {pegsOnBoard, currentRow, guessResults, target} = peg;
      
      return pegsOnBoard.map((rowVal, rowInd) => {
        return (
          //{RowFactory.build({type:BOARD, rowInd:rowInd, keyPegs: target, guessResult={guessResults[currRow-1]}})}
        <tr key={`board${rowInd}`}>
          <td>
            <KeyPegHolder key={`keyPegHolder${rowInd}`} keyPegs={target} guessResult={guessResults[rowInd]}/>
          </td>
          {rowVal.map((colVal, colInd) =>(
          <td key={`peg${rowInd}${colInd}`}>
            <Cell key={`${rowInd}${colInd}`} currentClass="Cell"
              colour={colVal}
              displayNumbers={game.displayNumbers} 
              onClick={()=>placePeg(rowInd, colInd, cursor)}/>
          </td>))
          }
          <CheckButton key={rowInd} currRow={rowInd+1} 
          activeRow={currentRow} 
          checkSelection={checkSelection}
          gameOver={game.gameOver}/>
        </tr>
      )})
}

const Board = ({game, peg}) => (
  <div className={`Board ${game.cursorType.colour}`}> 
    <table>
      <tbody>
        <Shield values={peg.target} gameOver={game.gameOver} displayNumbers={game.displayNumbers} />
        {buildBoard(game, peg, game.cursorType, peg.placePeg, peg.checkSelection)}
      </tbody>
    </table>
    <PegHolder values={peg.availableColours} displayNumbers={game.displayNumbers} onPegClick={peg.onPegClick} />
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
