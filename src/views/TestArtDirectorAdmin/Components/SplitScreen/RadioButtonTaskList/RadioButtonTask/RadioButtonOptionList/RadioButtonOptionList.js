import "./RadioButtonOptionList.scss";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  addRadioButtonOption,
  setIsHaveMarks,
} from "../../../../../../../redux/actions";

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

  const getIsHaveMarks = () => {
    let isHaveMarks = true;
    if (radioButtonOptionList.length === 1) return isHaveMarks;
    radioButtonOptionList.forEach((element) => {
      if (element.mark === "") isHaveMarks = false;
    });
    return isHaveMarks;
  };

  useEffect(() => {
    if (radioButtonOptionList !== undefined) {
      dispatch(setIsHaveMarks(index, getIsHaveMarks()));
    }
  }, [radioButtonOptionList]);

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
          />
        );
      })}
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
