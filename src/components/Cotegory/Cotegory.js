import React, {Component} from "react";
import PropTypes from "prop-types";
import {CotegoryItem} from "./CotegoryItem";

import "./Cotegory.scss";


const Cotegory = ({ ...props }) => (

  <div className="cotegory-container">
    {props.toDoList.map(
      (item, i) => <CotegoryItem
        item={item}
        key={item.id}
        id={item.id}
        check={props.choosenCategoryId == item.id}
        handleChoosenCategory={props.handleChoosenCategory}
        deleteCat={props.deleteCat}/>
    )}
  </div>
);

Cotegory.propTypes = {
  item: PropTypes.object,
  key: PropTypes.string,
  check: PropTypes.string,
  handleChoosenCategory: PropTypes.func.isRequired,
  deleteCat: PropTypes.func.isRequired,
};

export {Cotegory}