export const START_NEW_GAME = 'START_NEW_GAME';
export const WIN = 'WIN';
export const LOSE = 'LOSE';
export const TOGGLE_DISPLAY_NUMBERS = 'TOGGLE_DISPLAY_NUMBERS';

export const startNewGame = () => {
    return {
        type: START_NEW_GAME
    }
}

export const win = () => {
    return {
        type: WIN
    }
}

export const lose = () => {
    return {
        type: LOSE
    }
}

export const toggleDisplayNumbers = () => {
    return {
        type: TOGGLE_DISPLAY_NUMBERS,
    }
}
