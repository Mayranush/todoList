import React, { PropTypes, Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ToDoContainer, ToDoProgressBar } from "components";
import "./ToDo.scss"

class ToDo extends Component {

    static propTypes = {
        toDoData: PropTypes.array.isRequired
    };



    render() {

        return (
            <div className="main-container">
                {this.props.toDoData.length && <ToDoProgressBar toDoList={this.props.toDoData} />}
                {this.props.toDoData.length && <ToDoContainer toDoList={this.props.toDoData} />}
            </div>
        )
    }
};


export { ToDo };
export default connect(
    state => ({ toDoData: state.toDoList }),
    // dispatch => bindActionCreators({ ...modalActions }, dispatch)
)(ToDo);




