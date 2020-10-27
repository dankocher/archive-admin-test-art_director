import { setImgToImgGridSuccess, setImgToImgGridError } from "../redux/actions";
import { setFirstImgRowId } from "./setFirstImgRowId";
import { setUnfilledScoreCounterRadioButtonIllustrationThunk } from "./setUnfilledScoreCounterRadioButtonIllustrationThunk";

export const setRowImgIllustrationContainer = (
	imgName,
	rowDiff,
	columnDiff
) => {
	return (dispatch, getState) => {
		const selectedImgRow = getState().radioButtonIllustrationResucer
			.selectedImgRow;
		const isOneGradeForAllSubTasks = getState().reduxStorage.task
			.isOneGradeForAllSubTasks;
		const imgGrid = getState().reduxStorage.task.data.imgGrid;
		const rowIndex = imgGrid.length - 1 - rowDiff;
		const columnIndex = imgGrid[rowIndex].imgColumnList.length - 1 - columnDiff;
		const imgRowId = imgGrid[rowIndex].id;
		// console.log(rowIndex);
		// console.log(columnIndex);
		console.log(imgName);
		if (imgName !== "") {
			dispatch(setImgToImgGridSuccess(imgName, rowIndex, columnIndex));
			if (isOneGradeForAllSubTasks) return;
			dispatch(setUnfilledScoreCounterRadioButtonIllustrationThunk(imgRowId));
			if (selectedImgRow === null) {
				dispatch(setFirstImgRowId());
			}
		} else {
			dispatch(setImgToImgGridError(rowIndex, columnIndex));
		}
	};
};
