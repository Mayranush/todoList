import React, {Component} from "react";
import {ToDoItem} from "./ToDoItem";
import PropTypes from "prop-types";
import "./ToDoContainer.scss";

const ToDoContainer = ({ ...props }) => (
  <div className="todo-list-container">
    {props.toDoList.map(
      (item, i) =>
      props.choosenCategoryId == item.id &&
      <ToDoItem
        filterState={props.filterState}
        item={item}
        key={item.id}
        id={item.id}
        cotegoryId={props.choosenCategoryId}
        checkToDoItem={props.checkToDoItem}
        openItemInDetails={props.openItemInDetails}/>
    )}
  </div>
);

ToDoContainer.propTypes = {
  item: PropTypes.object,
  id: PropTypes.string,
  cotegoryId: PropTypes.string,
  checkToDoItem: PropTypes.func.isRequired,
  openItemInDetails: PropTypes.func.isRequired,
};


export {ToDoContainer}

