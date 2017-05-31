import React, {PropTypes, Component} from "react";
import {ToDoItem} from "./ToDoItem";

import "./ToDoContainer.scss";

const ToDoContainer = ({ ...props }) => (
  <div className="todo-list-container">
    {props.toDoList.map(
      (item, i) =>
      props.choosenCategoryId == item.id &&
      <ToDoItem
        item={item}
        key={item.id}
        id={item.id}
        cotegoryId={props.choosenCategoryId}
        checkToDoItem={props.checkToDoItem}
        openItemInDetails={props.openItemInDetails}/>
    )}
  </div>
);


export {ToDoContainer}

