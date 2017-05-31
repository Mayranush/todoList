import React from "react";
import PropTypes from "prop-types";
const CotegoryItem = ({ ...props }) => (
  <div className="cotegory-item">
    <input
      type="checkbox"
      checked={props.check}
      id={props.id}
      onChange={props.handleChoosenCategory}
    />
    <p>{props.item.title}</p>
    <div data-catId={props.id} className="delete-item" onClick={() => {
      props.deleteCat(props.id)
    }}></div>
  </div>
);

CotegoryItem.propTypes = {
  item: PropTypes.object.isRequired,
  id: PropTypes.string,
  check: PropTypes.bool.isRequired,
  handleChoosenCategory: PropTypes.func.isRequired,
  deleteCat: PropTypes.func.isRequired,
};

export {CotegoryItem}