import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Checkbox from "../Checkbox/Checkbox";
import RadioButton from "../RadioButton/RadioButton";

import {
  setTaskDescription as setStateTaskDescription,
  setTaskName as setStateTaskName,
  setTaskType,
  setIsTimeConsidered,
  setIsTimeDisplayForUser,
  setIsOneGradeForAllSubTasks,
} from "../../actions";

import taskTypeEnum from "../../utils/taskTypeEnum";

import "./TopContainer.css";

function TopContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("otkrito");
    dispatch(setTaskType(Object.keys(taskTypeEnum)[0]));
    dispatch(setStateTaskName(Object.values(taskTypeEnum)[0]));

    return () => {
      console.log("Zakrito");
    };
  }, []);

  const [taskName, setTaskName] = useState(Object.values(taskTypeEnum)[0]);
  const [taskDescription, setTaskDescription] = useState("");

  const isTimeConsidered = useSelector((state) => state.isTimeConsidered);
  const isTimeDisplayForUser = useSelector(
    (state) => state.isTimeDisplayForUser
  );
  const isOneGradeForAllSubTasks = useSelector(
    (state) => state.isOneGradeForAllSubTasks
  );
  const isEachSubTaskHasOwnGrade = useSelector(
    (state) => state.isEachSubTaskHasOwnGrade
  );
  const taskType = useSelector((state) => state.taskType);

  const handleChangeName = (event) => {
    setTaskName(event.target.value);
  };

  const handleChangeStateTaskName = () => {
    dispatch(setStateTaskName(taskName));
  };

  const handleChangeDescripton = (event) => {
    setTaskDescription(event.target.value);
  };

  const handleChangeStateTaskDescripton = (event) => {
    dispatch(setStateTaskDescription(taskDescription));
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
        {taskType === Object.keys(taskTypeEnum)[0] ? null : (
          <span className="countNumber-font countNumber-position--topContainer">
            10
          </span>
        )}

        <h1 className="bold-big-font">{taskName}</h1>
        <p className="small-grey-font">{taskTypeEnum[taskType]}</p>
      </div>
      <div className="main-container--topContainer">
        <div className="leftSide-topContainer">
          <input
            className="input"
            value={taskName}
            onChange={handleChangeName}
            onBlur={handleChangeStateTaskName}
          />
          <textarea
            className="input"
            rows={7}
            value={taskDescription}
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
            <RadioButton
              id={"isOneGradeForAllSubTasks"}
              name={"GradeForSubTasks"}
              label={"Одна оценка для всех подзаданий"}
              value={isOneGradeForAllSubTasks}
              onChange={() => handleChangeStateTaskIsOneGradeForAllSubTasks()}
            />
            <RadioButton
              id={"isEachSubTaskHasOwnGrade"}
              name={"GradeForSubTasks"}
              label={"На каждое подзадание своя оценка"}
              value={!isOneGradeForAllSubTasks}
              onChange={() => handleChangeStateTaskIsOneGradeForAllSubTasks()}
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
