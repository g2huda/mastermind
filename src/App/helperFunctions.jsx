export const randomPicks = (array, number) => {
    let result = [];
    for(var i = 0; i < number; i++){
        let index = Math.floor(Math.random()*array.length);
        result.push(array[index]);
    }
    return result;
}

export const checkResult = (prevState) => {
    
    let target = prevState.target;
    let guess = prevState.currentGuess;
    let onSpot = target.filter((val, ind) => target[ind].colour===guess[ind].colour).length;
    let notOnSpot = totalNotOnSpot(prevState.target, prevState.currentGuess)-onSpot;
    console.log({target, guess});
    return  (prevState.currentGuess.includes("")? prevState:
    {...prevState, 
        currentRow: prevState.currentRow-1, 
        currentGuess: resetArray(prevState.currentGuess.length),
        guessResults: prevState.guessResults.map((result, resultInd) => (
            resultInd===prevState.currentRow-1? {...result, onSpot, notOnSpot}: result))
    })
}

const totalOcurrence = (array) => {
    let arr = array.map((val, ind) => val.colour);
    var prev; 
    let val = [];
    let num = [];
    arr.sort();
    for(let i =0; i < arr.length; i++){
        if (arr[i] !== prev){
            val.push(arr[i]);
            num.push(1);
        }else{
            num[num.length-1]++;
        }
        prev = arr[i];
    }
    return [val, num];
}

const totalNotOnSpot = (target, guess) => {
    let total1 = totalOcurrence(target);
    let total2 = totalOcurrence(guess);
    let targetVal = total1[0];
    let targetNum = total1[1];
    let guessVal = total2[0];
    let guessNum = total2[1];

    let result = targetVal.map((val, ind) => guessVal.includes(val)? 
        Math.min(guessNum[guessVal.indexOf(val)], targetNum[ind]):0 );
    let add = result.reduce((prev, curr) => prev+curr, 0);
    return add;

}
export const place = (prevState, row, col, value) => {
    if(!prevState.availableColours.includes(value)|| prevState.currentRow!==row+1){
        return prevState
    }
    
    return {...prevState, 
        currentGuess: prevState.currentGuess.map((item, index)=> index===col? value:item),
        pegsOnBoard: prevState.pegsOnBoard.map((rowVal, rowInd) => rowInd===row?
            rowVal.map((colVal, colInd) => colInd===col? value:colVal):rowVal)
    };
}

export const resetArray = (number, object="") => {
    return Array(number).fill(object);
}
