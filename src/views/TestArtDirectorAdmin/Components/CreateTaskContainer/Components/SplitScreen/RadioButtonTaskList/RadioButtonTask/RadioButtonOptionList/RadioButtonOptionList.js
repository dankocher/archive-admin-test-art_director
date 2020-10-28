import "./RadioButtonOptionList.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// import { addRadioButtonOption } from "../../../../../../../../../redux/actions";
import { addRadioButtonOptionThunk } from "../../../../../../../../../thunks/addRadioButtonOptionThunk";

import RadioButtonOption from "./RadioButtonOption/RadioButtonOption";

function RadioButtonOptionList({ radioButtonOptionList, index }) {
  const dispatch = useDispatch();

  const isOneGradeForAllSubTasks = useSelector(
    (state) => state.reduxStorage.task.isOneGradeForAllSubTasks
  );

  const imgGrid = useSelector((state) => state.reduxStorage.task.data.imgGrid);
  const selectedImgRow = useSelector(
    (state) => state.radioButtonIllustrationResucer.selectedImgRow
  );

  const handlerAddOptionBtn = () => {
    dispatch(addRadioButtonOptionThunk(index));
  };

  const getIsHaveMark = (optionIndex) => {
    const option = radioButtonOptionList[optionIndex];
    if (radioButtonOptionList.length === 1) return true;
    else if (isOneGradeForAllSubTasks) {
      if (option.score == null) {
        return false;
      }
      return option.score !== "";
    } else {
      if (imgGrid === null || imgGrid.length === 0) return true;
      else if (option.scoreList == null) return false;
      else if (
        option.scoreList[selectedImgRow] === "" ||
        option.scoreList[selectedImgRow] == null
      )
        return false;
      return true;
    }
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
            radioButtonOption={element}
            isHaveMark={isHaveMark}
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
