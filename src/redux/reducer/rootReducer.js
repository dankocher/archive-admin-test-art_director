import update from "react-addons-update";
import {
	setDataOfType,
	clearImgContainer,
	getSortedImgGridRows,
	getSortedRowInImgGrid,
} from "./reducerHelpers";

import {
	radioButtonOption,
	radioButtonTask,
	questionAnswer,
} from "../typesInitialData";

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
	SET_IS_ANSWER_SIZE_LIMITATION,
	ADD_RADIO_BUTTON_TASK,
	ADD_RADIO_BUTTON_OPTION,
	SET_RADIO_BUTTON_TASK_QUESTION,
	SET_RADIO_BUTTON_TASK_OPTION,
	SET_RADIO_BUTTON_TASK_OPTION_MARK,
	REMOVE_RADIO_BUTTON_TASK_OPTION,
	REMOVE_RADIO_BUTTON_TASK,
	SET_INITIAL_STATE,
	SET_TASK_NUMBER,
	ADD_QUESTION_ANSWER,
	DELETE_QUESTION_ANSWER,
	SET_QA_QUESTION,
	SET_QA_DESCRIPTION,
	SET_RESPONSE_LIMITATION_FROM,
	SET_RESPONSE_LIMITATION_TO,
	SET_WORD_LIST,
	ADD_WORD,
	DELETE_WORD,
	SET_WORD,
	SET_WELCOME_PAGE_IMG_URL,
	LOAD_ROW_IMG_TO_IMG_GRID,
	LOAD_COLUMN_IMG_TO_IMG_GRID,
	SET_IMG_TO_IMG_GRID_SUCCESS,
	SET_IMG_TO_IMG_GRID_ERROR,
	DELETE_IMG_FROM_IMG_GRID,
	SORT_IMG_GRID_ROWS,
	SORT_ROW_IN_IMG_GRID,
} from "../actions";

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
		data: {},
	},
};

const setLoadingImgsRow = (state, fileList) => {
	for (const file of fileList) {
		state = update(state, {
			task: {
				data: {
					imgGrid: {
						$push: [[{ loading: true, name: file, error: false }]],
					},
				},
			},
		});
	}
	return state;
};

const setLoadingImgsColumn = (state, action) => {
	for (const file of action.payload) {
		state = update(state, {
			task: {
				data: {
					imgGrid: {
						[action.indexRow]: {
							$push: [{ loading: true, name: file, error: false }],
						},
					},
				},
			},
		});
	}
	return state;
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
			clearImgContainer(state);
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
		case SET_IS_ANSWER_SIZE_LIMITATION:
			return update(state, {
				task: {
					data: {
						isAnswerSizeLimited: {
							$set: !state.task.data.isAnswerSizeLimited,
						},
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
		case SET_TASK_NUMBER:
			return update(state, {
				task: {
					task_number: { $set: action.payload },
				},
			});
		case ADD_QUESTION_ANSWER:
			return update(state, {
				task: {
					data: {
						questionAnswerList: {
							$push: [questionAnswer],
						},
					},
				},
			});
		case DELETE_QUESTION_ANSWER:
			return update(state, {
				task: {
					data: {
						questionAnswerList: {
							$splice: [[action.index, 1]],
						},
					},
				},
			});
		case SET_QA_QUESTION:
			return update(state, {
				task: {
					data: {
						questionAnswerList: {
							[action.index]: {
								question: {
									$set: action.payload,
								},
							},
						},
					},
				},
			});
		case SET_QA_DESCRIPTION:
			return update(state, {
				task: {
					data: {
						questionAnswerList: {
							[action.index]: {
								description: {
									$set: action.payload,
								},
							},
						},
					},
				},
			});
		case SET_RESPONSE_LIMITATION_FROM:
			return update(state, {
				task: {
					data: {
						responseLimitation: {
							from: {
								$set: action.payload,
							},
						},
					},
				},
			});
		case SET_RESPONSE_LIMITATION_TO:
			return update(state, {
				task: {
					data: {
						responseLimitation: {
							to: {
								$set: action.payload,
							},
						},
					},
				},
			});
		case SET_WORD_LIST:
			return update(state, {
				task: {
					data: {
						wordList: {
							$set: action.payload,
						},
					},
				},
			});
		case ADD_WORD:
			return update(state, {
				task: {
					data: {
						wordList: {
							$push: [""],
						},
					},
				},
			});
		case DELETE_WORD:
			return update(state, {
				task: {
					data: {
						wordList: {
							$splice: [[action.index, 1]],
						},
					},
				},
			});

		case SET_WORD:
			return update(state, {
				task: {
					data: {
						wordList: {
							[action.index]: {
								$set: action.payload,
							},
						},
					},
				},
			});
		case SET_WELCOME_PAGE_IMG_URL:
			return update(state, {
				task: {
					data: {
						imgUrl: {
							$set: action.payload,
						},
					},
				},
			});
		case LOAD_ROW_IMG_TO_IMG_GRID:
			return setLoadingImgsRow(state, action.payload);
		case LOAD_COLUMN_IMG_TO_IMG_GRID:
			return setLoadingImgsColumn(state, action);
		case SET_IMG_TO_IMG_GRID_SUCCESS:
			return update(state, {
				task: {
					data: {
						imgGrid: {
							[action.indexRow]: {
								[action.indexColumn]: {
									loading: {
										$set: false,
									},
									name: {
										$set: action.payload,
									},
								},
							},
						},
					},
				},
			});
		case SET_IMG_TO_IMG_GRID_ERROR:
			return update(state, {
				task: {
					data: {
						imgGrid: {
							[action.indexRow]: {
								[action.indexColumn]: {
									loading: {
										$set: false,
									},
									error: {
										$set: true,
									},
								},
							},
						},
					},
				},
			});
		case DELETE_IMG_FROM_IMG_GRID:
			if (state.task.data.imgGrid[action.indexRow].length === 1) {
				return update(state, {
					task: {
						data: {
							imgGrid: {
								$splice: [[action.indexRow, 1]],
							},
						},
					},
				});
			} else {
				return update(state, {
					task: {
						data: {
							imgGrid: {
								[action.indexRow]: {
									$splice: [[action.indexColumn, 1]],
								},
							},
						},
					},
				});
			}
		case SORT_IMG_GRID_ROWS:
			return update(state, {
				task: {
					data: {
						imgGrid: {
							$set: getSortedImgGridRows(state, action),
						},
					},
				},
			});
		case SORT_ROW_IN_IMG_GRID:
			return update(state, {
				task: {
					data: {
						imgGrid: {
							[action.indexRow]: {
								$set: getSortedRowInImgGrid(state, action),
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
