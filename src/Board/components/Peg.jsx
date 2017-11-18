//import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import './Peg.css';

const Peg = ({onClick, colour, value, displayNumbers}) => (
  <div className={`Peg ${colour}`}
  onClick={onClick}
  >{displayNumbers?value+1:""}</div>
)

Peg.PropTypes = {
  onClick: PropTypes.func.isRequired,
  colour: PropTypes.string,
  value: PropTypes.number
}
export default Peg;
