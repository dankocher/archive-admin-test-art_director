import {
	deleteRowFromImgGrig,
	deleteColumnFromImgGrig,
	setSelectedRowIdImgGrid,
} from "../redux/actions";

import { setFirstImgRowId } from "./setFirstImgRowId";

export const deleteImgFromImgGridThunk = (indexRow, indexColumn) => {
	return (dispatch, getState) => {
		const imgGrid = getState().reduxStorage.task.data.imgGrid;
		const imgRowId = imgGrid[indexRow].id;
		const selectedImgRow = getState().radioButtonIllustrationResucer
			.selectedImgRow;

		if (imgGrid[indexRow].imgColumnList.length === 1) {
			dispatch(deleteRowFromImgGrig(indexRow));
			if (imgGrid.length === 1) {
				dispatch(setSelectedRowIdImgGrid(null));
			} else if (imgRowId === selectedImgRow) {
				dispatch(setFirstImgRowId());
			}
		} else {
			dispatch(deleteColumnFromImgGrig(indexRow, indexColumn));
		}
	};
};
