export const SET_INITIAL_STATE = "SET_INITIAL_STATE";
export const SET_TASK_STATE = "SET_TASK_STATE";
export const SET_TASK_NAME = "SET_TASK_NAME";
export const SET_TASK_DESCRIPTION = "SET_TASK_DESCRIPTION";
export const SET_TASK_TYPE = "SET_TASK_TYPE";
export const SET_IS_TIME_CONSIDERED = "IS_TIME_CONSIDERED";
export const SET_IS_TIME_DISPLAY_FOR_USER = "SET_IS_TIME_DISPLAY_FOR_USER";
export const SET_IS_ONE_GRADE_FOR_ALL_SUB_TASKS =
  "SET_IS_ONE_GRADE_FOR_ALL_SUB_TASKS";
export const ADD_RADIO_BUTTON_TASK = "ADD_RADIO_BUTTON_TASK";
export const ADD_RADIO_BUTTON_OPTION = "ADD_RADIO_BUTTON_OPTION";
export const SET_RADIO_BUTTON_TASK_QUESTION = "SET_RADIO_BUTTON_TASK_QUESTION";
export const SET_RADIO_BUTTON_TASK_OPTION = "SET_RADIO_BUTTON_TASK_OPTION";
export const SET_RADIO_BUTTON_TASK_OPTION_MARK =
  "SET_RADIO_BUTTON_TASK_OPTION_MARK";
export const REMOVE_RADIO_BUTTON_TASK_OPTION =
  "REMOVE_RADIO_BUTTON_TASK_OPTION";
export const REMOVE_RADIO_BUTTON_TASK = "REMOVE_RADIO_BUTTON_TASK";
export const SET_IS_HAVE_MARKS = "SET_IS_HAVE_MARKS";

export const setInitialState = () => ({
  type: SET_INITIAL_STATE,
});

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

export const addRadioButtonTask = () => ({
  type: ADD_RADIO_BUTTON_TASK,
});

export const addRadioButtonOption = (index) => ({
  type: ADD_RADIO_BUTTON_OPTION,
  payload: index,
});

export const setRadioButtonTaskQuestion = (question, index) => ({
  type: SET_RADIO_BUTTON_TASK_QUESTION,
  index: index,
  payload: question,
});

export const setRadioButtonTaskOption = (
  option,
  radioButtonTaskIndex,
  radioButtonTaskOptionIndex
) => ({
  type: SET_RADIO_BUTTON_TASK_OPTION,
  radioButtonTaskIndex: radioButtonTaskIndex,
  radioButtonTaskOptionIndex: radioButtonTaskOptionIndex,
  payload: option,
});

export const setRadioButtonTaskOptionMark = (
  mark,
  radioButtonTaskIndex,
  radioButtonTaskOptionIndex
) => ({
  type: SET_RADIO_BUTTON_TASK_OPTION_MARK,
  radioButtonTaskIndex: radioButtonTaskIndex,
  radioButtonTaskOptionIndex: radioButtonTaskOptionIndex,
  payload: mark,
});

export const removeRadioButtonTaskOption = (
  radioButtonTaskIndex,
  radioButtonTaskOptionIndex
) => ({
  type: REMOVE_RADIO_BUTTON_TASK_OPTION,
  radioButtonTaskIndex: radioButtonTaskIndex,
  radioButtonTaskOptionIndex: radioButtonTaskOptionIndex,
});

export const removeRadioButtonTask = (radioButtonTaskIndex) => ({
  type: REMOVE_RADIO_BUTTON_TASK,
  radioButtonTaskIndex: radioButtonTaskIndex,
});

export const setIsHaveMarks = (radioButtonTaskIndex, isHaveMarks) => ({
  type: SET_IS_HAVE_MARKS,
  radioButtonTaskIndex: radioButtonTaskIndex,
  payload: isHaveMarks,
});
