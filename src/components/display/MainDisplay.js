import React, { Component } from 'react';

export default class Display extends Component {
	render() {
		return (
      <div className="display-item-main">{this.props.display}</div>
    )
  }
}