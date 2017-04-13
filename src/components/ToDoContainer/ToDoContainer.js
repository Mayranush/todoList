import React, { PropTypes, Component } from "react";
import { ToDoItem } from "./ToDoItem";

import "./ToDoContainer.scss";


class ToDoContainer extends Component {

    static propTypes = {
        toDoList: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
        this.handleCheckItem = this.checkItem.bind(this);
    }

    checkItem({target}) {
        this.props.checkToDoItemAction({ id: target.id })
    }

    render() {

        return (
            <div className="todo-list-container">
                {this.props.toDoList.map(
                    (item, i) => <ToDoItem
                        item={item}
                        key={item.id}
                        id={item.id}
                        handleCheckItem={this.handleCheckItem} />
                )}
            </div>
        )
    }
};


export { ToDoContainer }