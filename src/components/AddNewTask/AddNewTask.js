import React, {Component} from "react";
import {AddNewTaskItem} from "./AddNewTaskItem";
import PropTypes from "prop-types";
import "./AddNewTask.scss";

class AddNewTask extends Component {

  static propTypes = {
    addCat: PropTypes.func.isRequired,
    addTask: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.handleAddCat = this.addCat.bind(this);
    this.handleAddTask = this.addTask.bind(this);
  }

  addCat() {
    let text = this.catInput.refs.catValue.value;
    this.props.addCat(text);
    this.catInput.refs.catValue.value = "";
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
          addItem={this.handleAddCat}/>
        <AddNewTaskItem
          ref={(input) => {
            this.taskInput = input;
          }}
          inputRef="taskValue"
          placeholderText="Enter task title"
          btnText="Add"
          addItem={this.handleAddTask}/>
      </div>
    )
  }
}


export {AddNewTask}

