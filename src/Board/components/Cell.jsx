import React from 'react';
import PropTypes from 'prop-types';
import './Cell.css';

const Cell = ({currentClass, displayNumbers, index, onClick}) => (
  <div className={currentClass} onClick={onClick}>
  {index>0&&displayNumbers?index:""}
  </div>
)

Cell.PropTypes = {
  currentClass: PropTypes.string.required,
  value: PropTypes.number,
  onClick: PropTypes.func.required
}

export default Cell;
