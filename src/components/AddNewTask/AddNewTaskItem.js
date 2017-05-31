import React, {Component} from "react";
import PropTypes from "prop-types";

class AddNewTaskItem extends Component {
  render() {
    return (
      <div className="add-new-task-item-container">
        <input placeholder={this.props.placeholderText} ref={this.props.inputRef}/>
        <button onClick={this.props.addItem}>{this.props.btnText}</button>
      </div>
    )
  }
};

AddNewTaskItem.propTypes = {
  placeholderText: PropTypes.string.isRequired,
  inputRef: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  addItem: PropTypes.func.isRequired,
};

export {AddNewTaskItem}



