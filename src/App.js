import React, { Component } from "react";
import Counter from "./components/Counter";
import IncreaseCounter from "./components/IncreaseCounter"
import DecreaseCounter from "./components/DecreaseCounter"
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter"
import Multiple from "./components/Multiple";
import InputMultiple from "./components/InputMultiple"
import { Row, Col, Input } from "reactstrap";
import { connect } from "react-redux";
import { inputMultiple } from "./redux/actions/counterAction";
import { bindActionCreators } from "redux";


class App extends Component {
  state = {
    input: ""
  }

  onChangeHandler = (e) => {
    this.setState({ input: e.target.value })
    this.props.dispatch(inputMultiple(e.target.value))
  }
  render() {
    return (
      <Row>
        <Row>
          <Col xs="6">
            <Counter />
          </Col>
          <Col xs="2">
            <h2>Entry Number:</h2>
          </Col>
          <Col xs="3">
            <Input type="number" onChange={this.onChangeHandler} placeholder="Enter the number you want to multiply.."></Input>
          </Col>
        </Row>
        <Col xs="2">
          <IncreaseCounter />
        </Col>
        <Col xs="2">
          <DecreaseCounter />
        </Col>
        <Col xs="2">
          <IncreaseByTwoCounter />
        </Col>
        <Col xs="2">
          <Multiple />
        </Col>
        <Col xs="2">
          <InputMultiple input={this.state.input} />
        </Col>
      </Row>
    );
  }
};
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(inputMultiple, dispatch) };
}

export default connect(mapDispatchToProps)(App);
