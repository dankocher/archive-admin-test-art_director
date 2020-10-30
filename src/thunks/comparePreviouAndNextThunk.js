import {
	incrementEmptyScoreCounter,
	decrementEmptyScoreCounter,
} from "../redux/actions";

export const comparePreviouAndNextThunk = (
	newScore,
	radioButtonTaskIndex,
	optionIndex
) => {
	return (dispatch, getState) => {
		const state = getState();
		const oldScore =
			state.reduxStorage.task.data.radioButtonTaskList[radioButtonTaskIndex]
				.radioButtonOptionList[optionIndex].score;
		if (oldScore != null) {
			if (oldScore === "") {
				if (newScore === "") return;
				//decrement
				dispatch(decrementEmptyScoreCounter(radioButtonTaskIndex));
			} else {
				if (newScore !== "") return;
				//increment
				dispatch(incrementEmptyScoreCounter(radioButtonTaskIndex));
			}
		} else {
			if (newScore === "") return;
			//decrement
			dispatch(decrementEmptyScoreCounter(radioButtonTaskIndex));
		}
	};
};
