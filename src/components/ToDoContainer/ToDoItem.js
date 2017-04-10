import React, { PropTypes } from "react";

const ToDoItem = ({...props}) => {

    return (
        <div>{props.item.title}</div>
    )
}

ToDoItem.propTypes = {
    item: PropTypes.object.isRequired
}

export { ToDoItem }