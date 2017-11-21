import {combineReducers} from 'redux'
import game from './gameReducer'
import peg from './pegReducer'
//import difficulty from './difficultyReducer';

const gameApp = combineReducers({
    game,
    peg
})
export default gameApp