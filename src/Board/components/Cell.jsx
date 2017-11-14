import React from 'react';
import PropTypes from 'prop-types';
import './Cell.css';

const Cell = ({currentClass, onClick}) => (
  <div className={`Cell ${currentClass}`} onClick={onClick}>
  </div>
)

Cell.PropTypes = {
  currentClass: PropTypes.string.required,
  onClick: PropTypes.func.required
}

export default Cell;
