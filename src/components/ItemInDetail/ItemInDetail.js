import React, { PropTypes, Component } from "react";

import "./ItemInDetail.scss";

const ItemInDetail = ({...props}) => {

    let item = props.editItem;
    return (
        <div className="esit-item-container">
            <div className="buttons">
                <button onClick={props.cancelEdit}>cancel</button>
            </div>
            <div>
                <input value={item.title} />
            </div>
            <div>
                <input type="checkbox" checked={item.done} name="done" />
                <label htmlFor="done">Done</label>
            </div>
            <div>
                <textarea>{item.text}</textarea>
            </div>
        </div>
    )
}



export { ItemInDetail }

