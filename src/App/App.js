import React, { Component } from 'react';
import './App.css';

import {Provider} from 'react-redux';
import store from './store'

import GameContainer from '../Game/GameContainer';

//console.log(store.getState());
  
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Mastermind">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">Mastermind</h1>
        </header>
        <Provider store={store}>
          <GameContainer />
        </Provider>
      </div>
    );
  }
}

export default App;
