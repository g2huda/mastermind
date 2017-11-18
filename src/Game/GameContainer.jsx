import React, { Component } from 'react';
import Game from './Game';

import {startNewGame, toggleDisplayNumbers, loseGame} from '../App/Actions/gameActions';
import {resetBoard} from '../App/Actions/boardActions';
import {setRandomTarget, createBoard} from '../App/Actions/pegActions';

import {connect} from 'react-redux';

class GameContainer extends Component {

  constructor(props){
    super(props);
    props.gameSettingsFunctions.startNewGame();
    props.resetBoard();
    this.startGame = this.startGame.bind(this);
    console.log("CONTRUCTOR")
  }

  componentWillMount(){
    let columns = this.props.columns;
    let rows = this.props.rows;
    this.props.createBoard(columns, rows);
    this.props.setRandomTarget(columns, rows);
    console.log("COMPONENT WILL MOUNT");
    
  }
  
  componentWillUnmount(){
    //clearInterval(this.timerID);
    console.log("COMPONENT WILL UNMOUNT");  
  }
  
 startGame(){
    //this.reset();//to resetTimer and to clear interval
    this.props.gameSettingsFunctions.startNewGame();
    let columns = this.props.columns;
    let rows = this.props.rows;
    this.props.resetBoard();
    this.props.setRandomTarget(columns, rows);
    //this.timerID = setInterval(()=>this.props.tick(), 1000);
    console.log("GAME IS STARTING");
  }
  

  render() {
    return(
        <Game gameSettings={{...this.props.gameSettingsFunctions, 
          startGame:this.startGame, 
          settings: this.props.game.gameSettings,
          totalWon: this.props.game.totalWon,
          totalLost: this.props.game.totalLost}} />
    );
  }
}

function mapStateToProps(state){
  return {
    //timer: state.timer,
    columns: state.board.columns,
    rows: state.board.rows,
    game: state.game
  }
}

const mapDispatchToProps = dispatch => {
  return {
    gameSettingsFunctions: {
      startNewGame: () => {
        dispatch(startNewGame())
      },
      toggleDisplayNumbers: () => {
        dispatch(toggleDisplayNumbers())
      },
      loseGame: () => {
        dispatch(loseGame())
      }
    },
    
    resetBoard: ()=>{
      dispatch(resetBoard())
    },
    setRandomTarget: (columns, rows) => {
      dispatch(setRandomTarget(columns, rows))
    },
    createBoard: (columns, rows) => {
      dispatch(createBoard(columns, rows))
    }
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)
