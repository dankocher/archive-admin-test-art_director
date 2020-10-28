import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	setRadioButtonTaskOption,
	// removeRadioButtonTaskOption,
} from "../../../../../../../../../../redux/actions";

import { setRadioButtonTaskOptionMarkThunk } from "../../../../../../../../../../thunks/setRadioButtonTaskOptionMarkThunk";
import { deleteRadioButtonTaskOptionThunk } from "../../../../../../../../../../thunks/deleteRadioButtonTaskOptionThunk";

import { getIsHaveMarks } from "../../../../../../../../helpers/getIsHaveMarks";

import TextArea from "../../../../../../../TextArea/TextArea";
import DeleteButton from "../../../../../../../DeleteButton/DeleteButton";

function RadioButtonOption({
	radioButtonOption,
	radioButtonTaskIndex,
	optionIndex,
	isHaveMark,
	addNewOption,
	radioButtonOptionList,
}) {
	const dispatch = useDispatch();
	const [isHoveredOption, setIsHoveredOption] = useState(false);
	const [answerScore, setAnswerScore] = useState("");
	const [isScoreInputDisabled, setIsScoreInputDisabled] = useState(true);

	const isOneGradeForAllSubTasks = useSelector(
		(state) => state.reduxStorage.task.isOneGradeForAllSubTasks
	);

	const imgGrid = useSelector((state) => state.reduxStorage.task.data.imgGrid);

	const selectedImgRow = useSelector(
		(state) => state.radioButtonIllustrationResucer.selectedImgRow
	);

	useEffect(() => {
		if (isOneGradeForAllSubTasks) {
			setAnswerScore(radioButtonOption.score || "");
		} else {
			const scoreList = radioButtonOption.scoreList;

			if (scoreList) {
				setAnswerScore(scoreList[selectedImgRow] || "");
			} else {
				setAnswerScore("");
			}
		}
	}, [isOneGradeForAllSubTasks, selectedImgRow]);

	useEffect(() => {
		if (imgGrid.length === 0) {
			setIsScoreInputDisabled(true);
		} else {
			setIsScoreInputDisabled(false);
		}
	}, [imgGrid]);

	const handlerAnswerScoreOnChange = (event) => {
		const number = event.target.validity.valid
			? event.target.value
			: answerScore;
		if (
			number > 99 ||
			number < -99 ||
			number === "00" ||
			/^0\d/.test(number) ||
			number === "-0"
		) {
			return;
		}
		setAnswerScore(number);
	};

	const hadlerOnBlurOption = (text) => {
		dispatch(setRadioButtonTaskOption(text, radioButtonTaskIndex, optionIndex));
	};

	const handlerOnBlureMark = () => {
		if (isOneGradeForAllSubTasks) {
			if (radioButtonOption.score === answerScore) return;
		} else {
			if (radioButtonOption.scoreList != null) {
				if (radioButtonOption.scoreList[selectedImgRow] === answerScore) return;
			}
		}
		const isHaveMarks =
			answerScore !== "" && getIsHaveMarks(radioButtonOptionList, optionIndex);

		dispatch(
			setRadioButtonTaskOptionMarkThunk(
				answerScore,
				radioButtonTaskIndex,
				optionIndex,
				isHaveMarks
			)
		);
	};

	const handlerOnClickRemoveBtn = () => {
		const optionListLength = radioButtonOptionList.length;
		const isHaveMarks =
			optionListLength === 2
				? true
				: getIsHaveMarks(radioButtonOptionList, optionIndex);
		dispatch(
			deleteRadioButtonTaskOptionThunk(
				radioButtonTaskIndex,
				optionIndex,
				isHaveMarks
			)
		);
		if (optionListLength === 1) {
			addNewOption();
		}
	};

	// const isScoreInputDisabled = () => {
	// 	debugger;
	// 	console.log(imgGrid.length);
	// 	if (imgGrid.length === 0) return true;
	// 	else if (selectedImgRow === null) return true;
	// };

	return (
		<div
			className="container-answer--RadioButtonAnswers"
			onMouseEnter={() => setIsHoveredOption(true)}
			onMouseLeave={() => setIsHoveredOption(false)}
		>
			<TextArea
				className="input"
				value={radioButtonOption.option}
				onBlur={hadlerOnBlurOption}
			/>
			<div className="wrapper-centred--RadioButtonAnswers">
				<input
					type="tel"
					pattern="^[-\d]\d?\d?"
					className={`input ${isHaveMark ? "" : "border-error"}`}
					value={answerScore}
					onChange={handlerAnswerScoreOnChange}
					onBlur={handlerOnBlureMark}
					disabled={isScoreInputDisabled}
				/>
			</div>

			<div className="wrapper-centred--RadioButtonAnswers">
				{isHoveredOption ? (
					<DeleteButton onClick={() => handlerOnClickRemoveBtn()} />
				) : null}
			</div>
		</div>
	);
}

export default RadioButtonOption;
