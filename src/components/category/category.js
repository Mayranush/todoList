import React from "react";
import PropTypes from "prop-types";
import { CategoryItem } from "./categoryItem";

const Category = ({ ...props}) => { 
  return(
      <div className="category-container">   
        { props.itemList.map((item) => {        
        return(  
          <div key = {item.id}> 
            <CategoryItem 
                    item = {item}
                    key = {item.id}
                    id = {item.id + ''}
                    activeCategoryId = {props.activeCategoryId}
                    deleteCategory = {props.deleteCategory} 
                    activeteCategory = {props.activeteCategory}
                    addChildCategory = {props.addChildCategory}
                    toggleCategories = {props.toggleCategories}
                    todoId = {props.todoId}
                    moveTodo = {props.moveTodo}/> 
            {item.childCategories && item.childIsVisible &&
              <div style={{color: "blue",marginLeft: "10px"}}>
                {
                  item.childCategories.map((childItem) => {
                    return(
                      <CategoryItem 
                          item = {childItem}
                          key = {childItem.id}
                          id = {item.id + '-' +childItem.id}
                          activeCategoryId = {props.activeCategoryId}
                          deleteCategory = {props.deleteCategory} 
                          activeteCategory = {props.activeteCategory}
                          toggleCategories = {props.toggleCategories}
                          todoId = {props.todoId}
                          moveTodo = {props.moveTodo}/>
                    )
                  })
                }              
              </div>  
            }
          </div>             
        )        
      })}
    </div>   
  )     
}


Category.propTypes = {
  itemList: PropTypes.array.isRequired,
  activeCategoryId: PropTypes.string.isRequired,
  deleteCategory: PropTypes.func.isRequired,
  activeteCategory: PropTypes.func.isRequired,
  addChildCategory: PropTypes.func.isRequired,
  toggleCategories: PropTypes.func.isRequired,
  todoId : PropTypes.number,
  moveTodo: PropTypes.func.isRequired
}

export { Category }