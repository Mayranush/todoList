import React, {PropTypes} from "react";

const CotegoryItem = ({ ...props }) => {

  return (
    <div className="cotegory-item">
      <input
        type="checkbox"
        checked={props.check}
        id={props.id}
        onChange={props.handleChoosenCategory}
      />
      <p>{props.item.title}</p>
      <div data-catId={props.id} className="delete-item" onClick={()=>{props.deleteCat(props.id)}}></div>
    </div>
  )
};

CotegoryItem.propTypes = {
  item: PropTypes.object.isRequired
};

export {CotegoryItem}