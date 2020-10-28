import {
	incrementUnfilledScoreCounterRadioButtonIllustration,
	decrementUnfilledScoreCounterRadioButtonIllustration,
} from "../redux/actions";

export const setUnfilledScoreCounterUpdateThunk = (
	newScore,
	radioButtonTaskIndex,
	optionIndex
) => {
	return (dispatch, getState) => {
		const selectedImgRow = getState().radioButtonIllustrationResucer
			.selectedImgRow;
		const previousScoreList = getState().reduxStorage.task.data
			.radioButtonTaskList[radioButtonTaskIndex].radioButtonOptionList[
			optionIndex
		].scoreList;
		const imgGrid = getState().reduxStorage.task.data.imgGrid;
		const imgRowIndex = imgGrid.findIndex(
			(rowImgs) => rowImgs.id === selectedImgRow
		);

		if (
			previousScoreList != null &&
			previousScoreList[selectedImgRow] != null
		) {
			if (previousScoreList[selectedImgRow] === "") {
				if (newScore === "") return;
				//decrement
				dispatch(
					decrementUnfilledScoreCounterRadioButtonIllustration(imgRowIndex)
				);
			} else {
				if (newScore !== "") return;
				//increment
				dispatch(
					incrementUnfilledScoreCounterRadioButtonIllustration(imgRowIndex)
				);
			}
		} else {
			if (newScore === "") return;
			//decrement
			dispatch(
				decrementUnfilledScoreCounterRadioButtonIllustration(imgRowIndex)
			);
		}
	};
};
