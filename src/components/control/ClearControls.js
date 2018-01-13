import React, { Component } from 'react';

function FunctionList(props) {
  const btnStyle = 'btn control-item ' + props.btnStyle;
  let handleKeyClick = props.handleKeyClick;
  return props.functions.map((functionLabel) =>
    <button type="button" key={functionLabel} 
      className={btnStyle}
      onClick={() => handleKeyClick(functionLabel)}>{functionLabel}</button>
  );
}

export default class ClearControls extends Component {
  render() {
    return (
      <div className="control-container">
        <FunctionList functions={this.props.functions} 
            btnStyle={this.props.btnStyle} 
            handleKeyClick={this.props.handleKeyClick}/>
      </div>
    );
  }
}