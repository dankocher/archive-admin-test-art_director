import {
	SET_TASK_NAME,
	SET_TASK_DESCRIPTION,
	SET_TASK_TYPE,
	SET_IS_TIME_CONSIDERED,
} from "../actions";

const initialState = {
	taskName: "",
	taskType: "",
	taskDescription: "",
	isTimeConsidered: false,
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
		default:
			return state;
	}
}

export default rootReducer;
