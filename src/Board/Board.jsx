import React from 'react';
import PropTypes from 'prop-types';
import './Board.css';

//import Shield from './components/Shield'
import Cell from './components/Cell';
import PegHolderContainer from './components/PegHolderContainer';
import CheckButton from './components/CheckButton';
import KeyPegHolder from './components/KeyPegHolder';

const buildBoard = (peg, cursor, placePeg, checkSelection) => {
      var {pegsOnBoard, currentRow, guessResults, target, completed} = peg;
      
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

const buildShield = (target, completed) => (
  <tr>
    {target.map((val, ind) => (<td key={`Sheild${ind}`} className="ShieldCol">
      <Cell key={`Sheild${ind}`} currentClass={completed?val:"Shield"} />
      </td>
    ))}
  </tr>
)

const Board = ({peg, cursorType, placePeg, checkSelection}) => (
  <div className={`Board ${cursorType}`}> 
    <table>
      <tbody>
        {buildShield(peg.target, peg.completed)}
        {buildBoard(peg, cursorType, placePeg, checkSelection)}
      </tbody>
    </table>
    <PegHolderContainer />
  </div>
)

Board.PropTypes = {
  cursorType: PropTypes.string.isRequired,
 // pegsOnBoard: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  placePeg: PropTypes.func.isRequired,
  checkSelection: PropTypes.func.isRequired,
 // activeRow: PropTypes.number.isRequired
}

export default Board;
