import { setUnfilledScoreCounterRadioButtonIllustration } from "../redux/actions";

export const setUnfilledScoreCounterRadioButtonIllustrationThunk = (
	imgRowId
) => {
	return (dispatch, getState) => {
		const radioButtonTaskList = getState().reduxStorage.task.data
			.radioButtonTaskList;
		let unfilledScoreCounter = 0;
		for (const RBTIndex of radioButtonTaskList.keys()) {
			for (const option of radioButtonTaskList[RBTIndex]
				.radioButtonOptionList) {
				if (option.scoreList != null) {
					debugger;
					if (option.scoreList[imgRowId] !== "") continue;
				}
				unfilledScoreCounter++;
			}
		}
		dispatch(
			setUnfilledScoreCounterRadioButtonIllustration(
				imgRowId,
				unfilledScoreCounter
			)
		);
	};
};
