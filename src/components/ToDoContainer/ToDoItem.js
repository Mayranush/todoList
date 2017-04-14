import React, { PropTypes } from "react";

const ToDoItem = ({...props}) => {
    let items = props.item.items;

    return (
        <div>
            {items.map(
                (item, i) =>
                    <div className="to-do-item" key={item.id}>
                        <input
                            type="checkbox"
                            checked={item.done}
                            id={props.cotegoryId + "-" + item.id}
                            onClick={props.handleCheckItem} />
                        <p>{item.title}</p>
                    </div>
            )}
        </div>
    )
}

ToDoItem.propTypes = {
    item: PropTypes.object.isRequired
}

export { ToDoItem }