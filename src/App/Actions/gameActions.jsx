export const START_NEW_GAME = 'START_NEW_GAME';
export const WIN = 'WIN';
export const LOSE = 'LOSE';
export const TOGGLE_DISPLAY_NUMBERS = 'TOGGLE_DISPLAY_NUMBERS';
export const GIVE_UP = 'GIVE_UP';
export const UPDATE_GAME = 'UPDATE_GAME';

export const startNewGame = () => {
    return {
        type: START_NEW_GAME
    }
}

export const updateGame = (rows, columns, currentRow, onSpot) => {
    return {
        type: UPDATE_GAME,
        rows, columns, currentRow, onSpot
    }
}
export const winGame = () => {
    return {
        type: WIN
    }
}

export const loseGame = () => {
    return {
        type: LOSE
    }
}

export const toggleDisplayNumbers = () => {
    return {
        type: TOGGLE_DISPLAY_NUMBERS,
    }
}
