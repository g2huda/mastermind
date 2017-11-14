import React from 'react'
import PropTypes from 'prop-types'

const createHolder = (keyPegs) => {
    let cols = Math.ceil(keyPegs.length/2);
    let arr = [];
    for(let y=0; y < keyPegs.length; y+=cols){
        arr.push(keyPegs.slice(y, y+cols));
    }
    console.log( keyPegs);
    return arr.map((rowVal, rowInd) => (
        <tr key={`keyPeg${rowInd}`}>
         {rowVal.map((colVal, colInd) => (
            <td key={`keyPeg${rowInd}${colInd}`}>{colInd}</td>
          ))}
        </tr>
    ));
}

const KeyPegHolder = ({keyPegs, guessResults}) => (
    <td className='KeyPegHolder'>
        <table>
            <tbody>
                {createHolder(keyPegs)}
            </tbody>
        </table>
    </td>
)

KeyPegHolder.PropTypes = {
    keyPegs: PropTypes.array,
    guessResults: PropTypes.arrayOf(PropTypes.shape({
        onSpot: PropTypes.number,
        noOnSpot: PropTypes.number
    }))
}

export default KeyPegHolder