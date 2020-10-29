import { setUnfilledScoreCounterToImgGrid } from "../redux/actions";

export const setUnfilledScoreCounterToImgGrigThunk = () => {
	return (dispanch, getState) => {
		const state = getState();
		const radioButtonTaskList =
			state.reduxStorage.task.data.radioButtonTaskList;

		let unfilledScoreCounter;

		for (const task of radioButtonTaskList) {
			const optionLength = task.radioButtonOptionList.length;
			if (unfilledScoreCounter == null) {
				unfilledScoreCounter = optionLength;
			} else {
				unfilledScoreCounter = unfilledScoreCounter + optionLength;
			}
		}
		dispanch(setUnfilledScoreCounterToImgGrid(unfilledScoreCounter));
		console.log(unfilledScoreCounter);
	};
};
