//export const START_GAME = 'START_GAME';
export const SET_RANDOM_TARGET = 'SET_RANDOM_TARGET';

export const setRandomTarget = (number) => {
    return {
        type: SET_RANDOM_TARGET,
        number
    }
}