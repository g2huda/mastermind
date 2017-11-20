import React from 'react';
import PropTypes from 'prop-types';
import './Board.css';
import './components/PegHolder.css';

import Cell from './components/Cell';
//import PegHolderContainer from './components/PegHolderContainer';
import CheckButton from './components/CheckButton';
import KeyPegHolder from './components/KeyPegHolder';
//import Shield from './components/Shield';
import RowFactory,{SHIELD, PEG_HOLDER, BOARD} from './components/RowFactory'

const buildBoard = (game, peg, cursor, placePeg, checkSelection) => {
      var {availableColours, pegsOnBoard, currentRow, guessResults, target} = peg;
      
      return pegsOnBoard.map((rowVal, rowInd) => {
        let currRow = pegsOnBoard.length-rowInd;
        return (
          //{RowFactory.build({type:BOARD, rowInd:rowInd, keyPegs: target, guessResult={guessResults[currRow-1]}})}
        <tr key={`board${rowInd}`}>
          <td>
            <KeyPegHolder key={`keyPegHolder${rowInd}`} keyPegs={target} guessResult={guessResults[currRow-1]}/>
          </td>
          {rowVal.map((colVal, colInd) =>(
          <td key={`peg${rowInd}${colInd}`}>
            <Cell key={`${rowInd}${colInd}`} currentClass={`Cell ${pegsOnBoard[currRow-1][colInd].colour}`}
              displayNumbers={game.displayNumbers} 
              index={availableColours.indexOf(pegsOnBoard[currRow-1][colInd])+1}
              onClick={()=>placePeg(currRow, colInd, cursor)}/>
          </td>))
          }
          <CheckButton key={rowInd} currRow={currRow} 
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
        {/* <Shield target={peg.target} gameOver={game.gameOver} /> */}
        {RowFactory.build({type: SHIELD, 
          row: peg.target, gameOver: game.gameOver, displayNumbers:game.displayNumbers})}
        {buildBoard(game, peg, game.cursorType, peg.placePeg, peg.checkSelection)}
      </tbody>
    </table>
    {RowFactory.build({type:PEG_HOLDER, 
      displayNumbers:game.displayNumbers, row:peg.availableColours, onPegClick:peg.onPegClick})}
    {/* <PegHolderContainer /> */}
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
