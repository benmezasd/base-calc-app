import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Display from './components/display/Display';
import Controls from './components/control/Controls'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      mainNum: 0,
      mainBase: 10 
    };
  }

  updateMainNum = (key) => {
    
    switch (key) {
      case 'AC':
        this.setState({ mainNum: 0});
        break;
      case 'C':
        this.setState({ mainNum: 0});
        break;
      case 'DEL':
        let deleted = this.state.mainNum;
        this.setState({ mainNum: deleted.toString().slice(0, -1)});
        break;
      default:
        let mainStr = `${this.state.mainNum}${key.toLowerCase()}`;
        const newNum = mainStr * 1;
        console.log(newNum);
        this.setState({ mainNum: newNum});
    }
  }

  updateMainBase = (base) => {
    this.setState({mainBase:base});
  }

  render() {
    return (
      <div className="App">
        <Display mainNum={this.state.mainNum} mainBase={this.state.mainBase}/>
        <Controls handleKeyClick={this.updateMainNum} handleBaseClick={this.updateMainBase}/>
      </div>
      
    );
  }
}

export default App;
