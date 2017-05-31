import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {toDoListActions} from "../../actions";
import {ToDoContainer, ToDoProgressBar, Cotegory, ItemInDetail, AddNewTask, Filter} from "components";
import "./Home.scss"

class Home extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      choosenCategoryId: 0,
      editItem: { id: null, item: null },
      filterState: "all"
    };
    this.handleChoosenCategory = this.choosenCategory.bind(this);
    this.handleOpenItemInDetails = this.openItemInDetails.bind(this);
    this.handleCloseEdit = this.closeEdit.bind(this);
    this.handleFilterDone = this.filterDone.bind(this)
  }

  filterDone({ target }) {
    target.value !== this.state.filterState && this.setState({ filterState: target.value });
  }

  choosenCategory({ target }) {
    this.setState({ choosenCategoryId: target.id })
  }

  openItemInDetails({ target }) {
    let cotegoryId = target.id.split("-")[0];
    let itemId = target.id.split("-")[1];
    let data = this.props.data.data;

    let item = { ...data.filter(item => item.id === cotegoryId)[0].items.filter(item => item.id === itemId)[0] };
    this.setState({
      editItem: {
        id: cotegoryId + "-" + itemId,
        item: item
      }
    })
  }

  closeEdit() {
    this.setState({
      editItem: {
        id: null,
        item: null
      }
    })
  }

  render() {

    let data = this.props.data.data;

    return (
      <div className="main-container">
        {data.length && <div>
          <Filter filter={this.handleFilterDone} filterState={this.state.filterState}/>
          <ToDoProgressBar
            toDoList={data}
            choosenCategoryId={this.state.choosenCategoryId}/>

          <AddNewTask addCat={this.props.addCat}
                      addTask={this.props.addTask}
                      choosenCatId={this.state.choosenCategoryId}/>
          <div className="content-container">
            <Cotegory
              toDoList={data}
              choosenCategoryId={this.state.choosenCategoryId}
              handleChoosenCategory={this.handleChoosenCategory}
              deleteCat={this.props.deleteCat}/>

            {this.state.editItem.id ? <ItemInDetail
                itemId={this.state.editItem.id}
                editItem={this.state.editItem.item}
                closeEdit={this.handleCloseEdit}
                editToDoItem={this.props.editToDoItem}/>
              : <ToDoContainer
                filterState={this.state.filterState}
                toDoList={data}
                checkToDoItem={this.props.checkToDoItem}
                choosenCategoryId={this.state.choosenCategoryId}
                openItemInDetails={this.handleOpenItemInDetails}
              />}
          </div>
        </div>}
      </div>
    )
  }
}

export {Home};
export default connect(
  state => ({ data: state.toDoList }),
  { ...toDoListActions }
)(Home);




