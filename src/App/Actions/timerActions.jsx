//export const  START_TIMER = 'START_TIMER';
export const  TICK = 'TICK'
export const RESET_TIMER = 'REST_TIMER'

export const resetTimer = () => {
    return {
        type: RESET_TIMER,
    }
}

export const  tick = () => {
    return {
        type: TICK,
    }
}