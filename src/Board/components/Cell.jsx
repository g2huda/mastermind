import React from 'react';
import PropTypes from 'prop-types';
import './Cell.css';

const Cell = ({currentClass, colour, displayNumbers, onClick}) => (
  <div className={`${currentClass} ${colour.colour}`} onClick={onClick}>
  {colour.index>0&&displayNumbers?colour.index:""}
  </div>
)

Cell.PropTypes = {
  currentClass: PropTypes.string.isRequired,
  colour: PropTypes.shape({
    colour: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
  }),
  onClick: PropTypes.func.isRequired
}

export default Cell;
