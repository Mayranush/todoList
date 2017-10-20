import React from 'react';
import PropTypes from 'prop-types';

export class Search extends React.Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired
  }

  render() {
    return(
    <div style={{float:"right"}}>
      <input type="text" placeholder="search" onChange={this.props.onChange}/>
    </div>
  )}   
}

