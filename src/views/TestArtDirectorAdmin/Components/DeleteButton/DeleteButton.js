import React, { useState } from "react";
import "./DeleteButton.scss";

import deleteIcon from "../../utils/icons/delete-icon";

const classNames = require("classnames");

function DeleteButton(props) {
  const [isHoveredTrashButton, setIsHoveredTrashButton] = useState(false);

  // const trashIconClasses = classNames({
  //   "trash-icon-active": isHoveredTrashButton,
  //   "trash-icon-inactive": !isHoveredTrashButton,
  // });

  return (
    <button
      onClick={() => props.onClick()}
      className={`hidden-button trash-button ${
        props.className ? props.className : ""
      }`}
      onMouseEnter={() => setIsHoveredTrashButton(true)}
      onMouseLeave={() => setIsHoveredTrashButton(false)}
    >
      <i>{deleteIcon}</i>
    </button>
  );
}

export default DeleteButton;
