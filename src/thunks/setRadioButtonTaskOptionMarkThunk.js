import {
	setRadioButtonTaskOptionScoreToScoreList,
	setRadioButtonTaskOptionScore,
} from "../redux/actions";

export const setRadioButtonTaskOptionMarkThunk = (
	answerScore,
	radioButtonTaskIndex,
	optionIndex,
	isHaveMarks
) => {
	return (dispatch, getState) => {
		const isOneGradeForAllSubTasks = getState().reduxStorage.task
			.isOneGradeForAllSubTasks;

		if (isOneGradeForAllSubTasks) {
			dispatch(
				setRadioButtonTaskOptionScore(
					answerScore,
					radioButtonTaskIndex,
					optionIndex,
					isHaveMarks
				)
			);
		} else {
			const selectedImgRow = getState().radioButtonIllustrationResucer
				.selectedImgRow;
			dispatch(
				setRadioButtonTaskOptionScoreToScoreList(
					answerScore,
					radioButtonTaskIndex,
					optionIndex,
					selectedImgRow,
					isHaveMarks
				)
			);
		}
	};
};
