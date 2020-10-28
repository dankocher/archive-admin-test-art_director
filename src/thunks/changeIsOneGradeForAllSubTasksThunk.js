import {
  setIsOneGradeForAllSubTasks,
  setSelectedRowIdImgGrid,
  deleteRadioButtonTaskOptionScores,
} from "../redux/actions";

import { setFirstImgRowId } from "./setFirstImgRowId";
import { setUnfilledScoreCounterToRadioButtonIllustrationThunk } from "./setUnfilledScoreCounterRadioButtonIllustrationThunk";

export const changeIsOneGradeForAllSubTasksThunk = () => {
  return (dispatch, getState) => {
    const state = getState();
    const isOneGradeForAllSubTasks =
      state.reduxStorage.task.isOneGradeForAllSubTasks;
    const imgGrid = state.reduxStorage.task.data.imgGrid;

    dispatch(setIsOneGradeForAllSubTasks());
    dispatch(deleteRadioButtonTaskOptionScores());
    if (isOneGradeForAllSubTasks) {
      dispatch(setFirstImgRowId());
      for (const rowIndex of imgGrid.keys()) {
        const imgRowId = imgGrid[rowIndex].id;
        dispatch(
          setUnfilledScoreCounterToRadioButtonIllustrationThunk(
            imgRowId,
            rowIndex
          )
        );
      }
    } else {
      dispatch(setSelectedRowIdImgGrid(null));
    }
  };
};
