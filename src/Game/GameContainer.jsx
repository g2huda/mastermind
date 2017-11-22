import React, { Component } from 'react';
import Game from './Game';

import {startNewGame, toggleDisplayNumbers, loseGame, winGame} from '../App/Actions/gameActions';
import {createBoard} from '../App/Actions/pegActions';

import {connect} from 'react-redux';

class GameContainer extends Component {

  constructor(props){
    super(props);
    props.gameSettingsFunctions.startNewGame();
    this.startGame = this.startGame.bind(this);
  }

  componentWillReceiveProps({guessResults, currentRow}){
    let {columns} = this.props;
    
    if(guessResults !== this.props.guessResults){
      if (guessResults[this.props.currentRow-1] && guessResults[this.props.currentRow-1].onSpot === columns){
        this.props.gameSettingsFunctions.winGame();
        alert("YOU WIN :)");
      } else if(currentRow === 0){
        this.props.gameSettingsFunctions.loseGame();
        alert("YOU LOST :(");
      }  
    }
  }

  componentWillMount(){
    this.props.createBoard(4, 12);
  }
  
  componentWillUnmount(){
    //clearInterval(this.timerID);
    console.log("COMPONENT WILL UNMOUNT");  
  }
  
 startGame(){
    //this.reset();//to resetTimer and to clear interval
    this.props.gameSettingsFunctions.startNewGame();
    this.props.createBoard(4, 12);
    //this.timerID = setInterval(()=>this.props.tick(), 1000);
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
    columns: state.peg.columns,
    game: state.game,
    currentRow: state.peg.currentRow,
    guessResults: state.peg.guessResults
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
      },
      winGame: () => {
        dispatch(winGame())
      }
    },
    createBoard: (columns, rows) => {
      dispatch(createBoard(columns, rows))
    }
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)
