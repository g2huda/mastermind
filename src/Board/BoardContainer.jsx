import React, { Component } from 'react';

import Board from './Board';
import {connect} from 'react-redux';
import {placePeg, checkSelection} from '../App/Actions/pegActions';

class BoardContainer extends Component {
  
  render(){
    return (
      <Board game={this.props.game} 
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
    game: state.game,
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
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer)