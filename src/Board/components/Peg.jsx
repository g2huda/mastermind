//import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import './Peg.css';

const Peg = ({onClick, colour}) => (
  <div className={`Peg ${colour}`}
  onClick={onClick}
  >
  </div>
)

Peg.PropTypes = {
  onClick: PropTypes.func.isRequired,
  colour: PropTypes.string
}
export default Peg;
