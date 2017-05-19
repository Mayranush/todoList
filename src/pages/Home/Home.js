import React, { PropTypes, Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toDoListActions } from "../../actions";
import { ToDoContainer, ToDoProgressBar, Cotegory, ItemInDetail } from "components";
import "./Home.scss"

class Home extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            choosenCategoryId: 0,
            editItem: null
        };
        this.handleChoosenCategory = this.choosenCategory.bind(this);
        this.handleOpenItemInDetails = this.openItemInDetails.bind(this);
        this.handleCancelEdit = this.cancelEdit.bind(this);
    }

    choosenCategory({target}) {
        this.setState({ choosenCategoryId: target.id })
    }


    openItemInDetails({target}) {
        let cotegoryId = +target.id.split("-")[0];
        let itemId = +target.id.split("-")[1];
        let data = this.props.data.data;

        let item = { ...data.filter(item => item.id === cotegoryId)[0].items.filter(item => item.id === itemId)[0] };
        this.setState({ editItem: item })
    }

    cancelEdit() {
        this.setState({ editItem: null })
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
                    {this.state.editItem ? <ItemInDetail
                        editItem={this.state.editItem}
                        cancelEdit={this.handleCancelEdit} />
                        : <ToDoContainer
                            toDoList={data}
                            checkToDoItem={this.props.checkToDoItem}
                            choosenCategoryId={this.state.choosenCategoryId}
                            openItemInDetails={this.handleOpenItemInDetails}
                            />}
                </div>}
            </div>
        )
    }
};


export { Home };
export default connect(
    state => ({ data: state.toDoList }),
    { ...toDoListActions }
)(Home);



