import {
	WELCOME_SCREEN,
	ILLUSTRATION_RADIO_BUTTONS,
	ILLUSTRATIONS_ANSWERS,
	QUSETION_ANSWER,
	WORDS_RADIO_BUTTONS,
} from "./taskTypes";

const taskTypeEnum = Object.freeze({
	[WELCOME_SCREEN]: "Экран приветствия",
	[ILLUSTRATION_RADIO_BUTTONS]: "Иллюстрации и радиобаттоны",
	[ILLUSTRATIONS_ANSWERS]: "Иллюстрации и ответы",
	[WORDS_RADIO_BUTTONS]: "Слова и радиобаттоны",
	[QUSETION_ANSWER]: "Вопросы и ответы",
});

const getWelcomeScreenLabel = () => {
	return taskTypeEnum["welcome-screen"];
};

const isWelcomeScreen = (type) => {
	return type === WELCOME_SCREEN;
};

export { taskTypeEnum, isWelcomeScreen, getWelcomeScreenLabel };
