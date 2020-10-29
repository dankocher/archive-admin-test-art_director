import { removeRadioButtonTaskOption } from "../redux/actions";
import { decrementUnfilledScoreCounterFromImgGridRBOption } from "../redux/actions";

export const deleteRadioButtonTaskOptionThunk = (
	radioButtonTaskIndex,
	optionIndex,
	addNewOption
) => {
	return (dispatch, getState) => {
		const state = getState();
		const isOneGradeForAllSubTasks =
			state.reduxStorage.task.isOneGradeForAllSubTasks;

		const optionListLength =
			state.reduxStorage.task.data.radioButtonTaskList[radioButtonTaskIndex]
				.radioButtonOptionList.length;

		dispatch(removeRadioButtonTaskOption(radioButtonTaskIndex, optionIndex));

		if (optionListLength === 1) {
			addNewOption();
		}

		if (isOneGradeForAllSubTasks) return;

		const scoreList =
			state.reduxStorage.task.data.radioButtonTaskList[radioButtonTaskIndex]
				.radioButtonOptionList[optionIndex].scoreList;

		// debugger;
		let listImgId;
		if (scoreList != null) {
			listImgId = Object.keys(scoreList).filter((key) => scoreList[key] !== "");
		}

		console.log(listImgId);

		dispatch(decrementUnfilledScoreCounterFromImgGridRBOption(listImgId));
	};
};
