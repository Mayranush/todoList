import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {toDoListActions} from "../../actions";
import {AddCatOrTodo, Category, Todo, ProgressBar, Filter, Search, TodoInDetails, Parent} from "../../components";
import "./home.scss";

// These two containers are siblings in the DOM
const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');

class HomePage extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  constructor(props) {
    
    super(props);
    this.state = {
      activeCategoryId: "0",
      filter: true,
      search: '',
      todoId: null
    }

    //this.handleActiveteCategory = this.activeteCategory.bind(this);
    this.handleFilterTodos = this.filterTodos.bind(this);
    this.handleEditTodo = this.editTodo.bind(this);
    this.handleSave = this.save.bind(this);
    this.handleCloseDetails = this.closeDetails.bind(this);
  }
 
  handleActiveteCategory = ({target}) => {  
    this.setState({activeCategoryId : target.id});
  }

  filterTodos = (boolForFilter) => {
    this.setState({filter: boolForFilter});
  }

  handleSearch = function(event) {        
    this.setState({search: event.target.value});
  }

  editTodo = (catId, todoId) => {
    this.setState({activeCategoryId: catId});
    this.setState({todoId: todoId});
  }

  save = (title, done, text) => {   
    this.props.edit(this.state.activeCategoryId, this.state.todoId, title, done, text);
    this.setState({todoId: null});
  }

  closeDetails = () => {
    this.setState({todoId: null});
  }

  render() {
    let data = this.props.data.data;
    return (
      <div className="main-container">
        <Filter type = {this.state.filter} 
                filter = {this.handleFilterTodos}/>
        <Search onChange = {this.handleSearch.bind(this)}/>
        <ProgressBar itemList = {data}  
                     activeCategoryId = {this.state.activeCategoryId} />  
        <AddCatOrTodo addCategory = {this.props.addCat}
                      addTodo = {this.props.addTodo}
                      activeCategoryId = {this.state.activeCategoryId}/>
        <Category itemList = {data}
                  activeCategoryId = {this.state.activeCategoryId}
                  deleteCategory = {this.props.deleteCat}
                  activeteCategory = {this.handleActiveteCategory} 
                  addChildCategory = {this.props.addChildCategory}
                  toggleCategories = {this.props.toggleCategories}
                  todoId = {this.state.todoId}
                  moveTodo = {this.props.moveTodo}/>
        {(this.state.todoId == null) &&
            <Todo categoryList = {data}  
                activeCategoryId = {this.state.activeCategoryId}
                checkTodo = {this.props.checkTodo}
                filter = {this.state.filter}
                search = {this.state.search}
                editTodo = {this.handleEditTodo}/>
        }{
          (this.state.todoId != null) &&
          <TodoInDetails  itemList = {data}
                          activeCategoryId = {this.state.activeCategoryId}
                          todoId = {this.state.todoId}
                          saveTodo = {this.handleSave} 
                          closeDetails = {this.handleCloseDetails}/>
        }    
        {/* <div id="app-root" style={{float: "left, margin: 100px"}}>
          <Parent />
        </div>
        <div id="modal-root">          
        </div>         */}
      </div>
    )
  }
}

export {HomePage};
export default connect(
  state => ({ data: state.toDoList }),
  { ...toDoListActions }
)(HomePage);





