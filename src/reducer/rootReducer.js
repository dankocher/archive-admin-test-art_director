import {
	SET_TASK_NAME,
	SET_TASK_DESCRIPTION,
	SET_TASK_TYPE,
	SET_IS_TIME_CONSIDERED,
	SET_IS_TIME_DISPLAY_FOR_USER,
	SET_IS_ONE_GRADE_FOR_ALL_SUB_TASKS,
} from "../actions";

const initialState = {
	taskName: "",
	taskType: "",
	taskDescription: "",
	isTimeConsidered: false,
	isTimeDisplayForUser: false,
	isOneGradeForAllSubTasks: false,
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case SET_TASK_NAME:
			return {...state, taskName: action.payload};
		case SET_TASK_DESCRIPTION:
			return {...state, taskDescription: action.payload};
		case SET_TASK_TYPE:
			return {...state, taskType: action.payload};
		case SET_IS_TIME_CONSIDERED:
			return {...state, isTimeConsidered: !state.isTimeConsidered};
		case SET_IS_TIME_DISPLAY_FOR_USER:
			return {...state, isTimeDisplayForUser: !state.isTimeDisplayForUser};
		case SET_IS_ONE_GRADE_FOR_ALL_SUB_TASKS:
			return {
				...state,
				isOneGradeForAllSubTasks: !state.isOneGradeForAllSubTasks,
			};
		default:
			return state;
	}
}

export default rootReducer;
