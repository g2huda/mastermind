import React from 'react'
import PropTypes from 'prop-types'

import Cell from './Cell'
export const SHIELD = 'SHIELD'
export const PEG_ON_BOARD = 'PEG_ON_BOARD'
export const PEG_HOLDER = 'PEG_HOLDER'

class CellFactory {
    static build(data){
        switch (data.type){
            case SHIELD:
                return (
                    <Cell key={data.key}
                    currentClass={data.gameOver?"Cell":"Cell Shield"}
                    colour={data.gameOver?data.colour: ""}
                    displayNumbers={data.displayNumbers} />
                )
                
            case PEG_HOLDER:
                return (
                    <Cell key={data.key}
                    currentClass="Peg"
                    colour={data.colour}
                    displayNumbers={data.displayNumbers}
                    onClick={()=>data.onPegClick(data.colour)}/>
                )

            case PEG_ON_BOARD:
                return ( 
                    <Cell key={data.key} 
                    currentClass="Cell"
                    colour={data.colour}
                    displayNumbers={data.displayNumbers} 
                    onClick={()=>data.placePeg(data.rowInd, data.colInd, data.cursor)}/>
                )

            default: return undefined
        }
    }
}

CellFactory.PropTypes = {
    data: PropTypes.shape({
        row: PropTypes.arrayOf(PropTypes.string),
        gameOver: PropTypes.bool
    })
}

export default CellFactory