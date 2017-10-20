import React from 'react';
import PropTypes from 'prop-types';
import { AddCatOrTodoItem } from './addCatOrTodoItem';


export class AddCatOrTodo extends React.Component {

  static propTypes = {
    addCategory: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired
  }

  constructor(props){
    super(props);
    
    this.handleAddCategory = this.addCategory.bind(this);
    this.handleAddTodo = this.addTodo.bind(this);
  }

  addCategory() {
    let text = this.catInput.refs.addCategory.value;
    this.props.addCategory(text);
    this.catInput.refs.addCategory.value = "";
  }

  addTodo() {
    let text = this.todoInput.refs.addTodo.value;
    this.props.addTodo(this.props.activeCategoryId, text);
    this.todoInput.refs.addTodo.value = "";
  }

  render() {
    return(
      <div>
        <AddCatOrTodoItem ref={(input) => this.catInput = input} text="add category" criteria="addCategory" action={this.handleAddCategory}/>
        <AddCatOrTodoItem ref={(input) => this.todoInput = input} text="add todo" criteria="addTodo" action={this.handleAddTodo}/>
      </div>
    )
  }
}