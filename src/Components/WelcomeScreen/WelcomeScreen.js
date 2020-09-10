import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {
	setTaskDescription as setStateTaskDescription,
	setTaskName as setStateTaskName,
	setTaskType,
	setIsTimeConsidered,
} from "../../actions";

import "./WelcomeScreen.css";

import Checkbox from "@material-ui/core/Checkbox";

import DragAndDropZone from "../DragAndDropZone/DragAndDropZone";

import taskTypeEnum from "../../utils/taskTypeEnum";

function WelcomeScreen(props) {
	const dispatch = useDispatch();
	const [taskName, setTaskName] = useState(Object.values(taskTypeEnum)[0]);
	const [taskDescription, setTaskDescription] = useState("");

	const isTimeConsidered = useSelector((state) => state.isTimeConsidered);
	const taskType = useSelector((state) => state.taskType);

	useEffect(() => {
		console.log("otkrito");
		dispatch(setTaskType(Object.keys(taskTypeEnum)[0]));
		dispatch(setStateTaskName(Object.values(taskTypeEnum)[0]));

		return () => {
			console.log("Zakrito");
		};
	}, []);

	const handleChangeName = (event) => {
		setTaskName(event.target.value);
	};

	const handleChangeStateTaskName = () => {
		dispatch(setStateTaskName(taskName));
	};

	const handleChangeDescripton = (event) => {
		setTaskDescription(event.target.value);
	};

	const handleChangeStateTaskDescripton = (event) => {
		dispatch(setStateTaskDescription(taskDescription));
	};

	const handleChangeType = (event) => {
		dispatch(setTaskType(event.target.value));
	};

	const handleChangeStateTaskIsTimeConsidered = () => {
		dispatch(setIsTimeConsidered());
	};

	return (
		<div className="wrapper-inline-block">
			<div className="heading--welcomeScreen">
				<h1 className="bold-big-font">{taskName}</h1>
				<p className="small-grey-font">{taskTypeEnum[taskType]}</p>
			</div>
			<div className="header--welcomeScreen">
				<div className="leftSide-header-welcomeScreen">
					<input
						className="input"
						value={taskName}
						onChange={handleChangeName}
						onBlur={handleChangeStateTaskName}
					/>
					<textarea
						className="input"
						rows={7}
						value={taskDescription}
						onChange={handleChangeDescripton}
						onBlur={handleChangeStateTaskDescripton}
					/>
				</div>
				<div className="rightSide-header-welcomeScreen">
					<select
						className="input"
						onChange={handleChangeType}
						value={taskType}
					>
						{Object.keys(taskTypeEnum).map((key) => (
							<option key={key} value={key}>
								{taskTypeEnum[key]}
							</option>
						))}
					</select>
					<Checkbox
						checked={isTimeConsidered}
						//inputProps={{"aria-label": "checkbox with default color"}}
						onClick={handleChangeStateTaskIsTimeConsidered}
					/>
				</div>
			</div>
			<div className="body--welcomeScreen">
				<h2 className="bold-big-font">Контент</h2>
				<div className="wrapper-dragAndDropZone--welcomeScreen">
					<DragAndDropZone />
				</div>
			</div>
		</div>
	);
}

export default WelcomeScreen;
