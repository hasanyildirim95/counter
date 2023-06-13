import { Button } from "reactstrap";
import React, { Component } from "react";
import { increaseByTwoCounter } from "../redux/actions/counterAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";


class IncreaseByTwoCounter extends Component {
    render() {
        return (
            <div>
                <Button
                    color = "primary"
                    onClick = {(e) => this.props.dispatch(increaseByTwoCounter())}
                >
                    Increase By Two Count
                </Button>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(increaseByTwoCounter, dispatch)};
}
export default connect(mapDispatchToProps)(IncreaseByTwoCounter);