export const CREATE_BOARD = 'CREATE_BOARD'
export const CHECK_SELECTION = 'CHECK_SELECTION'
export const PLACE_PEG = 'PLACE_PEG'
export const SET_CURSOR = 'SET_CURSOR'

export const createBoard = (columns, rows) => {
    return {
        type: CREATE_BOARD,
        columns,
        rows
    }
}

export const setCursor = (cursorType) => {
    return {
        type: SET_CURSOR,
        cursorType
    }
}

export const placePeg = (row, col, value) => {
    return {
        type: PLACE_PEG,
        row,
        col,
        value
    }
}

export const checkSelection = () => {
    return {
        type: CHECK_SELECTION
    }
}
