import React, { PropTypes } from "react";
import { ToDoItem } from "./ToDoItem";

import "./ToDoContainer.scss";

const ToDoContainer = ({...props}) => {
  
    return (
        <div className="todo-list-container">
            {props.toDoList.map(
                (item, i) => <ToDoItem item={item} key={item.id} />
            )}
        </div>
    )
}

ToDoContainer.PropTypes = {
    toDoList: PropTypes.array.isRequired
};

export { ToDoContainer }
