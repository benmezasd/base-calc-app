import React, { Component } from 'react';
import anyBase from 'any-base';

import MainDisplay from './MainDisplay';

export default class Display extends Component {

	convertBase(mainNum,baseNum) {
		let str = mainNum.toString();
		let conversion;
		switch (baseNum) {
			case 2:
				conversion = anyBase(anyBase.DEC, anyBase.BIN);
				break;
			case 8:
				conversion = anyBase(anyBase.DEC, anyBase.OCT);
				break;
			case 16:
				conversion = anyBase(anyBase.DEC, anyBase.HEX);	
				break;
			default:
				return str;
		}
		return conversion(str);
	}

	render() {
		return (
			<div className="Display">
				{[2,8,10,16].map(base => 
					<div key={`dispcont${base}`} className="display-container information-row">
						<div key={`basename${base}`} className="display-item text-left">{`base${base}`}</div>
						<MainDisplay key={`maindisp${base}`} display={this.convertBase(this.props.mainNum,base)}></MainDisplay>
						<div key={`noidea${base}`} className="display-item">{base}</div>
					</div>
				)}
				<div className="display-container base-row">
					<div className="display-item">{this.props.mainBase}</div>
					<MainDisplay display={this.props.mainNum}></MainDisplay>
					<div className="display-item">0</div>
				</div>
			</div>
		);
	}
}