import React from 'react'
import PropTypes from 'prop-types'

import Cell from './Cell'
export const SHIELD = 'SHIELD'
export const BOARD = 'BOARD'
export const PEG_HOLDER = 'PEG_HOLDER'

class RowFactory {
    static build(data){
        switch (data.type){
            case SHIELD:
                return (
                    <tr>
                    {data.row.map((val, ind) => (<td key={`Sheild${ind}`} className="ShieldCol">
                        <Cell key={`Sheild${ind}`} 
                        currentClass={data.gameOver?`Cell ${val.colour}`:"Cell Shield"}
                        displayNumbers={data.gameOver?data.displayNumbers:false}
                        index={val.index} />
                        </td>
                    ))}
                </tr>
                )
            case PEG_HOLDER:
                return (
                <div className="PegHolder">
                    {data.row.map((colour, index) => (
                        <Cell key={index}
                        currentClass={`Peg ${colour.colour}`}
                        displayNumbers={data.displayNumbers}
                        index={colour.index}
                        onClick={() => data.onPegClick(colour)}/>
                      ))}
                    </div>
                    )  
            case BOARD:
                return ( 
                    { undefined/* <tr key={`board${data.rowInd}`}>
                        <td>
                            <KeyPegHolder key={`keyPegHolder${data.rowInd}`} 
                            keyPegs={data.target} guessResult={data.guessResult}/>
                        </td>
                        {data.row.map((colVal, colInd) =>(
                        <td key={`peg${data.rowInd}${colInd}`}>
                            <Cell key={`${rowInd}${colInd}`} 
                            currentClass={`Cell ${pegsOnBoard[currRow-1][colInd]}`} displayVal={game.displayNumbers} 
                        value={availableColours.indexOf(pegsOnBoard[currRow-1][colInd])+1}
                        onClick={()=>placePeg(currRow, colInd, cursor)}/>
                    </td>))
                    }
                    <CheckButton key={rowInd} currRow={currRow} 
                    activeRow={currentRow} 
                    checkSelection={checkSelection}
                    gameOver={game.gameOver}/>
                  </tr> */}
                )
            default: return undefined
        }

    }
}

RowFactory.PropTypes = {
    data: PropTypes.shape({
        row: PropTypes.arrayOf(PropTypes.string),
        gameOver: PropTypes.bool
    })
}

export default RowFactory