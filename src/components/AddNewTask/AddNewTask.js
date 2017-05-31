import React, {Component} from "react";
import {AddNewTaskItem} from "./AddNewTaskItem";
import ReactDOM from 'react-dom'
import "./AddNewTask.scss";

class AddNewTask extends Component {
  constructor(props) {
    super(props);

    this.handleAddCat = this.addCat.bind(this);
    this.handleAddTask = this.addTask.bind(this);
  }

  addCat() {
    let text = this.catInput.refs.catValue.value;
    this.props.addCat(text);
    this.catInput.refs.catValue.value="";
  }

  addTask() {
    let text = this.taskInput.refs.taskValue.value;
    this.props.addTask(this.props.choosenCatId, text);
    this.taskInput.refs.taskValue.value = "";
  }

  render() {

    return (
      <div className="add-new-item-container">
        <AddNewTaskItem
          ref={(input) => {
            this.catInput = input;
          }}
          inputRef="catValue"
          placeholderText="Enter category title"
          btnText="Add"
          type="cat"
          addItem={this.handleAddCat}/>
        <AddNewTaskItem
          ref={(input) => {
            this.taskInput = input;
          }}
          inputRef="taskValue"
          placeholderText="Enter task title"
          btnText="Add"
          type="task"
          addItem={this.handleAddTask}/>
      </div>
    )
  }
}


export {AddNewTask}

