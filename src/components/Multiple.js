import { Button } from "reactstrap";
import React, { Component } from "react";
import { multiple } from "../redux/actions/counterAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";


class Multiple extends Component {
    render() {
        return (
            <div>
                <Button
                    color = "warning"
                    onClick = {(e) => this.props.dispatch(multiple())}
                >
                    Multiple
                </Button>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(multiple, dispatch)};
}
export default connect(mapDispatchToProps)(Multiple);