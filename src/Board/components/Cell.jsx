import React from 'react';
import PropTypes from 'prop-types';
import './Cell.css';

const Cell = ({currentClass, value, onClick}) => (
  <div className={`Cell ${currentClass}`} onClick={onClick}>
  {value>0?value:""}
  </div>
)

Cell.PropTypes = {
  currentClass: PropTypes.string.required,
  value: PropTypes.number,
  onClick: PropTypes.func.required
}

export default Cell;
