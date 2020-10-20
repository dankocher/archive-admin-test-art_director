import { setImgToImgGridSuccess, setImgToImgGridError } from "../redux/actions";

export const setRowImgIllustrationContainer = (
	imgName,
	rowDiff,
	columnDiff
) => {
	return (dispatch, getState) => {
		const imgMatrix = getState().reduxStorage.task.data.imgGrid;
		const rowIndex = imgMatrix.length - 1 - rowDiff;
		const columnIndex = imgMatrix[rowIndex].imgColumnList.length - 1 - columnDiff;
		// console.log(rowIndex);
		// console.log(columnIndex);

		if (imgName !== "") {
			dispatch(setImgToImgGridSuccess(imgName, rowIndex, columnIndex));
		} else {
			dispatch(setImgToImgGridError(rowIndex, columnIndex));
		}
	};
};
