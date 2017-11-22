import React from 'react'
import CellFactory, {PEG_HOLDER} from './CellFactory'
import './PegHolder.css'

const PegHolder = ({values, displayNumbers, onPegClick}) => (
    <div className="PegHolder">
    {values.map((colour, index) =>  
        {return CellFactory.build({type:PEG_HOLDER, key:index, 
            colour: colour, 
            displayNumbers:displayNumbers, 
            onPegClick:onPegClick})}
        )}
    </div>
)

export default PegHolder