import React, { Component } from 'react';
import ClearControls from './ClearControls';
import NumberControls from './NumberControls';
import BaseNumberControls from './BaseNumberControls';


export default class Controls extends Component {
  render() {
    return (
      <div>
        <BaseNumberControls handleBaseClick={this.props.handleBaseClick}/>
        <ClearControls functions={['AC','C','DEL']} btnStyle="btn-outline-danger"/>
        <NumberControls labels={['D','E','F']}/>
        <NumberControls labels={['A','B','C']}/>
        <NumberControls labels={['7','8','9']}/>
        <NumberControls labels={['4','5','6']}/>
        <NumberControls labels={['1','2','3']}/>
        <NumberControls labels={['0','.']}/>
      </div>
    );
  }
}