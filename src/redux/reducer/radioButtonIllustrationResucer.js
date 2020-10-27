import { getUnfilledScoreCounter } from "./reducerHelpers";

import {
	SET_CHOOSEN_IMG_GRID_ROW_ID,
	SET_UNFILLED_SCORE_COUNTER_RADIOBUTTON_ILLUSTRATION,
} from "../actions";

const initialState = { selectedImgRow: null };

function radioButtonIllustrationResucer(state = initialState, action) {
	switch (action.type) {
		case SET_CHOOSEN_IMG_GRID_ROW_ID:
			return { ...state, selectedImgRow: action.payload };
		case SET_UNFILLED_SCORE_COUNTER_RADIOBUTTON_ILLUSTRATION:
			return {
				...state,
				unfilledScoreCounter: {
					[action.imgRowId]: action.payload,
				},
			};
		default:
			return state;
	}
}

export default radioButtonIllustrationResucer;
