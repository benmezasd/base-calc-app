import React, { Component } from 'react';

function NumberList(props) {
  let handleKeyClick = props.handleKeyClick;
  return props.numbers.map((number) =>
    <button type="button" key={number} 
            className="btn btn-lg control-item btn-outline-primary" 
            onClick={() => handleKeyClick(number)}>{number}</button>
  );
}

export default class NumberControls extends Component {
  render() {
    return (
      <div className="control-container">
        <NumberList numbers={this.props.labels} handleKeyClick={this.props.handleKeyClick}></NumberList>
      </div>
    );
  }
}