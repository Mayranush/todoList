import React, { PropTypes, Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toDoListActions } from "../../actions";
import { ToDoContainer, ToDoProgressBar, Cotegory } from "components";
import "./Home.scss"

class Home extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
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
        let data = this.props.data.data;
        return (
            <div className="main-container">
                {data.length && <div>
                    <ToDoProgressBar
                        toDoList={data}
                        choosenCategoryId={this.state.choosenCategoryId} />
                    <Cotegory
                        toDoList={data}
                        choosenCategoryId={this.state.choosenCategoryId}
                        handleChoosenCategory={this.handleChoosenCategory} />
                    <ToDoContainer
                        toDoList={data}
                        checkToDoItem={this.props.checkToDoItem}
                        choosenCategoryId={this.state.choosenCategoryId} />
                </div>}
            </div>
        )
    }
};


export { Home };
export default connect(
    state => ({ data: state.toDoList }),
    dispatch => bindActionCreators({ ...toDoListActions }, dispatch)
)(Home);




