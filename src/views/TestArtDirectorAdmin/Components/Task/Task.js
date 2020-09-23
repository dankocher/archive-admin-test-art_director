import "./Task.scss";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import { taskTypeEnum, isWelcomeScreen } from "../../helpers/taskTypeEnum";

import DeleteButton from "../DeleteButton/DeleteButton";
import arrowIcon from "../../utils/icons/arrow-icon";
import dotsIcon from "../../utils/icons/dots-icon";

// const classNames = require("classnames");

function Task({ task, id, index, number, ...props }) {
  const [isHoveredTask, setIsHoveredTask] = useState(false);
  const isHaveMarks = task.data?.radioButtonTaskList[index]?.isHaveMarks;

  console.log(isHaveMarks);
  // const [isHoveredEnableButton, setIsHoveredEnableButton] = useState(false);

  // const enableIconClasses = classNames({
  //   "enable-icon-active": isHoveredEnableButton,
  //   "enable-icon-inactive": !isHoveredEnableButton,
  // });

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
              <i className="dots-icon">{dotsIcon}</i>
            </button>
          ) : isWelcomeScreen(task.type) ? (
            <span></span>
          ) : (
            <span className="countNumber-font">{number}</span>
          )}
        </div>
        <Link className={"link--task"} to={`/${task.type}/${id}`}>
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
              {isHaveMarks ? <span>Не все оценки расставлены</span> : null}
            </div>
            <div className="arrow-button-task">
              <button className="hidden-button">
                <i>{arrowIcon}</i>
              </button>
            </div>
          </div>
        </Link>
        <div className="option-buttons-task">
          {isHoveredTask ? (
            <>
              {/* <button
                className="hidden-button eye-button"
                onMouseEnter={() => setIsHoveredEnableButton(true)}
                onMouseLeave={() => setIsHoveredEnableButton(false)}
              >
                <i className={enableIconClasses}></i>
              </button> */}
              <DeleteButton
                onClick={() => props.handlerDeleteSelectedTask(id)}
              />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Task;
