import React, { Component } from 'react';

import Board from './Board';
import {connect} from 'react-redux';
//import {resetBoard} from '../App/Actions/boardActions';
import {createBoard, placePeg, checkSelection} from '../App/Actions/pegActions';

class BoardContainer extends Component {
  constructor(props){
    super(props);
    props.createBoard(props.board.columns, props.board.rows);
    console.log(props.peg.guessResults)
  }

  componentDidMount(){
    console.log("board should be created");
  }
  render(){
    return (
      <Board peg={this.props.peg}
        cursorType={this.props.board.cursorType}
        placePeg={this.props.placePeg} 
        checkSelection={this.props.checkSelection}
      />
    )
  }
} 

const mapStateToProps = (state) => {
  return {
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
    createBoard: (rows, cols) => {
      dispatch(createBoard(rows, cols))
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer)