import { addRadioButtonOption } from "../redux/actions";
import { incrementUnfilledScoreCounterFromImgGrid } from "../redux/actions";

export const addRadioButtonOptionThunk = (index) => {
	return (dispatch, getState) => {
		const state = getState();
		const isOneGradeForAllSubTasks =
			state.reduxStorage.task.isOneGradeForAllSubTasks;

		dispatch(addRadioButtonOption(index));

		if (isOneGradeForAllSubTasks) return;

		dispatch(incrementUnfilledScoreCounterFromImgGrid());
	};
};
