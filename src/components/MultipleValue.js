import React, { Component } from "react";
import { multipleValue } from "../redux/actions/counterActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

export class MultipleValue extends Component {
  render() {
    return (
      <div>
        <input
          type="number"
          onChange={(e) => this.props.dispatch(multipleValue(e.target.value))}
        ></input>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(multipleValue, dispatch) };
}

export default connect(mapDispatchToProps)(MultipleValue);