import {
	setIsOneGradeForAllSubTasks,
	setSelectedRowIdImgGrid,
	deleteRadioButtonTaskOptionScores,
} from "../redux/actions";

import { setFirstImgRowId } from "./setFirstImgRowId";

export const changeIsOneGradeForAllSubTasksThunk = () => {
	return (dispatch, getState) => {
		const isOneGradeForAllSubTasks = getState().reduxStorage.task
			.isOneGradeForAllSubTasks;

		dispatch(setIsOneGradeForAllSubTasks());
		dispatch(deleteRadioButtonTaskOptionScores());
		if (isOneGradeForAllSubTasks) {
			dispatch(setFirstImgRowId());
		} else {
			dispatch(setSelectedRowIdImgGrid(null));
		}
	};
};
