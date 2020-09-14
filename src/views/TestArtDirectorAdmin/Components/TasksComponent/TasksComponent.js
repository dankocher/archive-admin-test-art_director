import React, { useState, useEffect } from "react";

import "./TasksComponent.css";

import Task from "../Task/Task";

import { Link } from "react-router-dom";

import ajax from "../../../../utils/ajax";
import { api } from "../../../../constants/api";

import arr from "../../utils/data/data";

const classNames = require("classnames");

function TasksComponent() {
  const [addBtnHovered, setAddBtnHovered] = useState(false);
  const [taskList, setTaskList] = useState([]);
  let res = {};
  const getTasks = async () => {
    res = await ajax(api.td_get_tasks, {});
    if (!res.ok) {
      console.log("Bad response");
      return;
    }
    setTaskList(res.tasks);

    console.log(res);
  };

  useEffect(() => {
    console.log("asd");
    getTasks();
  }, []);

  const addIconClasses = classNames({
    "add-task-icon-inactive": !addBtnHovered,
    "add-task-icon-active": addBtnHovered,
  });

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
      {taskList.map((element, key) => {
        return <Task key={key} index={key} task={element} />;
      })}
      <div
        onMouseEnter={() => setAddBtnHovered(true)}
        onMouseLeave={() => setAddBtnHovered(false)}
        className="add-task--tasks"
      >
        <Link to={`/welcome-screen/${arr.taskList.length}`}>
          <button className="hidden-button addTusk-button--tasks">
            <i className={addIconClasses}></i>
          </button>
        </Link>
      </div>
    </>
  );
}

export default TasksComponent;
