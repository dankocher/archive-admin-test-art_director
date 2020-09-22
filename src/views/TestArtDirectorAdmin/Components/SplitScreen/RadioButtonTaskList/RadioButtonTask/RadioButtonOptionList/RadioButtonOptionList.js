import "./RadioButtonOptionList.scss";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addRadioButtonOption } from "../../../../../../../redux/actions";

import RadioButtonOption from "./RadioButtonOption/RadioButtonOption";

function RadioButtonOptionList({ radioButtonOptionList, index }) {
  const dispatch = useDispatch();

  const handlerAddOptionBtn = () => {
    dispatch(addRadioButtonOption(index));
  };

  return (
    <div className="container--RadioButtonAnswers">
      {radioButtonOptionList.map((element, key) => (
        <RadioButtonOption
          key={key}
          option={element.option}
          mark={element.mark}
        />
      ))}
      <div className="container-answer--RadioButtonAnswers">
        <button
          onClick={handlerAddOptionBtn}
          className="hidden-button input btn-add--RadioButtonTaskList"
        >
          Добавить вариант
        </button>
      </div>
    </div>
  );
}

export default RadioButtonOptionList;
