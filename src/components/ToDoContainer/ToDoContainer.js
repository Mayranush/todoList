import React, {PropTypes, Component} from "react";
import {ToDoItem} from "./ToDoItem";

import "./ToDoContainer.scss";

const ToDoContainer = ({ ...props }) => (
  <div className="todo-list-container">
    {this.props.toDoList.map(
      (item, i) =>
      this.props.choosenCategoryId == item.id &&
      <ToDoItem
        item={item}
        key={item.id}
        id={item.id}
        cotegoryId={this.props.choosenCategoryId}
        checkToDoItem={this.props.checkToDoItem}
        openItemInDetails={this.props.openItemInDetails}/>
    )}
  </div>
);


export {ToDoContainer}

