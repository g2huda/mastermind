import React from 'react'
import CellFactory, {SHIELD} from './CellFactory'

const Shield = ({values, gameOver, displayNumbers}) => (
    <tr>
    {values.map((val, ind) => (
        <td key={`${SHIELD}${ind}`} className="ShieldCol">
            {CellFactory.build({type:SHIELD, key:`${SHIELD}${ind}`, 
            gameOver: gameOver, 
            colour:val, 
            displayNumbers:displayNumbers})}
        </td>
    ))}
</tr>
)

export default Shield