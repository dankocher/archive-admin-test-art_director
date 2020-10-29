import {
	setIsOneGradeForAllSubTasks,
	setSelectedRowIdImgGrid,
	deleteRadioButtonTaskOptionScores,
} from "../redux/actions";

import { setFirstImgRowId } from "./setFirstImgRowId";
import { setUnfilledScoreCounterToImgGrigThunk } from "./setUnfilledScoreCounterToImgGrigThunk";

export const changeIsOneGradeForAllSubTasksThunk = () => {
	return (dispatch, getState) => {
		const state = getState();
		const isOneGradeForAllSubTasks =
			state.reduxStorage.task.isOneGradeForAllSubTasks;

		dispatch(setIsOneGradeForAllSubTasks());
		dispatch(deleteRadioButtonTaskOptionScores());
		if (isOneGradeForAllSubTasks) {
			dispatch(setFirstImgRowId());
			dispatch(setUnfilledScoreCounterToImgGrigThunk());
		} else {
			dispatch(setSelectedRowIdImgGrid(null));
		}
	};
};
