export const SET_TASK_STATE = "SET_TASK_STATE";
export const SET_TASK_NAME = "SET_IMAGE_LENGTH";
export const SET_TASK_DESCRIPTION = "SET_TASK_DESCRIPTION";
export const SET_TASK_TYPE = "SET_TASK_TYPE";
export const SET_IS_TIME_CONSIDERED = "IS_TIME_CONSIDERED";
export const SET_IS_TIME_DISPLAY_FOR_USER = "SET_IS_TIME_DISPLAY_FOR_USER";
export const SET_IS_ONE_GRADE_FOR_ALL_SUB_TASKS =
  "SET_IS_ONE_GRADE_FOR_ALL_SUB_TASKS";
export const SET_RADIO_BUTTON_QUESTION = "SET_RADIO_BUTTON_QUESTION";

export const setTaskName = (name) => ({
  type: SET_TASK_NAME,
  payload: name,
});

export const setTaskDescription = (description) => ({
  type: SET_TASK_DESCRIPTION,
  payload: description,
});

export const setTaskType = (type) => ({
  type: SET_TASK_TYPE,
  payload: type,
});

export const setIsTimeConsidered = () => ({
  type: SET_IS_TIME_CONSIDERED,
});

export const setIsTimeDisplayForUser = () => ({
  type: SET_IS_TIME_DISPLAY_FOR_USER,
});

export const setIsOneGradeForAllSubTasks = () => ({
  type: SET_IS_ONE_GRADE_FOR_ALL_SUB_TASKS,
});

export const setTaskState = (task) => ({
  type: SET_TASK_STATE,
  payload: task,
});

export const setRadioButtonQuestion = (question) => ({
  type: SET_RADIO_BUTTON_QUESTION,
  payload: question,
});
