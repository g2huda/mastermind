import { START_NEW_GAME, WIN, LOSE, TOGGLE_DISPLAY_NUMBERS, GIVE_UP} from '../Actions/gameActions'

const initialState = {
    gameStarted: false,
    gameOver: false,
    gameWon: false,
    gameLost: false,
    totalWon: 0,
    totalLost: 0,
    gameSettings: {
        options: [TOGGLE_DISPLAY_NUMBERS, GIVE_UP, START_NEW_GAME],
        displayNumbers: false
    }
}

const game = (prevState=initialState, action) => {
    switch (action.type){
        case START_NEW_GAME: 
            return {...prevState,
                //gameWon: false,
                //gameLost: false,
                gameOver: false}
        case WIN:
            return {...prevState, 
                //gameWon: true,
                totalWon: prevState.totalWon +1,
                gameOver: true}
        case LOSE:
            return {...prevState,
                //gameLost: true,
                totalLost: prevState.totalLost +1,
                gameOver: true}
        case TOGGLE_DISPLAY_NUMBERS:
            return {...prevState,
                gameSettings: {...prevState.gameSettings, 
                    displayNumbers: !prevState.gameSettings.displayNumbers}}
        default:
            return prevState
    }
};

export default game