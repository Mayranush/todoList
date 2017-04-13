import React, { PropTypes, Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toDoListActions } from "../../actions";
import { ToDoContainer, ToDoProgressBar } from "components";
import "./Home.scss"

class Home extends Component {

    static propTypes = {
        toDoData: PropTypes.array.isRequired
    };


    render() {
        return (
            <div className="main-container">
                {this.props.toDoData.length && <div>
                    <ToDoProgressBar toDoList={this.props.toDoData} />
                    <ToDoContainer
                        toDoList={this.props.toDoData}
                        checkToDoItemAction={this.props.checkToDoItemAction} />
                </div>}
            </div>
        )
    }
};


export { Home };
export default connect(
    state => ({ toDoData: state.toDoList }),
    dispatch => bindActionCreators({ ...toDoListActions }, dispatch)
)(Home);




