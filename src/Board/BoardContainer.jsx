import React, { Component } from 'react';

import Board from './Board';
import {connect} from 'react-redux';
import {placePeg, checkSelection} from '../App/Actions/pegActions';
import {winGame, loseGame} from '../App/Actions/gameActions';

class BoardContainer extends Component {
  
  render(){
    return (
      <Board 
        game={{...this.props.gameState, 
          windGame: this.props.gameActions.winGame,
          loseGame: this.props.gameActions.loseGame}} 
        peg={this.props.peg}
        cursorType={this.props.board.cursorType}
        placePeg={this.props.placePeg} 
        checkSelection={this.props.checkSelection}
      />
    )
  }
} 

const mapStateToProps = (state) => {
  return {
    gameState: {
      gameOver: state.game.gameOver,
      displayTarget: state.game.displayTarget,
      displayNumbers: state.game.gameSettings.displayNumbers
    },
    board: state.board,
    peg: state.peg,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    placePeg: (row, col, value)=>{
      dispatch(placePeg(row, col, value))
    },
    checkSelection: () => {
      dispatch(checkSelection())
    },
    gameActions: {
      winGame: () => {
        dispatch(winGame())
      },
      loseGame: () => {
        dispatch(loseGame())
      }
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer)