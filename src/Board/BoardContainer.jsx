import React, { Component } from 'react';

import BoardBuilder from './BoardBuilder';
import {connect} from 'react-redux';
import {placePeg, checkSelection, setCursor} from '../App/Actions/pegActions';

class BoardContainer extends Component {
  
  render(){
    return (
      <BoardBuilder 
        game={{...this.props.gameState, cursorType: this.props.peg.cursorType}} 
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