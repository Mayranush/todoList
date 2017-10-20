import React from 'react';
import PropTypes from 'prop-types';
import './addCatOrTodo.scss';

export class AddCatOrTodoItem extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
    criteria: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
  }
  
  render() {
    return (
      <div className="add-category">
        <input type="text" placeholder={this.props.text} ref={this.props.criteria}/>
        <button onClick={this.props.action}>add</button>
      </div>
    )
  }
}