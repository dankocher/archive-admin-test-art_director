export const radioButtonOption = {
	id: 0,
	option: "",
	scoreList: {},
};

// const ImgANDRB = {
// 	1: [
// 		{
// 			rbOID: 1,
// 			markId: 1,
// 		},
// 	],
// };

// const score = {imgRowId:"",}
// const mark = { id: 0, mark: "" };

export const radioButtonTask = {
	id: 0,
	emptyScoreCounter: 1,
	question: "",
	radioButtonOptionList: [radioButtonOption],
};

// export const radioButtonTaskLists = [
//   { id: 0, radioButtonTaskList: [radioButtonTask] },
// ];

export const questionAnswer = {
	id: 0,
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

export const word = {
	id: 0,
	word: "",
};

export const wordsRadioButtons = {
	wordList: [word],
	radioButtonTaskList: [radioButtonTask],
};

export const imgGrid = {
	imgGrid: [],
};

// export const illustrationRadiobuttonsImgRow = {
//   imgColumns: [],
//   radioButtonListIndex: 0,
// };

export const img = { loading: true, name: "", error: false };
