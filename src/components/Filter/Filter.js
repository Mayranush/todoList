import React, {Component} from "react";
import PropTypes from "prop-types";
import "./Filter.scss"

const Filter = ({ ...props }) => (<div className="filter-container">
    <input type="radio" name="filterState" value="done" checked={props.filterState === "done"} onChange={props.filter}/>
    <label htmlFor="filterDone">Show Done</label>

    <input type="radio" name="filterState" value="all" checked={props.filterState === "all"} onChange={props.filter}/>
    <label htmlFor="filterDone">Show All</label>
  </div>
);

export {Filter}