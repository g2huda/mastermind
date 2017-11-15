const guessState = {
    ON_SPOT: 'ON_SPOT',
    NOT_ON_SPOT: 'NOT_ON_SPOT',
    NOT_IN_TARGET: 'NOT_IN_TARGET'
}

export const randomPicks = (array, number) => {
    let result = [];
    for(var i = 0; i < number; i++){
        let index = Math.floor(Math.random()*array.length);
        result.push(array[index]);
    }
    return result;
}


export const check = (state, guess, target, row) => {

    let result = target.map((val, ind) => (
        guess.includes(val)?(
            (target[ind] === guess[ind]?guessState.ON_SPOT:guessState.NOT_ON_SPOT)):
            guessState.NOT_IN_TARGET ));
    let onSpot = result.filter((value) => value === guessState.ON_SPOT).length;
    let notOnSpot = result.filter((value) => value === guessState.NOT_ON_SPOT).length;
    console.log({onSpot, notOnSpot, target, guess})
    return state.map((val, ind) => ind===row? {...val, onSpot, notOnSpot}: val);
 }

export const place = (prevState, row, col, value) => {
    if(!prevState.availableColours.includes(value)|| prevState.currentRow!==row){
        return prevState
    }
    
    return {...prevState, 
        currentGuess: prevState.currentGuess.map((item, index)=> index===col? value:item),
        pegsOnBoard: prevState.pegsOnBoard.map((rowVal, rowInd) => rowInd===row-1?
            rowVal.map((colVal, colInd) => colInd===col? value:colVal):rowVal)
    };
}

export const resetArray = (number, object="") => {
    return Array(number).fill(object);
}