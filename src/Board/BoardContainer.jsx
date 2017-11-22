import React, { Component } from 'react';

import BoardBuilder from './BoardBuilder';
import {connect} from 'react-redux';
import {placePeg, checkSelection, setCursor} from '../App/Actions/pegActions';

class BoardContainer extends Component {
  
  render(){
    return (
      <BoardBuilder shield={this.props.shield} 
      board={this.props.board} boardDispatch={this.props.boardDispatch}
      pegHolder={this.props.pegHolder} pegHolderDispatch={this.props.pegHolderDispatch} />
    )
  }
} 

const mapStateToProps = (state) => {
  return {
    shield: {
      values: state.peg.target,
      gameOver: state.game.gameOver, 
      displayNumbers: state.game.gameSettings.displayNumbers
    },
    board: {
      gameOver: state.game.gameOver, 
      pegsOnBoard: state.peg.pegsOnBoard, 
      currentRow: state.peg.currentRow, 
      guessResults: state.peg.guessResults, 
      target: state.peg.target, 
      cursorType: state.peg.cursorType,
      displayNumbers: state.game.gameSettings.displayNumbers
    },
    pegHolder: {
      values: state.peg.availableColours, 
      displayNumbers:state.game.gameSettings.displayNumbers 
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    boardDispatch: {
      placePeg: (row, col, value) => {
        dispatch(placePeg(row, col, value))
      }, 
      checkSelection: () => {
        dispatch(checkSelection())
      } 
    },
    pegHolderDispatch: {
      onPegClick: peg => {
        dispatch(setCursor(peg))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer)