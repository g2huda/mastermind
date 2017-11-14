export const RESET_BOARD = 'RESET_BOARD'
export const UPDATE_ROW = 'UPDATE_ROW'
export const SET_CURSOR = 'SET_CURSOR'

export const resetBoard = () => {
    return {
        type: RESET_BOARD
    }
}

export const updateRow = (id, value) => {
    return {
        type: UPDATE_ROW,
        id,
        value
    }
}

export const setCursor = (cursorType) => {
    return {
        type: SET_CURSOR,
        cursorType
    }
}
