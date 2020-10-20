import "./RadioButtonTaskList.scss";

import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { addRadioButtonTask } from "../../../../../../../redux/actions";

import RadioButtonTask from "./RadioButtonTask/RadioButtonTask";

function RadioButtonTaskList() {
  const dispatch = useDispatch();

  const radioButtonTaskList = useSelector(
    (state) => state.reduxStorage.task.data.radioButtonTaskList
  );
  // const isOneGradeForAllSubTasks = useSelector(
  //   (state) => state.reduxStorage.task.isOneGradeForAllSubTasks
  // );
  // const radioButtonIllustration = useSelector(
  //   (state) => state.radioButtonIllustrationResucer
  // );

  // const radioButtonTaskList = isOneGradeForAllSubTasks
  //   ? radioButtonTaskLists[0].radioButtonTaskList
  //   : radioButtonTaskLists[0].radioButtonTaskList;
  // console.log(`//////${radioButtonTaskList}/////`);
  // console.log(radioButtonTaskList);

  const handlerAddGroupRadioButtons = () => {
    dispatch(addRadioButtonTask());
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
