import React, { Component } from 'react';
import ClearControls from './ClearControls';
import NumberControls from './NumberControls';
import BaseNumberControls from './BaseNumberControls';


export default class Controls extends Component {
  render() {
    return (
      <div>
        <BaseNumberControls handleBaseClick={this.props.handleBaseClick}/>
        <ClearControls functions={['AC','C','DEL']} btnStyle="btn-outline-danger" handleKeyClick={this.props.handleKeyClick}/>
        <NumberControls labels={['D','E','F']} handleKeyClick={this.props.handleKeyClick}/>
        <NumberControls labels={['A','B','C']} handleKeyClick={this.props.handleKeyClick}/>
        <NumberControls labels={['7','8','9']} handleKeyClick={this.props.handleKeyClick}/>
        <NumberControls labels={['4','5','6']} handleKeyClick={this.props.handleKeyClick}/>
        <NumberControls labels={['1','2','3']} handleKeyClick={this.props.handleKeyClick}/>
        <NumberControls labels={['0','.']} handleKeyClick={this.props.handleKeyClick}/>
      </div>
    );
  }
}