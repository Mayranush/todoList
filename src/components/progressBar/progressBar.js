import React from 'react';
import './progressBar.scss';
import PropTypes from 'prop-types';

let allItemsCount;
let checkedItemsCount;

let test = (array, id) => {
  allItemsCount = 0;
  checkedItemsCount = 0;
  array.filter((cat) => {
    if (cat.id == id) {
      cat.items.map((todo) => {
        allItemsCount++;
        if (todo.done) {
          checkedItemsCount++;
        }
      })
    }  
    if (id.indexOf("-") > -1 && cat.id == id.substring(0, id.indexOf("-")) && cat.childCategories) {
      
      cat.childCategories.map((childCategory) => {
        if (cat.id + '-' + childCategory.id == id) {
          childCategory.items.map((todo) => {
            allItemsCount++;
            if (todo.done) {
              checkedItemsCount++;
            }
          })
        } 
      })
    } 
  })
}

const ProgressBar = ({...props}) => {
  test(props.itemList, props.activeCategoryId);
  let per = checkedItemsCount*100/allItemsCount + "%";
  return(
    <div className="progress-bar">
      <div style={{ width:per }}></div>
    </div>
  )
}

ProgressBar.propTypes = {
  itemList: PropTypes.array.isRequired,
  activeCategoryId: PropTypes.string.isRequired
}
 export {ProgressBar}