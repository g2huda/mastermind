import {combineReducers} from 'redux'
import game from './gameReducer'
import timer from './timerReducer'
import board from './boardReducer'
import peg from './pegReducer'
//import difficulty from './difficultyReducer';

const gameApp = combineReducers({
    game,
    board,
    timer,
    peg
})
export default gameApp