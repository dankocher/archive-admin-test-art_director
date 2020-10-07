import styles from "./TypeOptions.module.scss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { isWelcomeScreen } from "../../../../../helpers/taskTypes/taskTypeEnum";

import {
	ILLUSTRATION_RADIO_BUTTONS,
	ILLUSTRATIONS_ANSWERS,
	QUSETION_ANSWER,
} from "../../../../../helpers/taskTypes/taskTypes";

import {
	setIsTimeConsidered,
	setIsTimeDisplayForUser,
	setIsOneGradeForAllSubTasks,
	setIsAnswerSizeLimited,
	setGlobalResponseLimitationFrom,
	setGlobalResponseLimitationTo,
} from "../../../../../../../redux/actions";

import Checkbox from "../../../../Checkbox/Checkbox";
import RadioButton from "../../../../RadioButton/RadioButton";

function TypeOptions() {
	const dispatch = useDispatch();

	const [responseLimitationFrom, setResponseLimitationFrom] = useState("");
	const [responseLimitationTo, setResponseLimitationTo] = useState("");

	const taskType = useSelector((state) => state.task.type);
	const isTimeConsidered = useSelector((state) => state.task.isTimeConsidered);
	const isTimeDisplayForUser = useSelector(
		(state) => state.task.isTimeDisplayForUser
	);
	const isOneGradeForAllSubTasks = useSelector(
		(state) => state.task.isOneGradeForAllSubTasks
	);
	const isAnswerSizeLimited = useSelector(
		(state) => state.task.data.isAnswerSizeLimited
	);

	const globalResponseLimitationFrom = useSelector(
		(state) => state.task.data.responseLimitation?.from
	);

	const globalResponseLimitationTo = useSelector(
		(state) => state.task.data.responseLimitation?.to
	);

	useEffect(() => {
		setResponseLimitationFrom(globalResponseLimitationFrom);
	}, [globalResponseLimitationFrom]);

	useEffect(() => {
		setResponseLimitationTo(globalResponseLimitationTo);
	}, [globalResponseLimitationTo]);

	const handleChangeStateTaskIsTimeConsidered = () => {
		dispatch(setIsTimeConsidered());
	};

	const handleChangeStateTaskIsTimeDisplayForUser = () => {
		dispatch(setIsTimeDisplayForUser());
	};

	const handleChangeStateTaskIsOneGradeForAllSubTasks = () => {
		dispatch(setIsOneGradeForAllSubTasks());
	};

	const changeIsAnswerSizeLimitedHandler = () => {
		dispatch(setIsAnswerSizeLimited());
	};

	const dispatchResponseLimitationFromTo = () => {
		dispatch(setGlobalResponseLimitationFrom(responseLimitationFrom));
		dispatch(setGlobalResponseLimitationTo(responseLimitationTo));
	};

	const dispatchResponseLimitationTo = () => {
		dispatch(setGlobalResponseLimitationTo(responseLimitationTo));
	};

	const changeResponseLimitationFrom = (event) => {
		let number = event.target.validity.valid
			? parseInt(event.target.value)
			: responseLimitationFrom;
		if (isNaN(number)) {
			number = 0;
		}
		if (number >= responseLimitationTo) {
			setResponseLimitationTo(number + 100);
		}
		setResponseLimitationFrom(number);
	};

	const changeResponseLimitationTo = (event) => {
		let number = event.target.validity.valid
			? parseInt(event.target.value)
			: responseLimitationTo;
		if (isNaN(number)) {
			number = 0;
		}
		setResponseLimitationTo(number);
	};

	const getOptions = () => {
		if (taskType === ILLUSTRATION_RADIO_BUTTONS) {
			return (
				<React.Fragment>
					<div className={styles.rightSide_checkboxes__radioButtons}>
						<RadioButton
							id={"isOneGradeForAllSubTasks"}
							name={"GradeForSubTasks"}
							label={"Одна оценка для всех подзаданий"}
							value={isOneGradeForAllSubTasks}
							onChange={handleChangeStateTaskIsOneGradeForAllSubTasks}
						/>
						<RadioButton
							id={"isEachSubTaskHasOwnGrade"}
							name={"GradeForSubTasks"}
							label={"На каждое подзадание своя оценка"}
							value={!isOneGradeForAllSubTasks}
							onChange={handleChangeStateTaskIsOneGradeForAllSubTasks}
						/>
					</div>
				</React.Fragment>
			);
		} else if (
			taskType === ILLUSTRATIONS_ANSWERS ||
			taskType === QUSETION_ANSWER
		) {
			return (
				<>
					<Checkbox
						id={"isAnswerSizeLimited"}
						value={isAnswerSizeLimited}
						onChange={changeIsAnswerSizeLimitedHandler}
						label={"Ограничить количество символов в ответах"}
					/>
				</>
			);
		}
	};

	return (
		<div className={styles.rightSide_checkboxes}>
			<Checkbox
				id={"isTimeConsidered"}
				label={"Учитывать время"}
				value={isTimeConsidered}
				onChange={handleChangeStateTaskIsTimeConsidered}
			/>
			{isWelcomeScreen(taskType) ? null : (
				<>
					<Checkbox
						id={"isTimeDisplayForUser"}
						label={"Отображать время пользователю"}
						value={isTimeDisplayForUser}
						onChange={handleChangeStateTaskIsTimeDisplayForUser}
					/>
				</>
			)}
			{getOptions()}
			{isAnswerSizeLimited ? (
				<>
					<div className={`${styles.rightSide_checkboxes__input_container} `}>
						<input
							type="tel"
							placeholder="от"
							value={responseLimitationFrom}
							onChange={changeResponseLimitationFrom}
							pattern="^\d\d?\d?\d?"
							onBlur={dispatchResponseLimitationFromTo}
						/>
						<input
							type="tel"
							placeholder="до"
							value={responseLimitationTo}
							onChange={changeResponseLimitationTo}
							pattern="^\d\d?\d?\d?"
							onBlur={dispatchResponseLimitationTo}
						/>
					</div>
				</>
			) : null}
		</div>
	);
}

export default TypeOptions;
