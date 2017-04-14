import React, { PropTypes, Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toDoListActions } from "../../actions";
import { ToDoContainer, ToDoProgressBar, Cotegory } from "components";
import "./Home.scss"

class Home extends Component {

    static propTypes = {
        toDoData: PropTypes.array.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            choosenCategoryId: 0
        };
        this.handleChoosenCategory = this.choosenCategory.bind(this);
    }

    choosenCategory({target}) {
        this.setState({ choosenCategoryId: target.id })
    }

    render() {
        return (
            <div className="main-container">
                {this.props.toDoData.length && <div>
                    <ToDoProgressBar
                        toDoList={this.props.toDoData}
                        choosenCategoryId={this.state.choosenCategoryId} />
                    <Cotegory
                        toDoList={this.props.toDoData}
                        choosenCategoryId={this.state.choosenCategoryId}
                        handleChoosenCategory={this.handleChoosenCategory} />

                    <ToDoContainer
                        toDoList={this.props.toDoData}
                        checkToDoItemAction={this.props.checkToDoItemAction}
                        choosenCategoryId={this.state.choosenCategoryId} />
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




