import React from 'react';
import PropTypes from 'prop-types';
import './category.scss'; 

const CategoryItem = ({ ...props }) => {    
  return(
    <div className="category-item">      
      {!props.item.childCategories &&  <input type="radio" checked={props.id == props.activeCategoryId ? true : false} id={props.id}  onChange={props.activeteCategory}/>}
      {props.item.childCategories && !props.item.childIsVisible && <div style={{float: "left", margin: "0 7px",cursor: "pointer"}} onClick={() => props.toggleCategories(props.id)}>{'\u2227'}</div>}
      {props.item.childCategories && props.item.childIsVisible && <div style={{float: "left", margin: "0 7px",cursor: "pointer"}} onClick={() => props.toggleCategories(props.id)}>{'\u2228'}</div>}
      <span>{props.item.title}</span>     
      {props.id.indexOf("-") == -1 && props.todoId == null && <span onClick={() => props.addChildCategory(props.id)} style={{float: "right",marginLeft: "5px",cursor: "pointer"}}>+</span>}
      {props.todoId == null && <span onClick={() => props.deleteCategory(props.id)} className="category-item-delete">x</span>}
      {props.todoId != null && <span style={{float: "right"}} onClick={() => props.moveTodo(props.id, props.activeCategoryId, props.todoId)}>{'\u25C4 '}</span>}
    </div>
  )  
}

CategoryItem.propTypes = {
  item: PropTypes.object.isRequired, 
  id: PropTypes.string.isRequired,
  activeCategoryId: PropTypes.string.isRequired,
  deleteCategory: PropTypes.func.isRequired,
  activeteCategory: PropTypes.func.isRequired,
  addChildCategory: PropTypes.func,
  toggleCategories: PropTypes.func.isRequired,
  todoId : PropTypes.number,
  moveTodo: PropTypes.func.isRequired
}

export  {CategoryItem}