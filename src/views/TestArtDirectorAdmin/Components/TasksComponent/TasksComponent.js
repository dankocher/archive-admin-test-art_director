import React, { useState, useEffect } from "react";

import "./TasksComponent.scss";

import { useHistory } from "react-router-dom";

import { isWelcomeScreen } from "../../utils/taskTypeEnum";
import {
  getTasksFromServer,
  getNewTaskFromServer,
} from "../../utils/workWithApi";

import Task from "../Task/Task";

const classNames = require("classnames");

function TasksComponent() {
  const history = useHistory();

  const [addBtnHovered, setAddBtnHovered] = useState(false);
  const [taskList, setTaskList] = useState([]);
  //const [taskNumber, setTaskNumber] = useState(0);???
  let taskNumber = 0;

  useEffect(() => {
    getTasksFromServer().then((res) => {
      setTaskList(res.tasks);
    });
  }, []);

  const addIconClasses = classNames({
    "add-task-icon-inactive": !addBtnHovered,
    "add-task-icon-active": addBtnHovered,
  });

  const SetTaskNumber = (value) => {
    taskNumber = value;
  };

  const handleOpenNewTask = () => {
    getNewTaskFromServer().then((res) => {
      const path = `/welcome-screen/${res._id}`;
      history.push(path);
    });
  };

  return (
    <>
      <div className="globalTask-label--tasks">
        <h2 className="bold-big-font">
          Тестовое задание для Арт-директора(реадактирование)
        </h2>
        <button className="hidden-button edit-button-tasks">
          <i className="edit-icon"></i>
        </button>
      </div>
      <div className={"wrapper-shadow--tasks"}>
        <div className="taskList-border--tasks">
          {taskList.map((element, key) => {
            if (!isWelcomeScreen(element.type)) {
              SetTaskNumber(taskNumber + 1);
            }

            return (
              <Task
                key={key}
                number={taskNumber}
                index={element._id}
                task={element}
              />
            );
          })}
        </div>
        <div
          onMouseEnter={() => setAddBtnHovered(true)}
          onMouseLeave={() => setAddBtnHovered(false)}
          className="add-task--tasks"
        >
          <button
            onClick={handleOpenNewTask}
            className="hidden-button addTusk-button--tasks"
          >
            <i className={addIconClasses}></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default TasksComponent;
