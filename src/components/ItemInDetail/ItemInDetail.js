import React, { PropTypes, Component } from "react";

import "./ItemInDetail.scss";

class ItemInDetail extends Component {


    constructor(props) {
        super(props);

        this.handleEaveEditItem = this.saveEditItem.bind(this);
    }

    saveEditItem() {
        let data = {
            text: this.refs.textInput.value,
            done: this.refs.doneInput.checked,
            title: this.refs.titleInput.value
        }

        this.props.editToDoItem(this.props.itemId, data);
        this.props.closeEdit();
    }

    render() {
        let item = this.props.editItem;
        return (
            <div className="esit-item-container">
                <div className="buttons">
                    <button onClick={this.props.closeEdit}>cancel</button>
                    <button onClick={this.handleEaveEditItem}>Save</button>
                </div>
                <div>
                    <input value={item.title} ref="titleInput" />
                </div>
                <div>
                    <input type="checkbox" checked={item.done} ref="doneInput" name="done" />
                    <label htmlFor="done">Done</label>
                </div>
                <div>
                    <textarea ref="textInput" >{item.text}</textarea>
                </div>
            </div>
        )
    }
}



export { ItemInDetail }

