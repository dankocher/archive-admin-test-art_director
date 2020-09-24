import "./DropDown.scss";

import React from "react";
import { Link } from "@material-ui/core";

function DropDown(props) {
  return (
    <div className="">
      <select className="input" onChange={props.onChange} value={props.value}>
        {Object.keys(props.taskTypeEnum).map((key) => (
          <option key={key} value={key}>
            {props.taskTypeEnum[key]}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDown;
