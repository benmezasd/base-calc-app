import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateBase } from "../../actions/index";

class BaseNumberControls extends Component {
  getClassName(base) {
    if (base === this.props.base) {
      return "btn btn-sm btn-success control-item";
    } else {
      return "btn btn-sm btn-outline-success control-item";
    }
  }

  createValidLabels(base) {
    return [...Array(base).keys()].map(n => {
      return n.toString(base).toUpperCase();
    });
  }

  render() {
    return (
      <div className="control-container">
        {[2,5,8,10,16].map(base => 
          <button key={`base${base}`} type="button" 
                  className={this.getClassName(base)}
                  onClick={() => this.props.updateBase(base, this.createValidLabels(base))}>{base}</button>
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
	return {
		base: state.base
	};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({updateBase}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseNumberControls);