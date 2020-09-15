import React from "react";

import "./RadioButton.scss";

function RadioButton(props) {
  return (
    <div className="radioButton-field--radioButton">
      <label htmlFor={props.id} className="radioButton-container--radioButton">
        {props.value ? (
          <label
            style={
              props.value
                ? { backgroundColor: "#484848" }
                : { backgroundColor: "#ffffff" }
            }
            htmlFor={props.id}
            className="checked-icon--radioButton"
          ></label>
        ) : null}
      </label>
      <label htmlFor={props.id} className="base-font-small">
        {props.label}
      </label>
      <input
        id={props.id}
        name={props.name}
        type="radio"
        value={props.value}
        onChange={() => props.onChange()}
      />
    </div>
  );
}

export default RadioButton;
