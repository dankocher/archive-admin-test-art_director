export const SET_TEST_PROPS = "SET_TEST_PROPS";
export const SET_TEST_NAME = "SET_TEST_NAME";
export const SET_INITIAL_STATE = "SET_INITIAL_STATE";
export const SET_TASK_STATE = "SET_TASK_STATE";
export const SET_TASK_NAME = "SET_TASK_NAME";
export const SET_TASK_DESCRIPTION = "SET_TASK_DESCRIPTION";
export const SET_TASK_TYPE = "SET_TASK_TYPE";
export const SET_IS_TIME_CONSIDERED = "IS_TIME_CONSIDERED";
export const SET_IS_TIME_DISPLAY_FOR_USER = "SET_IS_TIME_DISPLAY_FOR_USER";
export const SET_IS_ONE_GRADE_FOR_ALL_SUB_TASKS =
  "SET_IS_ONE_GRADE_FOR_ALL_SUB_TASKS";
export const SET_IS_ANSWER_SIZE_LIMITATION = "SET_IS_ANSWER_SIZE_LIMITATION";
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
export const SET_TASK_NUMBER = "SET_TASK_NUMBER";
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER";
export const DELETE_QUESTION_ANSWER = "DELETE_QUESTION_ANSWER";
export const SET_QA_QUESTION = "SET_QA_QUESTION";
export const SET_QA_DESCRIPTION = "SET_QA_DESCRIPTION";
export const SET_RESPONSE_LIMITATION_FROM = "SET_RESPONSE_LIMITATION_FROM";
export const SET_RESPONSE_LIMITATION_TO = "SET_RESPONSE_LIMITATION_TO";
export const SET_WORD_LIST = "SET_WORD_LIST";
export const ADD_WORD = "ADD_WORD";
export const DELETE_WORD = "DELETE_WORD";
export const SET_WORD = "SET_WORD";
export const SET_WELCOME_PAGE_IMG_URL = "SET_WELCOME_PAGE_IMG_URL";

export const setInitialState = () => ({
  type: SET_INITIAL_STATE,
});

export const setTestProps = (_id, name) => ({
  type: SET_TEST_PROPS,
  payload: { _id, name },
});

export const setTestName = (name) => ({
  type: SET_TEST_NAME,
  payload: name,
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

export const setIsAnswerSizeLimited = () => ({
  type: SET_IS_ANSWER_SIZE_LIMITATION,
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
  radioButtonTaskIndex,
  radioButtonTaskOptionIndex,
  payload: option,
});

export const setRadioButtonTaskOptionMark = (
  mark,
  radioButtonTaskIndex,
  radioButtonTaskOptionIndex,
  isHaveMarks
) => ({
  type: SET_RADIO_BUTTON_TASK_OPTION_MARK,
  radioButtonTaskIndex,
  radioButtonTaskOptionIndex,
  payload: mark,
  isHaveMarks,
});

export const removeRadioButtonTaskOption = (
  radioButtonTaskIndex,
  radioButtonTaskOptionIndex,
  isHaveMarks
) => ({
  type: REMOVE_RADIO_BUTTON_TASK_OPTION,
  radioButtonTaskIndex,
  radioButtonTaskOptionIndex,
  isHaveMarks,
});

export const removeRadioButtonTask = (radioButtonTaskIndex) => ({
  type: REMOVE_RADIO_BUTTON_TASK,
  radioButtonTaskIndex,
});

export const setTaskNumber = (task_number) => ({
  type: SET_TASK_NUMBER,
  payload: task_number,
});

export const addQustionAnswer = () => ({
  type: ADD_QUESTION_ANSWER,
});

export const deleteQustionAnswer = (index) => ({
  type: DELETE_QUESTION_ANSWER,
  index,
});

export const setQAQuestion = (question, index) => ({
  type: SET_QA_QUESTION,
  payload: question,
  index,
});

export const setQADescription = (description, index) => ({
  type: SET_QA_DESCRIPTION,
  payload: description,
  index,
});

export const setGlobalResponseLimitationFrom = (number) => ({
  type: SET_RESPONSE_LIMITATION_FROM,
  payload: number,
});

export const setGlobalResponseLimitationTo = (number) => ({
  type: SET_RESPONSE_LIMITATION_TO,
  payload: number,
});

export const setWordList = (wordList) => ({
  type: SET_WORD_LIST,
  payload: wordList,
});

export const addWord = () => ({
  type: ADD_WORD,
});

export const deleteWord = (index) => ({
  type: DELETE_WORD,
  index,
});

export const setWord = (word, index) => ({
  type: SET_WORD,
  payload: word,
  index,
});

export const setWelcomePageImgUrl = (imgUrl) => ({
  type: SET_WELCOME_PAGE_IMG_URL,
  payload: imgUrl,
});
