import React, { useState, useEffect } from "react";

import "./TasksComponent.scss";

import Task from "../Task/Task";

import { Link } from "react-router-dom";

import ajax from "../../../../utils/ajax";
import { api } from "../../../../constants/api";

import { isWelcomeScreen } from "../../utils/taskTypeEnum";

const classNames = require("classnames");

function TasksComponent() {
  const [addBtnHovered, setAddBtnHovered] = useState(false);
  const [taskList, setTaskList] = useState([]);
  //const [taskNumber, setTaskNumber] = useState(0);???
  let taskNumber = 0;

  let res = {};
  const getTasks = async () => {
    res = await ajax(api.td_get_tasks, {});
    if (!res.ok) {
      console.log("Bad response");
      return;
    }
    setTaskList(res.tasks);
  };

  useEffect(() => {
    console.log("asd");
    getTasks();
  }, []);

  const addIconClasses = classNames({
    "add-task-icon-inactive": !addBtnHovered,
    "add-task-icon-active": addBtnHovered,
  });

  const SetTaskNumber = (value) => {
    taskNumber = value;
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
          <Link to={`/welcome-screen/${""}`}>
            <button className="hidden-button addTusk-button--tasks">
              <i className={addIconClasses}></i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default TasksComponent;
