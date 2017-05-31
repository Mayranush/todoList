import React, {Component} from "react";

class AddNewTaskItem extends Component {
  render() {
   return (
      <div className="add-new-task-item-container">
        <input placeholder={this.props.placeholderText} data-type={this.props.type} ref={this.props.inputRef}/>
        <button onClick={this.props.addItem}>{this.props.btnText}</button>
      </div>
    )
  }
};

export {AddNewTaskItem}



