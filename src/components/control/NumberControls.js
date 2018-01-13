import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateValue } from "../../actions/index";

import _ from 'lodash';
// import { anybase } from "any-base";

class NumberControls extends Component {

  isDisabled(number) {
    return !_.includes(this.props.validLabels, number);
  }

  setBtnClass(number) {
    const isDisabled = !_.includes(this.props.validLabels, number);
    if (isDisabled) {
      return "btn btn-lg control-item btn-outline-secondary";
    } else {
      return "btn btn-lg control-item btn-outline-primary";
    }
  }

  updateNumberValue(number) {
    const baseValue = this.props.value.toString(this.props.base);
    const newBaseValue = `${baseValue}${number.toString()}`;
    return parseInt(newBaseValue, this.props.base);
  }

  createButtons() {
    return this.props.labels.map((number) =>
      <button type="button" key={number} 
              className={this.setBtnClass(number)} 
              disabled={this.isDisabled(number)}
              onClick={() => this.props.updateValue(this.updateNumberValue(number))}>{number}</button>
    );
  }

  render() {
    return (
      <div className="control-container">
        {this.createButtons()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.value,
    base: state.base,
    validLabels: state.validLabels
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({updateValue}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NumberControls);