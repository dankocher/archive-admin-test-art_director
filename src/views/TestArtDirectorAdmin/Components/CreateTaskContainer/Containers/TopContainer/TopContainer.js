import "./TopContainer.scss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetIsHaveMarks } from "../../../../helpers/customHooks";

import {
  setTaskDescription as setStateTaskDescription,
  setTaskName as setStateTaskName,
  setTaskType,
} from "../../../../../../redux/actions";

import {
  taskTypeEnum,
  isWelcomeScreen,
} from "../../../../helpers/taskTypes/taskTypeEnum";

import DropDown from "../../../DropDown/DropDown";
import TupeOptions from "./TypeOptions/TypeOptions";

const MAX_TASK_NAME_LENGTH = 240;
const MAX_TASK_DESCRIPTION_LENGTH = 500;

function TopContainer() {
  const dispatch = useDispatch();

  const [localTaskName, setLocalTaskName] = useState("");
  const [localTaskDescription, setLocalTaskDescription] = useState("");

  const isHaveMarks = useGetIsHaveMarks();
  const taskNumber = useSelector(
    (state) => state.reduxStorage.task.task_number
  );
  const taskName = useSelector((state) => state.reduxStorage.task.name);
  const taskDescription = useSelector(
    (state) => state.reduxStorage.task.description
  );
  const taskType = useSelector((state) => state.reduxStorage.task.type);

  useEffect(() => {
    setLocalTaskName(taskName);
  }, [taskName]);

  useEffect(() => {
    setLocalTaskDescription(taskDescription);
  }, [taskDescription]);

  const handleChangeLocalTaskName = (event) => {
    const text = event.target.value;
    if (text.length >= MAX_TASK_NAME_LENGTH) {
      return;
    }
    setLocalTaskName(text);
  };

  const handleChangeGlobalTaskName = () => {
    dispatch(setStateTaskName(localTaskName));
  };

  const handleChangeDescripton = (event) => {
    const text = event.target.value;
    if (text.length >= MAX_TASK_DESCRIPTION_LENGTH) {
      return;
    }
    setLocalTaskDescription(text);
  };

  const handleChangeStateTaskDescripton = () => {
    dispatch(setStateTaskDescription(localTaskDescription));
  };

  const handleChangeType = (event) => {
    dispatch(setTaskType(event.target.value));
  };
  // const isHaveMarks = () => {
  //   return isHaveMarks === undefined || isHaveMarks;
  // };

  return (
    <>
      <div className="header--topContainer">
        <div className="grid-header--topContainer">
          <div>
            {isWelcomeScreen(taskType) ? null : (
              <span className="task-numbers-font countNumber-position--topContainer">
                {taskNumber}
              </span>
            )}

            <h1 className="bold-big-font">{localTaskName}</h1>
            <p className="small-grey-font">{taskTypeEnum[taskType]}</p>
          </div>
          {isHaveMarks === undefined || isHaveMarks ? null : (
            <span className="small-grey-font">Не все оценки расставлены</span>
          )}
        </div>
      </div>
      <div className="main-container--topContainer">
        <div className="leftSide-topContainer">
          <input
            className="input"
            value={localTaskName}
            onChange={handleChangeLocalTaskName}
            onBlur={handleChangeGlobalTaskName}
          />
          <textarea
            className="input"
            rows={7}
            value={localTaskDescription}
            onChange={handleChangeDescripton}
            onBlur={handleChangeStateTaskDescripton}
          />
        </div>
        <div className="rightSide-topContainer">
          <DropDown
            onChange={handleChangeType}
            value={taskType}
            taskTypeEnum={taskTypeEnum}
          />
          <TupeOptions />
        </div>
      </div>
    </>
  );
}

export default TopContainer;
