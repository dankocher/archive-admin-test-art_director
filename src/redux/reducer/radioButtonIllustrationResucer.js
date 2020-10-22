import { SET_CHOOSEN_IMG_GRID_ROW_ID } from "../actions";

const initialState = { selectedImgRow: null };

function radioButtonIllustrationResucer(state = initialState, action) {
	switch (action.type) {
		case SET_CHOOSEN_IMG_GRID_ROW_ID:
			return { ...state, selectedImgRow: action.payload };
		default:
			return state;
	}
}

export default radioButtonIllustrationResucer;
