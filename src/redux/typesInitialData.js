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

// export const imgGrid = {
// 	imgRow: [{ imgCollum: [] }],
// };

export const imgGrid = { imgGrid: [] };
export const img = { loading: true, name: "", error: false };
// export const imgCollum = {
// 	imgCollum: [],
// };
