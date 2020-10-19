import {SET_CHOOSEN_IMG_GRID_ROW} from "../actions";

const chosenImgRow = 1;

function radioButtonIllustrationResucer(state = chosenImgRow, action) {
  switch (action.type) {
    case SET_CHOOSEN_IMG_GRID_ROW:
      return action.payload;
    default:
      return state;
  }
}

export default radioButtonIllustrationResucer;
