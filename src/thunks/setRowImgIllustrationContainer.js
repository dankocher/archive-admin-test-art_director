import { setImgToImgGridSuccess, setImgToImgGridError } from "../redux/actions";
import { setFirstImgRowId } from "./setFirstImgRowId";
export const setRowImgIllustrationContainer = (
	imgName,
	rowDiff,
	columnDiff
) => {
	return (dispatch, getState) => {
		const selectedImgRow = getState().radioButtonIllustrationResucer
			.selectedImgRow;
		const imgMatrix = getState().reduxStorage.task.data.imgGrid;
		const rowIndex = imgMatrix.length - 1 - rowDiff;
		const columnIndex =
			imgMatrix[rowIndex].imgColumnList.length - 1 - columnDiff;
		// console.log(rowIndex);
		// console.log(columnIndex);

		// debugger;
		if (imgName !== "") {
			dispatch(setImgToImgGridSuccess(imgName, rowIndex, columnIndex));
			if (selectedImgRow === null) {
				dispatch(setFirstImgRowId());
			}
		} else {
			dispatch(setImgToImgGridError(rowIndex, columnIndex));
		}
	};
};
