import React from 'react'
import Cell from './Cell'
const Shield = ({target, gameOver}) => (
    <tr>
        {target.map((val, ind) => (<td key={`Sheild${ind}`} className="ShieldCol">
            <Cell key={`Sheild${ind}`} currentClass={gameOver?val:"Shield"} />
            </td>
        ))}
    </tr>
)

export default Shield