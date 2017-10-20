import React from "react";
import PropTypes from "prop-types";
import { TodoItem } from "./todoItem"; 
import "./todo.scss";

const Todo = ({...props}) => {  
  return(
  <div className="todo-container">  
    {props.categoryList.map((item) => {
      return(      
        ((item.id == props.activeCategoryId) &&
        <TodoItem todoList = {item.items}
                key = {item.id}
                activeCategoryId = {props.activeCategoryId}
                checkTodo = {props.checkTodo}
                filter = {props.filter} 
                search = {props.search}   
                editTodo = {props.editTodo} />) ||
        (
          (props.activeCategoryId.indexOf("-") > -1) && (item.id == props.activeCategoryId.substring(0, props.activeCategoryId.indexOf("-"))) &&  item.childCategories &&
          item.childCategories.map((childItem) => {
            if((item.id + '-' + childItem.id) == props.activeCategoryId){
              return(
                <TodoItem todoList = {childItem.items}
                          key = {childItem.id}
                          activeCategoryId = {props.activeCategoryId}
                          checkTodo = {props.checkTodo}
                          filter = {props.filter} 
                          search = {props.search}   
                          editTodo = {props.editTodo} />
              )
            }          
          })
        )                
      )
    })}    
  </div>
)} 
  
Todo.prototype = {
  categoryList: PropTypes.array.isRequired,
  activeCategoryId: PropTypes.string.isRequired,
  checkTodo: PropTypes.func.isRequired,
  filter: PropTypes.bool.isRequired,
  search: PropTypes.string.isRequired,
  editTodo: PropTypes.func.isRequired
}

export {Todo}