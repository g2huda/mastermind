import { START_NEW_GAME, WIN, LOSE, TOGGLE_DISPLAY_NUMBERS} from '../Actions/gameActions'

const initialState = {
    gameStarted: false,
    //gamePaused: false,
    gameWon: false,
    gameLost: false,
    totalWon: 0,
    totalLost: 0,
    gameSettings: {
        options: ["displayNumbers"],
        displayNumbers: false
    }
}

const game = (prevState=initialState, action) => {
    switch (action.type){
        case START_NEW_GAME: 
            return {...prevState,
                gameWon: false,
                gameLost: false,
                gameStarted: true}
        case WIN:
            return {...prevState, 
                gameWon: true,
                totalWon: prevState.totalWon +1,
                gameStarted: false}
        case LOSE:
            return {...prevState,
                gameLost: true,
                totalLost: prevState.totalLost +1,
                gameStarted: false}
        case TOGGLE_DISPLAY_NUMBERS:
            return {...prevState,
                gameSettings: {...prevState.gameSettings, displayNumbers: !prevState.gameSettings.displayNumbers}}
        default:
            return prevState
    }
};

export default game