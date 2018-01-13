import React, { Component } from 'react';

export default class BaseNumberControls extends Component {
  render() {
    return (
      <div className="control-container">
        {[2,8,10,16].map(base => 
          <button key={`base${base}`} type="button" 
                  className="btn btn-sm btn-outline-success control-item"
                  onClick={() => this.props.handleBaseClick(base)}>{base}</button>
        )}
      </div>
    )
  }
}