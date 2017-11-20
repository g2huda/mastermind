import {RESET_BOARD, SET_CURSOR} from '../Actions/boardActions'

const initialState = {
    rows: 4,
    columns: 4,
    cursorType: 'default'
}

const board = (prevState = initialState, action) => {
    switch (action.type){
        case RESET_BOARD: 
            return initialState
        case SET_CURSOR:
            return Object.assign({}, prevState, {cursorType: action.cursorType})
        default:
            return prevState
    }
}

export default board