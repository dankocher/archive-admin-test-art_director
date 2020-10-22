import { setSelectedRowIdImgGrid } from "../redux/actions";

export const setFirstImgRowId = () => {
	return (dispatch, getState) => {
		const isOneGradeForAllSubTasks = getState().reduxStorage.task
			.isOneGradeForAllSubTasks;

		if (isOneGradeForAllSubTasks) return;
		const imgGrid = getState().reduxStorage.task.data.imgGrid;

		if (imgGrid.length === 0) return;
		dispatch(setSelectedRowIdImgGrid(imgGrid[0].id));
	};
};
