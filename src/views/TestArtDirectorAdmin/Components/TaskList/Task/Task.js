import "./Task.scss";
import React, { useState } from "react";

import { useGetIsHaveMarks } from "../../../helpers/customHooks";

import { Link } from "react-router-dom";

import {
	taskTypeEnum,
	isWelcomeScreen,
} from "../../../helpers/taskTypes/taskTypeEnum";

import DeleteButton from "../../DeleteButton/DeleteButton";
import DragButton from "../../DragButton/DragButton";
import arrowIcon from "../../../utils/icons/arrow-icon";

function Task({ task, id, index, number, ...props }) {
	const [isHoveredTask, setIsHoveredTask] = useState(false);
	const isHaveMarks = useGetIsHaveMarks(task);
	// console.log(isHaveMarks);
	return (
		<>
			<div
				onMouseEnter={() => setIsHoveredTask(true)}
				onMouseLeave={() => setIsHoveredTask(false)}
				className="task-container"
			>
				<div className="task-number--task">
					{isHoveredTask ? (
						<DragButton />
					) : isWelcomeScreen(task.type) ? (
						<span></span>
					) : (
						<span className="task-numbers-font">{number}</span>
					)}
				</div>
				<Link className={"link--task"} to={`/${id}`}>
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
							{isHaveMarks === undefined || isHaveMarks ? null : (
								<span>Не все оценки расставлены</span>
							)}
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
						<DeleteButton onClick={() => props.handlerDeleteSelectedTask(id)} />
					) : null}
				</div>
			</div>
		</>
	);
}

export default Task;
