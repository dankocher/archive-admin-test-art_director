import "./RadioButtonTaskList.scss";

import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { addGroupRadioButtons } from "../../../../../redux/actions";

import RadioButtonTask from "./RadioButtonTask/RadioButtonTask";

function RadioButtonTaskList() {
  const dispatch = useDispatch();

  const radioButtonTaskList = useSelector(
    (state) => state.task.data.radioButtonTaskList
  );
  const handlerAddGroupRadioButtons = () => {
    dispatch(addGroupRadioButtons());
  };

  return (
    <>
      {radioButtonTaskList.map((element, key) => (
        <RadioButtonTask
          key={key}
          index={key}
          question={element.question}
          radioButtonOptionList={element.radioButtonOptionList}
        />
      ))}
      <button
        className="hidden-button input btn-add--RadioButtonTaskList"
        onClick={handlerAddGroupRadioButtons}
      >
        Добавить группу радиобаттанов
      </button>
    </>
  );
}

export default RadioButtonTaskList;
