import { setChoosenRowImgGridId } from "../redux/actions";

export const setFirstImgRowId = () => {
	return (dispatch, getState) => {
		const isOneGradeForAllSubTasks = getState().reduxStorage.task
			.isOneGradeForAllSubTasks;
		if (isOneGradeForAllSubTasks) return;

		const imgGrid = getState().reduxStorage.task.data.imgGrid;
		// debugger;
		if (imgGrid) {
			return;
		}

		dispatch(setChoosenRowImgGridId(imgGrid[0].id));
	};
};
