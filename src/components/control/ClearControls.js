import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { zeroValue, deleteValue } from "../../actions/index";

class ClearControls extends Component {

  getClickEvent(functionLabel) {
    switch(functionLabel) {
      case 'AC':
      case 'C':
        return this.props.zeroValue();
      case 'DEL':
        let delStrVal = this.props.value.toString(this.props.base).slice(0,-1);
        if (delStrVal === '') delStrVal = '0';
        const decVal = parseInt(delStrVal, this.props.base);
        return this.props.delValue(decVal);
      default:
        return undefined;
    }
  }

  functionList() {
    return this.props.functions.map((functionLabel) =>
      <button type="button" key={functionLabel} 
        className={`btn control-item ${this.props.btnStyle}`}
        onClick={() => this.getClickEvent(functionLabel)}>{functionLabel}</button>
    );
  }

  render() {
    return (
      <div className="control-container">{this.functionList()}</div>
    );
  }
}

function mapStateToProps(state) {
	return {
		value: state.value,
		base: state.base
	};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({zeroValue, delValue: deleteValue}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClearControls);