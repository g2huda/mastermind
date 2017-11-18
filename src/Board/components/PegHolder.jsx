//import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import Peg from './Peg';
import './PegHolder.css';


const PegHolder = ({displayNumbers, pegColours, onPegClick}) => (
  <div className="PegHolder">
    {pegColours.map((colour, index) => (
      <Peg key={index} displayNumbers={displayNumbers} colour={colour} value={index} onClick={() => onPegClick(colour)} />
    ))}
  </div>
);

PegHolder.PropTypes = {
  pegColours: PropTypes.array.isRequired,
  onPegClick: PropTypes.func.isRequired
}

export default PegHolder;
