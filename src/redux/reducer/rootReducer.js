import {
  SET_TASK_STATE,
  SET_TASK_NAME,
  SET_TASK_DESCRIPTION,
  SET_TASK_TYPE,
  SET_IS_TIME_CONSIDERED,
  SET_IS_TIME_DISPLAY_FOR_USER,
  SET_IS_ONE_GRADE_FOR_ALL_SUB_TASKS,
} from "../actions";

const initialState = {
  isUpdatedLocally: false,
  task: {
    _id: "",
    name: "",
    description: "",
    type: "",
    isTimeConsidered: false,
    isTimeDisplayForUser: false,
    isOneGradeForAllSubTasks: true,
    enabled: true,
    position: "",
    date: "",
    updated: "",
  },
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TASK_STATE:
      return {
        ...state,
        isUpdatedLocally: false,
        task: { ...state.task, ...action.payload },
      };
    case SET_TASK_NAME:
      return {
        ...state,
        isUpdatedLocally: true,
        task: {
          ...state.task,
          name: action.payload,
        },
      };
    case SET_TASK_DESCRIPTION:
      return {
        ...state,
        isUpdatedLocally: true,
        task: { ...state.task, description: action.payload },
      };
    case SET_TASK_TYPE:
      return {
        ...state,
        isUpdatedLocally: true,
        task: { ...state.task, type: action.payload },
      };
    case SET_IS_TIME_CONSIDERED:
      return {
        ...state,
        isUpdatedLocally: true,
        task: { ...state.task, isTimeConsidered: !state.task.isTimeConsidered },
      };
    case SET_IS_TIME_DISPLAY_FOR_USER:
      return {
        ...state,
        isUpdatedLocally: true,
        task: {
          ...state.task,
          isTimeDisplayForUser: !state.task.isTimeDisplayForUser,
        },
      };
    case SET_IS_ONE_GRADE_FOR_ALL_SUB_TASKS:
      return {
        ...state,
        isUpdatedLocally: true,
        task: {
          ...state.task,
          isOneGradeForAllSubTasks: !state.task.isOneGradeForAllSubTasks,
        },
      };
    default:
      return state;
  }
}

export default rootReducer;
