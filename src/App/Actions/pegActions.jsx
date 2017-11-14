export const CREATE_BOARD = 'CREATE_BOARD'
export const SET_RANDOM_TARGET = 'SET_RANDOM_TARGET'
export const CHECK_SELECTION = 'CHECK_SELECTION'
export const PLACE_PEG = 'PLACE_PEG'

export const createBoard = (columns, rows) => {
    return {
        type: CREATE_BOARD,
        columns,
        rows
    }
}

export const setRandomTarget = (number, totalRows) => {
    return {
        type: SET_RANDOM_TARGET,
        number,
        totalRows
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
