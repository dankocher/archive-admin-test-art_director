export const radioButtonOption = { option: "", mark: "" };

export const radioButtonTask = {
	question: "",
	isHaveMarks: true,
	radioButtonOptionList: [radioButtonOption],
};

export const questionAnswer = {
	question: "",
	description: "",
};

const responseLimitationOption = {
	isAnswerSizeLimited: false,
	responseLimitation: {
		from: "",
		to: "",
	},
};

export const questionAnswerData = {
	...responseLimitationOption,
	questionAnswerList: [questionAnswer],
};

export const wordsRadioButtons = {
	wordList: [""],
	radioButtonTaskList: [radioButtonTask],
};
