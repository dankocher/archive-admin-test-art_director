import update from "react-addons-update";
import {
  WELCOME_SCREEN,
  ILLUSTRATION_RADIO_BUTTONS,
} from "../../views/TestArtDirectorAdmin/helpers/taskTypes/taskTypes";

import {
  SET_TEST_PROPS,
  SET_TEST_NAME,
  SET_TASK_STATE,
  SET_TASK_NAME,
  SET_TASK_DESCRIPTION,
  SET_TASK_TYPE,
  SET_IS_TIME_CONSIDERED,
  SET_IS_TIME_DISPLAY_FOR_USER,
  SET_IS_ONE_GRADE_FOR_ALL_SUB_TASKS,
  ADD_RADIO_BUTTON_TASK,
  ADD_RADIO_BUTTON_OPTION,
  SET_RADIO_BUTTON_TASK_QUESTION,
  SET_RADIO_BUTTON_TASK_OPTION,
  SET_RADIO_BUTTON_TASK_OPTION_MARK,
  REMOVE_RADIO_BUTTON_TASK_OPTION,
  REMOVE_RADIO_BUTTON_TASK,
  SET_IS_HAVE_MARKS,
  SET_INITIAL_STATE,
} from "../actions";

const radioButtonOption = { option: "", mark: "" };

const radioButtonTask = {
  question: "",
  isHaveMarks: true,
  radioButtonOptionList: [radioButtonOption],
};

const initialState = {
  _id: "",
  name: "",
  isUpdatedLocally: false,
  task: {
    _id: "",
    tt_id: "",
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
      //radioButtonTaskList: [radioButtonTask],
    },
  },
};

const setDataOfType = (type) => {
  switch (type) {
    case WELCOME_SCREEN:
      return {};
    case ILLUSTRATION_RADIO_BUTTONS:
      return { radioButtonTaskList: [radioButtonTask] };
    default:
      return {};
  }
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TEST_PROPS:
      return {
        ...state,
        ...action.payload,
      };
    case SET_TEST_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_TASK_STATE:
      return {
        ...state,
        isUpdatedLocally: false,
        task: { ...initialState.task, ...action.payload },
      };
    case SET_INITIAL_STATE:
      return { ...state, task: { ...initialState.task } };
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
      const data = setDataOfType(action.payload);
      return update(state, {
        task: {
          type: {
            $set: action.payload,
          },
          data: {
            $set: data,
          },
        },
      });
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
    case ADD_RADIO_BUTTON_TASK:
      return update(state, {
        task: {
          data: {
            radioButtonTaskList: { $push: [radioButtonTask] },
          },
        },
      });
    case ADD_RADIO_BUTTON_OPTION:
      return update(state, {
        task: {
          data: {
            radioButtonTaskList: {
              [action.payload]: {
                isHaveMarks: { $set: false },
                radioButtonOptionList: { $push: [radioButtonOption] },
              },
            },
          },
        },
      });
    case SET_RADIO_BUTTON_TASK_QUESTION:
      return update(state, {
        task: {
          data: {
            radioButtonTaskList: {
              [action.index]: { question: { $set: action.payload } },
            },
          },
        },
      });

    case SET_RADIO_BUTTON_TASK_OPTION:
      return update(state, {
        task: {
          data: {
            radioButtonTaskList: {
              [action.radioButtonTaskIndex]: {
                radioButtonOptionList: {
                  [action.radioButtonTaskOptionIndex]: {
                    option: { $set: action.payload },
                  },
                },
              },
            },
          },
        },
      });
    case SET_RADIO_BUTTON_TASK_OPTION_MARK:
      return update(state, {
        task: {
          data: {
            radioButtonTaskList: {
              [action.radioButtonTaskIndex]: {
                isHaveMarks: { $set: action.isHaveMarks },
                radioButtonOptionList: {
                  [action.radioButtonTaskOptionIndex]: {
                    mark: { $set: action.payload },
                  },
                },
              },
            },
          },
        },
      });
    case REMOVE_RADIO_BUTTON_TASK_OPTION:
      return update(state, {
        task: {
          data: {
            radioButtonTaskList: {
              [action.radioButtonTaskIndex]: {
                isHaveMarks: { $set: action.isHaveMarks },
                radioButtonOptionList: {
                  $splice: [[action.radioButtonTaskOptionIndex, 1]],
                },
              },
            },
          },
        },
      });
    case REMOVE_RADIO_BUTTON_TASK:
      return update(state, {
        task: {
          data: {
            radioButtonTaskList: {
              $splice: [[action.radioButtonTaskIndex, 1]],
            },
          },
        },
      });
    // case SET_IS_HAVE_MARKS:
    //   return update(state, {
    //     task: {
    //       data: {
    //         radioButtonTaskList: {
    //           [action.radioButtonTaskIndex]: {
    //             isHaveMarks: { $set: action.payload },
    //           },
    //         },
    //       },
    //     },
    //   });
    default:
      return state;
  }
}

export default rootReducer;
