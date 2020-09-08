import React, {useState} from "react";

import "./Task.css";

function Task() {
	const [isHoveredTask, setIsHoveredTask] = useState(false);
	return (
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
				) : (
					<span>1</span>
				)}
			</div>
			<div className="task-name--task">
				<h3 className="bold-big-font">
					Сравните две иллюстрации пожалуйста прошпро...
				</h3>
				<div className="small-grey-font">
					<span className="taskType-text--task">
						Иллюстрации и радиобаттоны
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
	);
}

export default Task;
