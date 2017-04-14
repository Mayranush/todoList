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

        this.props.checkToDoItemAction({ cotegoryId: target.id.split("-")[0], itemId: target.id.split("-")[1] })
    }

    render() {

        return (
            <div className="todo-list-container">
                {this.props.toDoList.map(
                    (item, i) =>
                        this.props.choosenCategoryId == item.id &&
                        <ToDoItem
                            item={item}
                            key={item.id}
                            id={item.id}
                            cotegoryId={this.props.choosenCategoryId}
                            handleCheckItem={this.handleCheckItem} />
                )}
            </div>
        )
    }
};


export { ToDoContainer }

