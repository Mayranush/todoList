import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({...props}) => {  
  return(
    <div>
      <input type="radio" checked={props.type} onChange={() => props.filter(true)}/>
      Show all
      <input type="radio" checked={!props.type} onChange={() => props.filter(false)}/>
      Show checked
    </div>
  )
}

Filter.propTypes = {
  type: PropTypes.bool.isRequired,
  filter: PropTypes.func.isRequired
}

export {Filter}