import {
	addRadioButtonTask,
	incrementUnfilledScoreCounterFromImgGrid,
} from "../redux/actions";

export const addRadioButtonTaskThunk = () => {
	return (dispatch, getState) => {
		const state = getState();
		const isOneGradeForAllSubTasks =
			state.reduxStorage.task.isOneGradeForAllSubTasks;

		dispatch(addRadioButtonTask());

		if (isOneGradeForAllSubTasks == null || isOneGradeForAllSubTasks) return;

		dispatch(incrementUnfilledScoreCounterFromImgGrid());
	};
};
