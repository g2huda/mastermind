import React from 'react'
import PropTypes from 'prop-types'

import Cell from './components/Cell';
import PegHolderContainer from './components/PegHolderContainer';
import CheckButton from './components/CheckButton';
import KeyPegHolder from './components/KeyPegHolder';

import {BOARD, SHIELD} from '../App/Actions/boardActions';

class BoardFactory {
    static build = (data) => {
        switch (data.value){
            case "BOARD":
                var {availableColours, pegsOnBoard, currentRow, guessResults, target, completed} = data;
            
                return pegsOnBoard.map((rowVal, rowInd) => {
                    let currRow = pegsOnBoard.length-rowInd;
                    return (
                        <tr key={`board${rowInd}`}>
                            <td>
                                <KeyPegHolder key={`keyPegHolder${rowInd}`} 
                                keyPegs={target} 
                                guessResult={guessResults[currRow-1]}/>
                            </td>
                            {rowVal.map((colVal, colInd) =>(
                            <td key={`peg${rowInd}${colInd}`}>
                                <Cell key={`${rowInd}${colInd}`} currentClass={pegsOnBoard[currRow-1][colInd]}
                                displayVal={game.gameSettings.displayNumbers} 
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
            case "SHIELD":
                return (
                    <tr>
                        {target.map((val, ind) => (<td key={`Sheild${ind}`} className="ShieldCol">
                            <Cell key={`Sheild${ind}`} currentClass={completed?val:"Shield"} />
                            </td>
                        ))}
                    </tr>
                )
            default: 
                 console.log("The GameSettingFactory does not contain this setting")
                 return undefined
        }
    }
}

GameSettingsFactory.PropTypes = {
    data: PropTypes.shape({
      startNewGame: PropTypes.func,
      toggleDisplayNumbers: PropTypes.func.isRequired,
      loseGame: PropTypes.func.isRequired,
      startGame: PropTypes.func.isRequired,
      settings: PropTypes.shape({
        displayNumbers: PropTypes.bool.isRequired,
        options: PropTypes.arrayOf(PropTypes.string)
      }) 
    })
  }
  

export default GameSettingsFactory;