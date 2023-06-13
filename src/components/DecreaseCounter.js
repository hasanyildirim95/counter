import { Button } from "reactstrap";
import React, { Component } from "react";
import { decreaseCounter } from "../redux/actions/counterAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";


class DecreaseCounter extends Component {
    render() {
        return (
            <div>
                <Button
                    color = "danger"
                    onClick = {(e) => this.props.dispatch(decreaseCounter())}
                >
                    Decrease
                </Button>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(decreaseCounter, dispatch)};
}
export default connect(mapDispatchToProps)(DecreaseCounter);