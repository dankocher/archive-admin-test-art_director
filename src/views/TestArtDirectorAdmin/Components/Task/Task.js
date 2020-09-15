import React, {useState} from "react";

import {Link} from "react-router-dom";

import "./Task.scss";
import taskTypeEnum from "../../utils/taskTypeEnum";

function Task({task, index}) {
	const [isHoveredTask, setIsHoveredTask] = useState(false);

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
					) : task.type == Object.keys(taskTypeEnum)[0] ? (
						<span></span>
					) : (
						<span className="countNumber-font">{index + 1}</span>
					)}
				</div>
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
					<Link to={`/${task.type}/${index}`}>
						<button className="hidden-button">
							<i className="arrow-icon--task"></i>
						</button>
					</Link>
				</div>
				<div className="option-buttons-task">
					{isHoveredTask ? (
						<>
							<button className="hidden-button eye-button">
								<i className="eye-icon"></i>
							</button>
							<button className="hidden-button trash-button">
								<i className="trash-icon"></i>
							</button>
						</>
					) : null}
				</div>
			</div>
		</>
	);
}

export default Task;
