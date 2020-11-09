import {
	removeRadioButtonTaskOption,
	decrementEmptyScoreCounter,
	decrementUnfilledScoreCounterFromImgGridRBOption,
} from "../redux/actions";

export const deleteRadioButtonTaskOptionThunk = (
	radioButtonTaskIndex,
	optionIndex,
	addNewOption
) => {
	return (dispatch, getState) => {
		const state = getState();
		const isOneGradeForAllSubTasks =
			state.reduxStorage.task.isOneGradeForAllSubTasks;

		const optionList =
			state.reduxStorage.task.data.radioButtonTaskList[radioButtonTaskIndex]
				.radioButtonOptionList;

		dispatch(removeRadioButtonTaskOption(radioButtonTaskIndex, optionIndex));

		if (optionList.length === 1) {
			addNewOption();
		}

		if (isOneGradeForAllSubTasks == null || isOneGradeForAllSubTasks) {
			const option = optionList[optionIndex];
			if (option.score != null && option.score !== "") return;
			dispatch(decrementEmptyScoreCounter(radioButtonTaskIndex));
		} else {
			const scoreList =
				state.reduxStorage.task.data.radioButtonTaskList[radioButtonTaskIndex]
					.radioButtonOptionList[optionIndex].scoreList;

			// debugger;
			let listImgId;
			if (scoreList != null) {
				listImgId = Object.keys(scoreList).filter(
					(key) => scoreList[key] !== ""
				);
			}

			dispatch(decrementUnfilledScoreCounterFromImgGridRBOption(listImgId));
		}
	};
};
