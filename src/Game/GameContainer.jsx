import React, { Component } from 'react';
import Game from './Game';

import {startNewGame, toggleDisplayNumbers} from '../App/Actions/gameActions';
import {resetBoard} from '../App/Actions/boardActions';
import {setRandomTarget, createBoard} from '../App/Actions/pegActions';

import {connect} from 'react-redux';

class GameContainer extends Component {

  constructor(props){
    super(props);
    props.startNewGame();
    props.resetBoard();
    this.startGame = this.startGame.bind(this);
  }

  componentWillMount(){
    let columns = this.props.columns;
    let rows = this.props.rows;
    this.props.createBoard(columns, rows);
    this.props.setRandomTarget(columns, rows);
    
  }
  
  componentWillUnmount(){
    //clearInterval(this.timerID);
    console.log("COMPONENT WILL UNMOUNT");  
  }
  
 startGame(){
    //this.reset();//to resetTimer and to clear interval
    let columns = this.props.columns;
    let rows = this.props.rows;
    this.props.resetBoard();
    this.props.setRandomTarget(columns, rows);
    //this.timerID = setInterval(()=>this.props.tick(), 1000);
  }
  

  render() {
    return(
        <Game settings={this.props.settings} 
        startGame={this.startGame}
        toggleDisplayNumbers={this.props.toggleDisplayNumbers} />
    );
  }
}

function mapStateToProps(state){
  return {
    //timer: state.timer,
    columns: state.board.columns,
    rows: state.board.rows,
    settings: state.game.gameSettings
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startNewGame: () => {
      dispatch(startNewGame())
    },
    toggleDisplayNumbers: () => {
      dispatch(toggleDisplayNumbers())
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
