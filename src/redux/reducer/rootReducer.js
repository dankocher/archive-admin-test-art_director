import update from "react-addons-update";

import {
  SET_TASK_STATE,
  SET_TASK_NAME,
  SET_TASK_DESCRIPTION,
  SET_TASK_TYPE,
  SET_IS_TIME_CONSIDERED,
  SET_IS_TIME_DISPLAY_FOR_USER,
  SET_IS_ONE_GRADE_FOR_ALL_SUB_TASKS,
  SET_RADIO_BUTTON_QUESTION,
  ADD_GROUP_RADIO_BUTTONS,
  ADD_RADIO_BUTTON_OPTION,
} from "../actions";

const radioButtonOption = { option: "asd", mark: "12" };

const radioButtonTask = {
  question: "",
  radioButtonOptionList: [radioButtonOption],
};

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
    data: {
      radioButtonTaskList: [radioButtonTask],
    },
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
    case ADD_GROUP_RADIO_BUTTONS:
      return update(state, {
        task: {
          data: {
            radioButtonTaskList: { $push: [radioButtonTask] },
          },
        },
      });

    // return {
    //   ...state,
    //   task: {
    //     ...state.task,
    //     data: {
    //       ...state.task.data,
    //       radioButtonQuestions: [
    //         ...state.task.data.radioButtonQuestions,
    //         {
    //           question: "new",
    //           radioButtonAnswer: [{ option: "123", mark: "-10" }],
    //         },
    //       ],
    //     },
    //   },
    // };
    case ADD_RADIO_BUTTON_OPTION:
      return update(state, {
        task: {
          data: {
            radioButtonTaskList: {
              [action.payload]: {
                radioButtonOptionList: { $push: [radioButtonOption] },
              },
            },
          },
        },
      });
    default:
      return state;
  }
}

export default rootReducer;
