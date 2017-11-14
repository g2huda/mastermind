import { RESET_TIMER, TICK } from '../Actions/timerActions'

const timer = (prevState=0, action) => {
    switch (action.type){
        case RESET_TIMER: 
            return 0
        case TICK:
            return prevState+1;
        default:
            return prevState
    }
};

export default timer