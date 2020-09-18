import React, { useState } from "react";
import "./Task.scss";

import { Link } from "react-router-dom";

import { taskTypeEnum, isWelcomeScreen } from "../../utils/taskTypeEnum";

import DeleteButton from "../DeleteButton/DeleteButton";

const classNames = require("classnames");

function Task({ task, index, number, ...props }) {
  const [isHoveredTask, setIsHoveredTask] = useState(false);
  const [isHoveredEnableButton, setIsHoveredEnableButton] = useState(false);

  const enableIconClasses = classNames({
    "enable-icon-active": isHoveredEnableButton,
    "enable-icon-inactive": !isHoveredEnableButton,
  });

  //   const [taskNumber, setTaskNumber] = useState(0);

  //   const getTaskNumber = () => {
  //     setTaskNumber(taskNumber + 1);
  //     return taskNumber;
  //   };

  return (
    <>
      <div
        onMouseEnter={() => setIsHoveredTask(true)}
        onMouseLeave={() => setIsHoveredTask(false)}
        className="task-container"
      >
        <div className="task-number--task">
          {isHoveredTask ? (
            <button className="hidden-button">
              <i className="dots-icon"></i>
            </button>
          ) : isWelcomeScreen(task.type) ? (
            <span></span>
          ) : (
            <span className="countNumber-font">{number}</span>
          )}
        </div>
        <Link className={"link--task"} to={`/${task.type}/${index}`}>
          <div className="link-container--task">
            <div className="task-name--task">
              <h3 className="bold-big-font">{task.name}</h3>
              <div className="small-grey-font">
                <span className="taskType-text--task">
                  {taskTypeEnum[task.type]}
                </span>
                <span className="taskType-number--task">25</span>
              </div>
            </div>
            <div className="notAllMarks--task small-grey-font">
              {isHoveredTask ? <span>Не все оценки расставлены</span> : null}
            </div>
            <div className="arrow-button-task">
              <button className="hidden-button">
                <i className="arrow-icon--task"></i>
              </button>
            </div>
          </div>
        </Link>
        <div className="option-buttons-task">
          {isHoveredTask ? (
            <>
              <button
                className="hidden-button eye-button"
                onMouseEnter={() => setIsHoveredEnableButton(true)}
                onMouseLeave={() => setIsHoveredEnableButton(false)}
              >
                <i className={enableIconClasses}></i>
              </button>
              <DeleteButton
                className={"trash-button--task"}
                onClick={() => props.handlerDeleteSelectedTask(index)}
              />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Task;
