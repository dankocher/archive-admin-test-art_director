import update from "react-addons-update";
import arrayMove from "array-move";
import { isString } from "../../views/TestArtDirectorAdmin/helpers/isString";
import { deleteImgFromServer } from "../../views/TestArtDirectorAdmin/helpers/workWithApi";
import {
	WELCOME_SCREEN,
	ILLUSTRATION_RADIO_BUTTONS,
	QUSETION_ANSWER,
	WORDS_RADIO_BUTTONS,
	ILLUSTRATIONS_ANSWERS,
} from "../../views/TestArtDirectorAdmin/helpers/taskTypes/taskTypes";

import {
	radioButtonTask,
	questionAnswerData,
	wordsRadioButtons,
	imgGrid,
} from "../typesInitialData";

export const setDataOfType = (type) => {
	switch (type) {
		case WELCOME_SCREEN:
			return {};
		case ILLUSTRATION_RADIO_BUTTONS:
			return { radioButtonTaskList: [radioButtonTask], ...imgGrid };
		case ILLUSTRATIONS_ANSWERS:
			return imgGrid;
		case QUSETION_ANSWER:
			return questionAnswerData;
		case WORDS_RADIO_BUTTONS:
			return wordsRadioButtons;
		default:
			return {};
	}
};

export const deleteRadioButtonTaskOptionScoreFromScoreList = (
	state,
	action
) => {
	const radioButtonTaskList = state.task.data.radioButtonTaskList;
	const scoreKey = action.scoreKey;
	for (const RBTIndex of radioButtonTaskList.keys()) {
		for (const [RBOLIndex, option] of radioButtonTaskList[
			RBTIndex
		].radioButtonOptionList.entries()) {
			const scoreList = option.scoreList;
			// debugger;
			// console.log(scoreList);

			if (scoreList == null) continue;

			if (scoreList[scoreKey] == null) continue;

			const { [scoreKey]: value, ...newScoreList } = scoreList;

			state = update(state, {
				task: {
					data: {
						radioButtonTaskList: {
							[RBTIndex]: {
								radioButtonOptionList: {
									[RBOLIndex]: {
										scoreList: {
											$set: {
												...newScoreList,
											},
										},
									},
								},
							},
						},
					},
				},
			});
		}
	}
	console.log(state);
	return state;
};

export const deleteRadioButtonTaskOptionScoresRedux = (state) => {
	const radioButtonTaskList = state.task.data.radioButtonTaskList;
	console.log("ia tut mazaFAKA");
	for (const RBTIndex of radioButtonTaskList.keys()) {
		for (const [RBOLIndex, option] of radioButtonTaskList[
			RBTIndex
		].radioButtonOptionList.entries()) {
			const { score, scoreList, ...newOptin } = option;
			state = update(state, {
				task: {
					data: {
						radioButtonTaskList: {
							[RBTIndex]: {
								radioButtonOptionList: {
									[RBOLIndex]: { $set: newOptin },
								},
							},
						},
					},
				},
			});
		}
	}
	return state;
};

export const clearImgContainer = (state) => {
	const taskType = state.task.type;
	if (
		taskType !== ILLUSTRATIONS_ANSWERS &&
		taskType !== ILLUSTRATION_RADIO_BUTTONS
	) {
		return;
	}

	const imgGrid = state.task.data.imgGrid;
	for (const row of imgGrid) {
		for (const img of row.imgColumnList) {
			const imgName = img.name;
			if (imgName !== "" && isString(imgName)) {
				deleteImgFromServer(imgName);
			}
		}
	}
};

export const getSortedImgGridRows = (state, action) => {
	const imgGrid = state.task.data.imgGrid;
	return arrayMove(imgGrid, action.oldIndex, action.newIndex);
};

export const getSortedRowInImgGrid = (state, action) => {
	const imgRow = state.task.data.imgGrid[action.indexRow];
	return arrayMove(imgRow, action.oldIndex, action.newIndex);
};

export const getNextId = (array) => {
	if (array === undefined || array.length === 0) {
		return 0;
	} else {
		let max = array[0].id;
		for (const item of array) {
			max = item.id > max ? item.id : max;
		}
		return max + 1;
	}
};

export const decrementUnfilledScoreCounterFromImgGridRedux = (
	state,
	action
) => {
	const imgGrid = state.task.data.imgGrid;
	const listImgId = action.payload;

	for (const [rowIndex, imgRow] of imgGrid.entries()) {
		// debugger;
		if (
			listImgId == null ||
			listImgId.length === 0 ||
			listImgId[imgRow.id] == null
		) {
			state = decrementUnfilledScoreCounter(state, rowIndex, 1);
		}
	}
	return state;
};

const decrementUnfilledScoreCounter = (state, rowIndex, number) => {
	return update(state, {
		task: {
			data: {
				imgGrid: {
					[rowIndex]: {
						unfilledScoreCounter: {
							$apply: (unfilledScoreCounter) => unfilledScoreCounter - number,
						},
					},
				},
			},
		},
	});
};

export const incrementUnfilledScoreCounterFromImgGridRedux = (state) => {
	const imgGrid = state.task.data.imgGrid;

	for (const rowIndex of imgGrid.keys()) {
		state = update(state, {
			task: {
				data: {
					imgGrid: {
						[rowIndex]: {
							unfilledScoreCounter: {
								$apply: (unfilledScoreCounter) => unfilledScoreCounter + 1,
							},
						},
					},
				},
			},
		});
	}
	return state;
};

export const decrementUnfilledScoreCounterFromImgGridRBTaskRedux = (
	state,
	action
) => {
	const imgGrid = state.task.data.imgGrid;
	const listImgId = action.payload;
	const optionsCounter = action.optionsCounter;

	for (const [rowIndex, imgRow] of imgGrid.entries()) {
		if (
			listImgId == null ||
			listImgId.length === 0 ||
			listImgId[imgRow.id] == null
		) {
			state = decrementUnfilledScoreCounter(state, rowIndex, optionsCounter);
		} else {
			state = decrementUnfilledScoreCounter(
				state,
				rowIndex,
				optionsCounter - listImgId[imgRow.id]
			);
		}
	}
	return state;
};

export const setUnfilledScoreCounterToImgGridRedux = (state, action) => {
	const imgGrid = state.task.data.imgGrid;
	for (const rowIndex of imgGrid.keys()) {
		state = update(state, {
			task: {
				data: {
					imgGrid: {
						[rowIndex]: {
							unfilledScoreCounter: { $set: action.payload },
						},
					},
				},
			},
		});
	}
	return state;
};

export const setEmptyScoreCountersRedux = (state) => {
	const radioButtonTaskList = state.task.data.radioButtonTaskList;
	for (const [index, task] of radioButtonTaskList.entries()) {
		const optionListLength = task.radioButtonOptionList.length;
		state = update(state, {
			task: {
				data: {
					radioButtonTaskList: {
						[index]: {
							emptyScoreCounter: {
								$set: optionListLength,
							},
						},
					},
				},
			},
		});
	}
	return state;
};

export const getSortedList = (list, oldIndex, newIndex) => {
	return arrayMove(list, oldIndex, newIndex);
};
