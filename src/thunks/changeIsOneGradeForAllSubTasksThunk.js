import {
	setIsOneGradeForAllSubTasks,
	setSelectedRowIdImgGrid,
} from "../redux/actions";

import { setFirstImgRowId } from "./setFirstImgRowId";

export const changeIsOneGradeForAllSubTasksThunk = () => {
	return (dispatch, getState) => {
		const isOneGradeForAllSubTasks = getState().reduxStorage.task
			.isOneGradeForAllSubTasks;

		dispatch(setIsOneGradeForAllSubTasks());
		if (isOneGradeForAllSubTasks) {
			dispatch(setFirstImgRowId());
		} else {
			dispatch(setSelectedRowIdImgGrid(null));
		}
	};
};
