import React, { Component } from 'react';

import Board from './Board';
import {connect} from 'react-redux';
import {placePeg, checkSelection} from '../App/Actions/pegActions';
import {setCursor} from '../App/Actions/boardActions'

class BoardContainer extends Component {
  
  render(){
    return (
      <Board 
        game={{...this.props.gameState, cursorType: this.props.board.cursorType}} 
        peg={{...this.props.peg, 
          onPegClick:this.props.onPegClick,
          placePeg: this.props.placePeg,
          checkSelection: this.props.checkSelection}}
      />
    )
  }
} 

const mapStateToProps = (state) => {
  return {
    gameState: {
      gameOver: state.game.gameOver,
      displayNumbers: state.game.gameSettings.displayNumbers
    },
    board: state.board,
    peg: state.peg,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPegClick: peg => {
      dispatch(setCursor(peg))
    },
    placePeg: (row, col, value)=>{
      dispatch(placePeg(row, col, value))
    },
    checkSelection: () => {
      dispatch(checkSelection())
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer)