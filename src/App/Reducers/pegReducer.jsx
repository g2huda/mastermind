import PropTypes from 'prop-types'
import {CREATE_BOARD, SET_RANDOM_TARGET, PLACE_PEG, CHECK_SELECTION} from '../Actions/pegActions'
import {resetArray, randomPicks, place, checkResult} from '../helperFunctions'
const initialState = {
    availableColours: [
        {colour: 'black', index: 1}, 
        {colour: 'blue', index: 2}, 
        {colour: 'brown', index: 3}, 
        {colour: 'gold', index: 4}, 
        {colour: 'green', index: 5}, 
        {colour: 'orange', index: 6},
        {colour: 'red', index: 7}, 
        {colour: 'white', index: 8}
    ],
    target: [],
    currentRow: 1,
    guessResults: resetArray(12, {onSpot:0, notOnSpot:0}),
    currentGuess:[],
    pegsOnBoard: [],
    //totalGuesses: 0
}

const peg = (prevState = initialState, action) => {
    switch (action.type){
        case CREATE_BOARD:
            let initialRow = resetArray(action.columns);
            return {...initialState, 
                currentGuess:initialRow,
                pegsOnBoard: resetArray(action.rows, initialRow),
               // totalGuesses: action.rows
            }
        case SET_RANDOM_TARGET: 
            var initialNum = resetArray(action.number);
            return Object.assign({}, initialState, {
                target: randomPicks(initialState.availableColours, action.number),
                currentGuess: initialNum,
                pegsOnBoard: resetArray(action.totalRows, initialNum)
            }) 
        case PLACE_PEG:
            return place(prevState, action.row, action.col, action.value)
        case CHECK_SELECTION:
            return checkResult(prevState)
        default:
            return prevState
    }
}

checkResult.PropTypes = {
    state: PropTypes.arrayOf(PropTypes.shape({
        onSpot: PropTypes.number,
        notOnSpot: PropTypes.number
    })).isRequired,
    guess: PropTypes.arrayOf(PropTypes.string).isRequired,
    target: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default peg