import "./TopContainer.scss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setTaskDescription as setStateTaskDescription,
  setTaskName as setStateTaskName,
  setTaskType,
  setIsTimeConsidered,
  setIsTimeDisplayForUser,
  setIsOneGradeForAllSubTasks,
} from "../../../../redux/actions";

import { useHistory } from "react-router-dom";

import { taskTypeEnum, isWelcomeScreen } from "../../helpers/taskTypeEnum";
import { getUrlId } from "../../helpers/workWithApi";

import Checkbox from "../Checkbox/Checkbox";
import RadioButton from "../RadioButton/RadioButton";
import DropDown from "../DropDown/DropDown";

const MAX_TASK_NAME_LENGTH = 240;
const MAX_TASK_DESCRIPTION_LENGTH = 500;

export const useTest = () => {
  const taskType = useSelector((state) => state.task.type);

  return () => {
    const path = `\\${taskType}\\${getUrlId()}`;
    debugger;
    window.location.replace(path);
  };
};

function TopContainer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const test = useTest();

  const [localTaskName, setLocalTaskName] = useState("");
  const [localTaskDescription, setLocalTaskDescription] = useState("");

  const state = useSelector((state) => state);
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
    if (taskType !== "") {
      console.log("IA USE EFFECT");
      console.log(taskType);
      const path = `\\${taskType}\\${getUrlId()}`;
      // window.location.replace(path);
    }
  }, [taskType]);

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

  const promiseDispatch = (item, dispatch) =>
    new Promise((resolve, reject) => {
      dispatch();
      resolve();
    });

  const asyncDispatchSetTaskType = async (taskType) => {
    console.log("DO TOGO KA IETO STALO MEINSTIMOM");

    console.log(state);
    await dispatch(setTaskType(taskType));
    return { isOk: true };
  };

  const handleChangeType = (event) => {
    const taskType = event.target.value;
    // dispatch(setTaskType(taskType));
    // dispatch(setTaskType(taskType)).then(() => {
    //   console.log(path);
    // asyncDispatchSetTaskType(taskType).then(() => {
    //   console.log("POSLE TOGO KA IETO STALO MEINSTIMOM");
    //   test();
    // });
    // window.location.replace(path)

    // console.log(history.location.pathname);
    // history
    //history.replace()
    //  window.location.replace(path);
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
          <DropDown
            onChange={handleChangeType}
            value={taskType}
            taskTypeEnum={taskTypeEnum}
          />
          {/* <select
            className="input"
            onChange={handleChangeType}
            value={taskType}
          >
            {Object.keys(taskTypeEnum).map((key) => (
              <option key={key} value={key}>
                {taskTypeEnum[key]}
              </option>
            ))}
          </select> */}
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
