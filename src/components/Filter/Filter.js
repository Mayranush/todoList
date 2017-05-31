import React, {Component} from "react";
import PropTypes from "prop-types";
import "./Filter.scss"

const Filter = ({ ...props }) => (
  <div className="filter-container">
    <input type="checkbox" name="filterDone" checked={props.filterDoneState} onClick={props.filterDone}/>
    <label htmlFor="filterDone">Done</label>
  </div>
);

export {Filter}