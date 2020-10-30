import { useSelector } from "react-redux";
import {
	ILLUSTRATION_RADIO_BUTTONS,
	WORDS_RADIO_BUTTONS,
} from "../helpers/taskTypes/taskTypes";

export const useGetIsHaveMarks = (task) => {
	// return true;
	let isOneGradeForAllSubTasks = useSelector(
		(state) => state.reduxStorage.task.isOneGradeForAllSubTasks
	);
	let imgGrid = useSelector((state) => state.reduxStorage.task.data.imgGrid);
	let radioButtonTaskList = useSelector(
		(state) => state.reduxStorage.task.data.radioButtonTaskList
	);

	if (task != null) {
		// console.log(task);
		if (
			task.type !== ILLUSTRATION_RADIO_BUTTONS &&
			task.type !== WORDS_RADIO_BUTTONS
		) {
			return undefined;
		}

		isOneGradeForAllSubTasks = task.isOneGradeForAllSubTasks;
		imgGrid = task.data.imgGrid;
		radioButtonTaskList = task.data.radioButtonTaskList;
	}
	// debugger;
	if (isOneGradeForAllSubTasks) {
		if (radioButtonTaskList == null) return true;

		for (const radioButtonTask of radioButtonTaskList) {
			if (radioButtonTask.emptyScoreCounter !== 0) return false;
		}
		return true;
	} else {
		if (imgGrid == null) return true;

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
