import React, { useState } from "react";
import "./DeleteButton.scss";

import deleteIcon from "../../utils/icons/delete-icon";

import {isFunction} from "../../helpers/isFunction";

const classNames = require("classnames");

function DeleteButton(props) {
  const [isHoveredTrashButton, setIsHoveredTrashButton] = useState(false);

  // const trashIconClasses = classNames({
  //   "trash-icon-active": isHoveredTrashButton,
  //   "trash-icon-inactive": !isHoveredTrashButton,
  // });
  const onClick = isFunction(props.onClick) ? props.onClick : () => {};

  return (
    <button
      onClick={() => onClick()}
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
