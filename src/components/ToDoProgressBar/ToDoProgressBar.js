import React, { PropTypes } from "react";
import "./ToDoProgressBar.scss";

const ToDoProgressBar = ({...props}) => {

   
    let countDone = 0;
    let fillBarWidth;

    for (var i = 0; i < props.toDoList.length; i++) {
        props.toDoList[i].done ? countDone++ : "";
    }

    fillBarWidth = (countDone * 100) / props.toDoList.length;

    return (
        <div className="bar-container">
            <div className="bar">
                <div className="bar-fill" style={{ width: fillBarWidth + "%" }}></div>
            </div>
        </div>
    )
}

ToDoProgressBar.PropTypes = {
    toDoList: PropTypes.array.isRequired
}

export { ToDoProgressBar };