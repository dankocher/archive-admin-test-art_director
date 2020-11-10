import {
	setRadioButtonTaskOptionScoreToScoreList,
	setRadioButtonTaskOptionScore,
	setRadioButtonTaskOptionScoreList,
} from "../redux/actions";

import { comparePreviouAndNextThunk } from "./comparePreviouAndNextThunk";
import { setUnfilledScoreCounterUpdateThunk } from "./setUnfilledScoreCounterUpdateThunk";

export const setRadioButtonTaskOptionMarkThunk = (
	answerScore,
	radioButtonTaskIndex,
	optionIndex
) => {
	return (dispatch, getState) => {
		const isOneGradeForAllSubTasks = getState().reduxStorage.task
			.isOneGradeForAllSubTasks;

		if (isOneGradeForAllSubTasks == null || isOneGradeForAllSubTasks) {
			dispatch(
				comparePreviouAndNextThunk(
					answerScore,
					radioButtonTaskIndex,
					optionIndex
				)
			);

			dispatch(
				setRadioButtonTaskOptionScore(
					answerScore,
					radioButtonTaskIndex,
					optionIndex
				)
			);
		} else {
			const selectedImgRow = getState().radioButtonIllustrationResucer
				.selectedImgRow;
			const scoreList = getState().reduxStorage.task.data.radioButtonTaskList[
				radioButtonTaskIndex
			].radioButtonOptionList[optionIndex].scoreList;

			dispatch(
				setUnfilledScoreCounterUpdateThunk(
					answerScore,
					radioButtonTaskIndex,
					optionIndex
				)
			);

			if (scoreList != null) {
				dispatch(
					setRadioButtonTaskOptionScoreToScoreList(
						answerScore,
						radioButtonTaskIndex,
						optionIndex,
						selectedImgRow
					)
				);
			} else {
				dispatch(
					setRadioButtonTaskOptionScoreList(
						answerScore,
						radioButtonTaskIndex,
						optionIndex,
						selectedImgRow
					)
				);
			}
		}
	};
};
