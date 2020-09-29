import "./TopContainer.scss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetIsHaveMarks } from "../../helpers/customHooks";

import {
  setTaskDescription as setStateTaskDescription,
  setTaskName as setStateTaskName,
  setTaskType,
  setIsTimeConsidered,
  setIsTimeDisplayForUser,
  setIsOneGradeForAllSubTasks,
} from "../../../../redux/actions";

import {
  taskTypeEnum,
  isWelcomeScreen,
} from "../../helpers/taskTypes/taskTypeEnum";

import Checkbox from "../Checkbox/Checkbox";
import RadioButton from "../RadioButton/RadioButton";
import DropDown from "../DropDown/DropDown";

const MAX_TASK_NAME_LENGTH = 240;
const MAX_TASK_DESCRIPTION_LENGTH = 500;

function TopContainer() {
  const dispatch = useDispatch();

  const [localTaskName, setLocalTaskName] = useState("");
  const [localTaskDescription, setLocalTaskDescription] = useState("");

  const isHaveMarks = useGetIsHaveMarks();
  const taskNumber = useSelector((state) => state.task.task_number);
  const taskName = useSelector((state) => state.task.name);
  const taskDescription = useSelector((state) => state.task.description);
  const taskType = useSelector((state) => state.task.type);
  const isTimeConsidered = useSelector((state) => state.task.isTimeConsidered);
  const isTimeDisplayForUser = useSelector(
    (state) => state.task.isTimeDisplayForUser
  );
  const isOneGradeForAllSubTasks = useSelector(
    (state) => state.task.isOneGradeForAllSubTasks
  );

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

  const handleChangeStateTaskIsTimeConsidered = () => {
    dispatch(setIsTimeConsidered());
  };

  const handleChangeStateTaskIsTimeDisplayForUser = () => {
    dispatch(setIsTimeDisplayForUser());
  };

  const handleChangeStateTaskIsOneGradeForAllSubTasks = () => {
    dispatch(setIsOneGradeForAllSubTasks());
  };

  return (
    <>
      <div className="header--topContainer">
        <div className="grid-header--topContainer">
          <div>
            {isWelcomeScreen(taskType) ? null : (
              <span className="countNumber-font countNumber-position--topContainer">
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
          <div className="rightSide-checkboxes--topContainer">
            <Checkbox
              id={"isTimeConsidered"}
              label={"Учитывать время"}
              value={isTimeConsidered}
              onChange={() => handleChangeStateTaskIsTimeConsidered()}
            />
            {isWelcomeScreen(taskType) ? null : (
              <>
                <Checkbox
                  id={"isTimeDisplayForUser"}
                  label={"Отображать время пользователю"}
                  value={isTimeDisplayForUser}
                  onChange={() => handleChangeStateTaskIsTimeDisplayForUser()}
                />
                <RadioButton
                  id={"isOneGradeForAllSubTasks"}
                  name={"GradeForSubTasks"}
                  label={"Одна оценка для всех подзаданий"}
                  value={isOneGradeForAllSubTasks}
                  onChange={() =>
                    handleChangeStateTaskIsOneGradeForAllSubTasks()
                  }
                />
                <RadioButton
                  id={"isEachSubTaskHasOwnGrade"}
                  name={"GradeForSubTasks"}
                  label={"На каждое подзадание своя оценка"}
                  value={!isOneGradeForAllSubTasks}
                  onChange={() =>
                    handleChangeStateTaskIsOneGradeForAllSubTasks()
                  }
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default TopContainer;
