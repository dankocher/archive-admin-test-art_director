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
	radioButtonOption,
	radioButtonTask,
	questionAnswer,
	questionAnswerData,
	wordsRadioButtons,
	imgGrid,
} from "../typesInitialData";

export const setDataOfType = (type) => {
	switch (type) {
		case WELCOME_SCREEN:
			return {};
		case ILLUSTRATION_RADIO_BUTTONS:
			return { radioButtonTaskList: [radioButtonTask] };
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

export const clearImgContainer = (state) => {
	const taskType = state.task.type;
	if (taskType === ILLUSTRATIONS_ANSWERS) {
		const imgGrid = state.task.data.imgGrid;
		for (const row of imgGrid) {
			for (const img of row) {
				const imgName = img.name;
				if (imgName !== "" && isString(imgName)) {
					deleteImgFromServer(imgName);
				}
			}
		}
	}
};
