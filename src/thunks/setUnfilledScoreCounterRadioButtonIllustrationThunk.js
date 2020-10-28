import { setUnfilledScoreCounterRadioButtonIllustration } from "../redux/actions";

export const setUnfilledScoreCounterToRadioButtonIllustrationThunk = (
	imgRowId,
	rowIndex
) => {
	return (dispatch, getState) => {
		const radioButtonTaskList = getState().reduxStorage.task.data
			.radioButtonTaskList;
		console.log(radioButtonTaskList);
		let unfilledScoreCounter = 0;
		for (const radioButtonTask of radioButtonTaskList) {
			for (const option of radioButtonTask.radioButtonOptionList) {
				if (option.scoreList != null) {
					if (
						option.scoreList[imgRowId] != null &&
						option.scoreList[imgRowId] !== ""
					) {
						continue;
					}
				}
				unfilledScoreCounter++;
			}
		}
		console.log(`unfilledScoreCounter=${unfilledScoreCounter}`);
		dispatch(
			setUnfilledScoreCounterRadioButtonIllustration(
				rowIndex,
				unfilledScoreCounter
			)
		);
	};
};
