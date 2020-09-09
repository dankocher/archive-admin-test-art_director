import React, {useState} from "react";

import "./TasksComponent.css";

import Task from "../Task/Task";

const taskArr = [1, 2, 3, 4, 5, 6];

const classNames = require("classnames");

function TasksComponent() {
	const [addBtnHovered, setAddBtnHovered] = useState(false);

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
			{taskArr.map((element) => {
				return <Task />;
			})}
			<div
				onMouseEnter={() => setAddBtnHovered(true)}
				onMouseLeave={() => setAddBtnHovered(false)}
				className="add-task--tasks"
			>
				<button className="hidden-button addTusk-button--tasks">
					<i className={addIconClasses}></i>
				</button>
			</div>
		</>
	);
}

export default TasksComponent;
