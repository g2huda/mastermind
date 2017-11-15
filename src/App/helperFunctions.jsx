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

export const checkResult = (prevState) => {
    let result = prevState.target.map((val, ind) => (
        prevState.currentGuess.includes(val)?(
            (prevState.target[ind] === prevState.currentGuess[ind]?guessState.ON_SPOT:guessState.NOT_ON_SPOT)):
            guessState.NOT_IN_TARGET ));
    let onSpot = result.filter((value) => value === guessState.ON_SPOT).length;
    let notOnSpot = result.filter((value) => value === guessState.NOT_ON_SPOT).length;
    //console.log({onSpot, notOnSpot, prevState.target, prevState.guess})
    return  (prevState.currentGuess.includes("")? prevState:
    {...prevState, currentRow: prevState.currentRow+1, 
        currentGuess: resetArray(prevState.currentGuess.length),
        guessResults: prevState.guessResults.map((result, resultInd) => (
            resultInd===prevState.currentRow-1? {...result, onSpot, notOnSpot}: result)),
        completed: onSpot === prevState.target.length
    })
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