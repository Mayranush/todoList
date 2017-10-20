import React from "react";
import PropTypes from "prop-types";
import "./todo.scss";

const TodoItem = ({...props}) => {   
    return (
      <div>
        {props.todoList.map((item) => {
          return(
            (props.filter || (!props.filter && item.done)) && (item.title.indexOf(props.search) > -1) &&       
            <div className="todo-item" key={item.id}>
              <input type="checkbox" checked={item.done} onChange={() => props.checkTodo(props.activeCategoryId,item.id)}/>
              <p style={{float:"left"}}>{item.title}</p>
              <div style={{float:"right", marginRight: "5px"}} onClick={() => props.editTodo(props.activeCategoryId, item.id)}>edit </div>
            </div>
          ) 
        })}   
      </div>
    )   
 }

TodoItem.prototype = {
  todoList: PropTypes.array,
  activeCategoryId: PropTypes.string.isRequired,
  checkTodo: PropTypes.func.isRequired,
  filter: PropTypes.bool.isRequired,
  search: PropTypes.string.isRequired,
  editTodo: PropTypes.func.isRequired
}

export {TodoItem}