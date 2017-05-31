import React, {Component} from "react";
import PropTypes from "prop-types";
import "./ItemInDetail.scss";

class ItemInDetail extends Component {

  static propTypes = {
    editItem: PropTypes.object,
    closeEdit: PropTypes.func.isRequired,
    editToDoItem: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.handleEaveEditItem = this.saveEditItem.bind(this);
  }

  saveEditItem() {
    let data = {
      text: this.refs.textInput.value,
      done: this.refs.doneInput.checked,
      title: this.refs.titleInput.value
    };

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
          <input defaultValue={item.title} ref="titleInput"/>
        </div>
        <div>
          <input type="checkbox" defaultChecked={item.done} ref="doneInput" name="done"/>
          <label htmlFor="done">Done</label>
        </div>
        <div>
          <textarea ref="textInput" defaultValue={item.text}></textarea>
        </div>
      </div>
    )
  }
}


export {ItemInDetail}

