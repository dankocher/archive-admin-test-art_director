import {
	setRadioButtonTaskOptionScoreToScoreList,
	setRadioButtonTaskOptionScore,
	setRadioButtonTaskOptionScoreList,
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
			const scoreList = getState().reduxStorage.task.data.radioButtonTaskList[
				radioButtonTaskIndex
			].radioButtonOptionList[optionIndex].scoreList;
			if (scoreList != null) {
				dispatch(
					setRadioButtonTaskOptionScoreToScoreList(
						answerScore,
						radioButtonTaskIndex,
						optionIndex,
						selectedImgRow,
						isHaveMarks
					)
				);
			} else {
				dispatch(
					setRadioButtonTaskOptionScoreList(
						answerScore,
						radioButtonTaskIndex,
						optionIndex,
						selectedImgRow,
						isHaveMarks
					)
				);
				console.log("net tvoego score lISTA paskuda");
			}
		}
	};
};
