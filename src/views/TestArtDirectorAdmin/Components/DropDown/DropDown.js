import "./DropDown.scss";

import React from "react";

function DropDown(props) {
  return (
    <div className="">
      <select
        className="input"
        onChange={(event) => props.onChange(event)}
        value={props.value}
      >
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
