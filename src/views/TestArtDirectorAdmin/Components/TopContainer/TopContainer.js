import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./TopContainer.scss";

import {
  setTaskDescription as setStateTaskDescription,
  setTaskName as setStateTaskName,
  setTaskType,
  setIsTimeConsidered,
  setIsTimeDisplayForUser,
  setIsOneGradeForAllSubTasks,
} from "../../../../redux/actions";

import { taskTypeEnum, isWelcomeScreen } from "../../utils/taskTypeEnum";

import Checkbox from "../Checkbox/Checkbox";
import RadioButton from "../RadioButton/RadioButton";

const MAX_TASK_NAME_LENGTH = 240;
const MAX_TASK_DESCRIPTION_LENGTH = 500;

function TopContainer() {
  const dispatch = useDispatch();

  const [localTaskName, setLocalTaskName] = useState("");
  const [localTaskDescription, setLocalTaskDescription] = useState("");

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

  const handleChangeStateTaskDescripton = (event) => {
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
        {isWelcomeScreen ? null : (
          <span className="countNumber-font countNumber-position--topContainer">
            10
          </span>
        )}

        <h1 className="bold-big-font">{localTaskName}</h1>
        <p className="small-grey-font">{taskTypeEnum[taskType]}</p>
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
          <select
            className="input"
            onChange={handleChangeType}
            value={taskType}
          >
            {Object.keys(taskTypeEnum).map((key) => (
              <option key={key} value={key}>
                {taskTypeEnum[key]}
              </option>
            ))}
          </select>
          <div className="rightSide-checkboxes--topContainer">
            <Checkbox
              id={"isTimeConsidered"}
              label={"Учитывать время"}
              value={isTimeConsidered}
              onChange={() => handleChangeStateTaskIsTimeConsidered()}
            />
            {taskType === Object.keys(taskTypeEnum)[0] ? null : (
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
