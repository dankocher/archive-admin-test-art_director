import { useSelector } from "react-redux";

export const useGetIsHaveMarks = (radioButtonTaskList) => {
	const isOneGradeForAllSubTasks = useSelector(
		(state) => state.reduxStorage.task.isOneGradeForAllSubTasks
	);
	const imgGrid = useSelector((state) => state.reduxStorage.task.data.imgGrid);
	const radioButtonTaskListState = useSelector(
		(state) => state.reduxStorage.task.data.radioButtonTaskList
	);
	if (isOneGradeForAllSubTasks) {
		// if (radioButtonTaskList === undefined) {
		//   radioButtonTaskList = radioButtonTaskListState;
		// }

		// if (radioButtonTaskList === undefined) return true;

		// for (const radioButtonTask of radioButtonTaskList) {
		//   if (radioButtonTask.isHaveMarks === false) return false;
		// }

		return true;
	} else {
		if (imgGrid != null) {
			for (const imgRow of imgGrid) {
				if (imgRow.unfilledScoreCounter !== 0) return false;
			}

			return true;
		} else {
			return true;
		}
	}
};
