import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Display from './components/display/Display';
import Controls from './components/control/Controls'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Display/>
        <Controls/>
      </div>
      
    );
  }
}

export default App;
