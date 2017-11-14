import {combineReducers} from 'redux'
import timer from './timerReducer'
import board from './boardReducer'
import peg from './pegReducer'
//import difficulty from './difficultyReducer';

const gameApp = combineReducers({
    board,
    timer,
    peg
})
export default gameApp