import React from 'react'
import PropTypes from 'prop-types'
import './KeyPegHolder.css'

const createHolder = (keyPegs, guessResult) => {
    let cols = Math.ceil(keyPegs.length/2);
    
    let onSpot = Array(guessResult.onSpot).fill("onSpot");
    let notOnSpot = Array(guessResult.notOnSpot).fill("notOnSpot");
    let tmp = onSpot.concat(notOnSpot);
    let classNames = keyPegs.map((val, ind) => ind<tmp.length? tmp[ind]:"");
    
    //divide the classNames equally into the table
    let arr = [];
    for(let y=0; y < classNames.length; y+=cols){
        arr.push(classNames.slice(y, y+cols));
    }
   

    return arr.map((rowVal, rowInd) => (
        <tr key={`keyPeg${rowInd}`}>
         {rowVal.map((colVal, colInd) => (
            <td key={`keyPeg${rowInd}${colInd}`}>{guessResult.onSpot}</td>
          ))}
        </tr>
    ));
}

const KeyPegHolder = ({keyPegs, guessResult}) => (
    <table className='KeyPegHolder'>
        <tbody>
            {createHolder(keyPegs, guessResult)}
        </tbody>
    </table>
)

KeyPegHolder.PropTypes = {
    keyPegs: PropTypes.array,
    guessResult: PropTypes.shape({
        onSpot: PropTypes.number,
        notOnSpot: PropTypes.number
    })
}

export default KeyPegHolder