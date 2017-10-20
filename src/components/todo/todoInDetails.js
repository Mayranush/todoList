import React from 'react';
import PropTypes from 'prop-types';

export class TodoInDetails extends React.Component {
  constructor(props){
    super(props)
    this.handleSave = this.save.bind(this);    

    this.props.itemList.map((item) => {      
      if (item.id == this.props.activeCategoryId) {
        item.items.map((todo) => {
          if (todo.id == this.props.todoId) {
            this.currentTodo = todo;
          }
        })
      }
      if (this.props.activeCategoryId.indexOf("-") > -1 && item.id == this.props.activeCategoryId.substring(0, this.props.activeCategoryId.indexOf("-"))) {
        item.childCategories.map((childCategory) => {
          if (item.id + '-' + childCategory.id == this.props.activeCategoryId) {
            childCategory.items.map((todo) => {
              if (todo.id == this.props.todoId) {
                this.currentTodo = todo;
              }
            })
          } 
        })
      } 
    })
  }
  
  static propTypes = {
    itemList: PropTypes.array.isRequired,
    activeCategoryId: PropTypes.string.isRequired,
    todoId: PropTypes.number.isRequired,
    saveTodo: PropTypes.func.isRequired,
    closeDetails: PropTypes.func.isRequired
  }
  
  
  save = () => {
    this.currentTodo = {
      title: this.refs.title.value,
      done: this.refs.done.checked,
      text: this.refs.text.value
    }
    this.props.saveTodo( this.currentTodo.title,  this.currentTodo.done, this.currentTodo.text);
  }
 
  render() {
    return(
      <div style={{ float: "right"}}>
        <input type="text" defaultValue={this.currentTodo.title} ref="title" style={{ float: "left"}} />
        <input type="checkbox" defaultChecked={this.currentTodo.done} ref="done" style={{ float: "left"}} />
        <input type="text" defaultValue={this.currentTodo.text} ref="text" style={{ float: "left", width: "160px", height: "200px"}} />
        <button onClick={this.handleSave}>save</button>
        <button onClick={this.props.closeDetails}>cancel</button>
      </div>
    )    
  }     
}
     


