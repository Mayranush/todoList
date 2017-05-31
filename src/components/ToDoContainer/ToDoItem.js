import React from "react";
import PropTypes from "prop-types";
const ToDoItem = ({ ...props }) => {
  let items = props.item.items;

  return (
    <div>
      {items.map(
        (item, i) => {

          if(props.filterState === "done" && !item.done){return}
          return (<div className="to-do-item" key={item.id}>
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => {
                props.checkToDoItem(props.cotegoryId, item.id)
              }}/>
            <p>{item.title}</p>
            <div className="edit-item"
                 id={props.cotegoryId + "-" + item.id}
                 onClick={props.openItemInDetails}>
            </div>
          </div>)
        }
      )}
    </div>
  )
};

ToDoItem.propTypes = {
  item: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  checkToDoItem: PropTypes.func.isRequired,
  openItemInDetails: PropTypes.func.isRequired,
};

export {ToDoItem}