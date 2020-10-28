import { removeRadioButtonTaskOption } from "../redux/actions";
import { decrementUnfilledScoreCounterFromImgGrid } from "../redux/actions";

export const deleteRadioButtonTaskOptionThunk = (
	radioButtonTaskIndex,
	optionIndex,
	isHaveMarks
) => {
	return (dispatch, getState) => {
		const state = getState();
		const isOneGradeForAllSubTasks =
			state.reduxStorage.task.isOneGradeForAllSubTasks;

		dispatch(
			removeRadioButtonTaskOption(
				radioButtonTaskIndex,
				optionIndex,
				isHaveMarks
			)
		);

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

		dispatch(decrementUnfilledScoreCounterFromImgGrid(listImgId));
	};
};
