import React, { Component } from 'react';
import Game from './Game';

import {resetBoard} from '../App/Actions/boardActions';
import {setRandomTarget} from '../App/Actions/pegActions';
import {resetTimer, tick} from '../App/Actions/timerActions';

import {connect} from 'react-redux';

class GameContainer extends Component {

  constructor(props){
    super(props);
    
    this.startGame = this.startGame.bind(this);
  }

  componentDidMount(){
    console.log(this.props);
    console.log("COMPONENT DID MOUNT");
    let columns = this.props.board.columns;
    let rows = this.props.board.rows;
    
    this.props.setRandomTarget(columns, rows);
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
    console.log("COMPONENT WILL UNMOUNT");
    
  }

 // tick(){
 //   this.setState(prevState => ({timer: prevState.timer+1}));
 // }

  reset(){
    this.props.resetTimer();
    this.props.resetBoard();
    
    //this.setState({timer: 0});
    clearInterval(this.timerID);
  }
  
  startGame(){
    this.reset();
    let columns = this.props.board.columns;
    let rows = this.props.board.rows;
    this.props.setRandomTarget(columns, rows);
   // this.timerID = setInterval(()=>this.props.tick(), 1000);
  }

  render() {
    return(
        <Game 
        startGame={this.startGame}
        timer={this.props.timer}
        />
    );
  }
}

function mapStateToProps(state){
  return {
    timer: state.timer,
    board: state.board,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetBoard: ()=>{
      dispatch(resetBoard())
    },
   tick: () => {
     dispatch(tick())
   },
   resetTimer: () => {
     dispatch(resetTimer())
   },
   setRandomTarget: (number, totalRows) => {
     dispatch(setRandomTarget(number, totalRows))
   }
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)
