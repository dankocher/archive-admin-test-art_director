import "./RadioButtonOptionList.scss";
import React from "react";
import { useDispatch } from "react-redux";

import { addRadioButtonOption } from "../../../../../../../../../redux/actions";

import RadioButtonOption from "./RadioButtonOption/RadioButtonOption";

function RadioButtonOptionList({ radioButtonOptionList, index }) {
  const dispatch = useDispatch();

  const handlerAddOptionBtn = () => {
    dispatch(addRadioButtonOption(index));
  };
  const getIsHaveMark = (optionIndex) => {
    if (radioButtonOptionList.length === 1) return true;
    return radioButtonOptionList[optionIndex].mark !== "";
  };

  return (
    <div className="container--RadioButtonAnswers">
      {radioButtonOptionList.map((element, key) => {
        const isHaveMark = getIsHaveMark(key);

        return (
          <RadioButtonOption
            key={key}
            optionIndex={key}
            radioButtonTaskIndex={index}
            option={element.option}
            mark={element.mark}
            isHaveMark={isHaveMark}
            optionListLength={radioButtonOptionList.length}
            addNewOption={handlerAddOptionBtn}
            radioButtonOptionList={radioButtonOptionList}
          />
        );
      })}
      <div className="container-answer--RadioButtonAnswers">
        <button
          onClick={handlerAddOptionBtn}
          className="btn-intpu small-grey-font btn-add--RadioButtonTaskList"
        >
          Добавить вариант
        </button>
      </div>
    </div>
  );
}

export default RadioButtonOptionList;
