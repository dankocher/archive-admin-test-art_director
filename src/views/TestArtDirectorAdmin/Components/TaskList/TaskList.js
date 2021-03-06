import "./TaskList.scss";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import arrayMove from "array-move";

import { useHistory } from "react-router-dom";

import { sortableContainer, sortableElement } from "react-sortable-hoc";

import { isWelcomeScreen } from "../../helpers/taskTypes/taskTypeEnum";
import {
	getTasksFromServer,
	getNewTaskFromServer,
	deleteTaskById,
	saveTaskListHeader,
	saveSortedTaskList,
} from "../../helpers/workWithApi";

import { setTestProps, setTestName } from "../../../../redux/actions";

import Task from "./Task/Task";
import addIcon from "../../utils/icons/add-icon";
import editIcon from "../../utils/icons/edit-icon";

const _ID = "5f5f6162de1af368a21e299a";
const MAX_HEADER_LENGTH = 240;

const SortableContainer = sortableContainer(({ children }) => {
	return <div className="taskList-border--tasks">{children}</div>;
});

const SortableItem = sortableElement(
	({ number, id, localIndex, task, handlerDeleteSelectedTask }) => {
		return (
			<Task
				number={number}
				id={id}
				index={localIndex}
				task={task}
				handlerDeleteSelectedTask={handlerDeleteSelectedTask}
			/>
		);
	}
);

function TaskList() {
	const history = useHistory();
	const dispatch = useDispatch();

	const testId = useSelector((state) => state.reduxStorage._id);

	const [header, setHeader] = useState("");
	const [taskList, setTaskList] = useState([]);
	const [isEditedHeader, setIsEditedHeader] = useState(false);

	useEffect(() => {
		getTasksFromServer(_ID).then((res) => {
			dispatch(setTestProps(res.ttask._id, res.ttask.name));
			setHeader(res.ttask.name);
			setTaskList(res.tasks);
		});
	}, [dispatch]);

	const getNewTaskNumber = () => {
		let count = 0;
		if (taskList.length === 0) return 1;
		taskList.forEach((index) => {
			if (isWelcomeScreen(index.type)) return;
			count++;
		});
		return count + 1;
	};

	const handleOpenNewTask = () => {
		const taskNumber = getNewTaskNumber();
		getNewTaskFromServer(testId, taskNumber).then((res) => {
			const path = `/${res._id}`;
			history.push(path);
		});
	};

	const handlerDeleteSelectedTask = (index) => {
		deleteTaskById(index, testId).then((res) => {
			setTaskList(res.tasks);
		});
	};

	const handlerEditButton = () => {
		setIsEditedHeader(!isEditedHeader);
	};

	const handlerSaveHeader = () => {
		dispatch(setTestName(header));
		saveTaskListHeader(testId, header);
		handlerEditButton();
	};

	const handlerChangeHeader = (event) => {
		const text = event.target.value;
		if (text.length >= MAX_HEADER_LENGTH) {
			return;
		}
		setHeader(text);
	};
	const onSortEnd = ({ oldIndex, newIndex }) => {
		const newTaskList = arrayMove(taskList, oldIndex, newIndex);

		const listOfTaskId = newTaskList.map((task) => task._id);

		saveSortedTaskList(listOfTaskId).then((res) => {
			if (res.ok) setTaskList(res.tasks);
		});
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
				<SortableContainer onSortEnd={onSortEnd} useDragHandle>
					{taskList.map((element, key) => {
						return (
							<SortableItem
								key={key}
								number={element.task_number}
								id={element._id}
								index={key}
								localIndex={key}
								task={element}
								handlerDeleteSelectedTask={handlerDeleteSelectedTask}
							/>
						);
					})}
				</SortableContainer>
				<div className="add-task--tasks">
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

export default TaskList;
