import PropTypes from 'prop-types'
import {CREATE_BOARD, SET_RANDOM_TARGET, PLACE_PEG, CHECK_SELECTION} from '../Actions/pegActions'
import {resetArray, randomPicks, place, check} from '../helperFunctions'
const initialState = {
    availableColours: ['black', 'blue', 'brown', 'gold', 'green', 'orange', 'red', 'white'],
    target: [],
    currentRow: 1,
    guessResults: resetArray(12, {onSpot:0, notOnSpot:0}),
    currentGuess:[],
    pegsOnBoard: [],
   // keyPegs: []
}

const peg = (prevState = initialState, action) => {
    switch (action.type){
        case CREATE_BOARD:
            let initialRow = resetArray(action.columns);
            return {...initialState, 
                currentGuess:initialRow,
                pegsOnBoard: resetArray(action.rows, initialRow),
                //guessResults: resetArray(action.rows, {onSpot:0, notOnSpot:0})
               // keyPegs: resetArray(initialRow)
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
            return  (prevState.currentGuess.includes("")? prevState:
            {...prevState, currentRow: prevState.currentRow+1, 
                currentGuess: resetArray(prevState.currentGuess.length),
                guessResults: check(prevState.guessResults, prevState.currentGuess, prevState.target)
            })
        default:
            return prevState
    }
}

check.PropTypes = {
    state: PropTypes.arrayOf(PropTypes.shape({
        //isValid: PropTypes.bool.isRequired,
        onSpot: PropTypes.number,
        notOnSpot: PropTypes.number
    })).isRequired,
    guess: PropTypes.arrayOf(PropTypes.string).isRequired,
    target: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default peg