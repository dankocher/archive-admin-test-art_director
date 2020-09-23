import React, { useState, useEffect } from "react";

import "./TasksComponent.scss";

import { useHistory } from "react-router-dom";

import { isWelcomeScreen } from "../../helpers/taskTypeEnum";
import {
  getTasksFromServer,
  getNewTaskFromServer,
  deleteTaskById,
  saveTaskListHeader,
} from "../../helpers/workWithApi";

import Task from "../Task/Task";
import addIcon from "../../utils/icons/add-icon";
import editIcon from "../../utils/icons/edit-icon";

const MAX_HEADER_LENGTH = 240;

function TasksComponent() {
  const history = useHistory();

  const [addBtnHovered, setAddBtnHovered] = useState(false);
  const [header, setHeader] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [isEditedHeader, setIsEditedHeader] = useState(false);
  //const [taskNumber, setTaskNumber] = useState(0);???
  let taskNumber = 0;

  useEffect(() => {
    getTasksFromServer().then((res) => {
      setTaskList(res.tasks);
      setHeader(res.ttask.name);
      console.log(res);
    });
  }, []);

  const SetTaskNumber = (value) => {
    taskNumber = value;
  };

  const handleOpenNewTask = () => {
    getNewTaskFromServer().then((res) => {
      const path = `/welcome-screen/${res._id}`;
      history.push(path);
    });
  };

  const handlerDeleteSelectedTask = (index) => {
    deleteTaskById(index).then(() => {
      getTasksFromServer().then((res) => {
        setTaskList(res.tasks);
      });
    });
  };

  const handlerEditButton = () => {
    setIsEditedHeader(!isEditedHeader);
  };

  const handlerSaveHeader = () => {
    saveTaskListHeader(header);
    handlerEditButton();
  };

  const handlerChangeHeader = (event) => {
    const text = event.target.value;
    if (text.length >= MAX_HEADER_LENGTH) {
      return;
    }
    setHeader(text);
  };

  return (
    <>
      <div className="header--tasks">
        {isEditedHeader ? (
          <input
            className="input"
            value={header}
            onChange={handlerChangeHeader}
            onBlur={handlerSaveHeader}
          />
        ) : (
          <React.Fragment>
            <h2 className="bold-big-font">{header}</h2>
            <button
              onClick={handlerEditButton}
              className="hidden-button edit-button-tasks"
            >
              <i>{editIcon}</i>
            </button>
          </React.Fragment>
        )}
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
                id={element._id}
                index={key}
                task={element}
                handlerDeleteSelectedTask={handlerDeleteSelectedTask}
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
            <i>{addIcon}</i>
          </button>
        </div>
      </div>
    </>
  );
}

export default TasksComponent;
