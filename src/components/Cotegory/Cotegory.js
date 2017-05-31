import React, {PropTypes, Component} from "react";
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


export {Cotegory}