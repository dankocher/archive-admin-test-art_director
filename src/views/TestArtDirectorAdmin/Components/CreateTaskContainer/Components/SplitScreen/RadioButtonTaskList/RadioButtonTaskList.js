import "./RadioButtonTaskList.scss";

import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { addRadioButtonTask } from "../../../../../../../redux/actions";

import { addRadioButtonTaskThunk } from "../../../../../../../thunks/addRadioButtonTaskThunk";

import RadioButtonTask from "./RadioButtonTask/RadioButtonTask";

function RadioButtonTaskList() {
  const dispatch = useDispatch();

  const radioButtonTaskList = useSelector(
    (state) => state.reduxStorage.task.data.radioButtonTaskList
  );

  const handlerAddGroupRadioButtons = () => {
    dispatch(addRadioButtonTaskThunk());
  };

  return (
    <>
      {radioButtonTaskList?.map((element, key) => (
        <RadioButtonTask
          key={key}
          index={key}
          question={element.question}
          radioButtonOptionList={element.radioButtonOptionList}
          radioButtonTaskListLength={radioButtonTaskList.length}
          addNewTask={handlerAddGroupRadioButtons}
        />
      ))}
      <button
        className="btn-intpu small-grey-font btn-add--RadioButtonTaskList"
        onClick={handlerAddGroupRadioButtons}
      >
        Добавить группу радиобаттанов
      </button>
    </>
  );
}

export default RadioButtonTaskList;
