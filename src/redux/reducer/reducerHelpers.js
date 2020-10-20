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
