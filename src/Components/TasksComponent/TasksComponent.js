import React from "react";

import "./TasksComponent.css";

import Task from "../Task/Task";

const taskArr = [1, 2, 3, 4, 5, 6];

function TasksComponent() {
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
			<div className="add-task--tasks">
				<button className="hidden-button addTusk-button--tasks">
					<i className="add-task-icon"></i>
				</button>
			</div>
		</>
	);
}

export default TasksComponent;
