import { Button } from "reactstrap";
import React, { Component } from "react";
import { inputMultiple } from "../redux/actions/counterAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";


class InputMultiple extends Component {
    render() {
        return (
            <div>
                <Button
                    color = "dark"
                    onClick = {(e) => this.props.dispatch(inputMultiple(this.props.input))}
                >
                    Input Multiple
                </Button>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(inputMultiple, dispatch)};
}
export default connect(mapDispatchToProps)(InputMultiple);