import React from "react";
import PropTypes from "prop-types";
import "./ToDoProgressBar.scss";

const ToDoProgressBar = ({ ...props }) => {

  let countDone = 0;
  let fillBarWidth;
  let items;

  props.toDoList.map(catItem => {
    if (catItem.id == props.choosenCategoryId) {
      items = catItem.items;
      for (let j = 0; j < items.length; j++) {
        items[j].done ? countDone++ : "";
      }
    }
  });

  fillBarWidth = (countDone * 100) / items.length;

  return (
    <div className="bar-container">
      <div className="bar">
        <div className="bar-fill" style={{ width: fillBarWidth + "%" }}></div>
      </div>
    </div>
  )
};

ToDoProgressBar.propTypes = {
  toDoList: PropTypes.array.isRequired,
  id: PropTypes.string,
  cotegoryId: PropTypes.number,
};
export {ToDoProgressBar};