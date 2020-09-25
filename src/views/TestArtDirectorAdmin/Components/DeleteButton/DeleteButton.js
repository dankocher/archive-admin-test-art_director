import React from "react";
import "./DeleteButton.scss";

import deleteIcon from "../../utils/icons/delete-icon";

import { isFunction } from "../../helpers/isFunction";

function DeleteButton(props) {
  const onClick = isFunction(props.onClick) ? props.onClick : () => {};

  return (
    <button
      onClick={() => onClick()}
      className={`hidden-button trash-button ${
        props.className ? props.className : ""
      }`}
    >
      <i>{deleteIcon}</i>
    </button>
  );
}

export default DeleteButton;
