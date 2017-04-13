import React, { PropTypes } from "react";

const ToDoItem = ({...props}) => {

    return (
        <div className="to-do-item">
            <input
                type="checkbox"
                checked={props.item.done}
                id={props.id}
                onClick={props.handleCheckItem} />
            <p>{props.item.title}</p>

        </div>
    )
}

ToDoItem.propTypes = {
    item: PropTypes.object.isRequired
}

export { ToDoItem }