import React, { Component } from 'react';
import { connect } from "react-redux";

import MainDisplay from './MainDisplay';

class Display extends Component {

	render() {
		return (
			<div className="Display">
				{[2,8,10,16].map(base => 
					<div key={`dispcont${base}`} className="display-container information-row">
						<div key={`basename${base}`} className="display-item text-left">{`base${base}`}</div>
						<MainDisplay key={`maindisp${base}`} display={this.props.value.toString(base)}></MainDisplay>
						<div key={`noidea${base}`} className="display-item">{base}</div>
					</div>
				)}
				<div className="display-container base-row">
					<div className="display-item">{this.props.base}</div>
					<MainDisplay display={this.props.value.toString(this.props.base)}></MainDisplay>
					<div className="display-item">0</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		value: state.value,
		base: state.base
	};
}

export default connect(mapStateToProps)(Display);