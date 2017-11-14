import { RESET_GAME, SET_CURSOR} from '../Actions/gameActions'

const initialState = {
    availableColours = []
}

const game = (prevState=initialState, action) => {
    switch (action.type){
        case RESET_GAME: 
            return initialState
        case SET_CURSOR:
            return Object.assign({}, prevState, {cursor: action.cursorType})
        default:
            return prevState
    }
};

export default game