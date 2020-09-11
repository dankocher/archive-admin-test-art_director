import React, {useState} from "react";

import "./TasksComponent.css";

import Task from "../Task/Task";

import {Link} from "react-router-dom";

import arr from "../../utils/data/data";

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
			{arr.taskList.map((element, key) => {
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
