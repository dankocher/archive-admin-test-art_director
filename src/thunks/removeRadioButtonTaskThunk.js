import { removeRadioButtonTask } from "../redux/actions";
import { decrementUnfilledScoreCounterFromImgGridRBTask } from "../redux/actions";

export const removeRadioButtonTaskThunk = (index, addNewTask) => {
  return (dispatch, getState) => {
    const state = getState();
    const isOneGradeForAllSubTasks =
      state.reduxStorage.task.isOneGradeForAllSubTasks;

    const radioButtonTaskListLength =
      state.reduxStorage.task.data.radioButtonTaskList.length;

    dispatch(removeRadioButtonTask(index));

    if (radioButtonTaskListLength === 1) {
      addNewTask();
    }

    if (isOneGradeForAllSubTasks) return;

    const radioButtonOptionList =
      state.reduxStorage.task.data.radioButtonTaskList[index]
        .radioButtonOptionList;

    let optionsCounter = radioButtonOptionList.length;
    let imgIdList;
    for (const radioButtonOption of radioButtonOptionList) {
      const scoreList = radioButtonOption.scoreList;
      if (scoreList != null) {
        for (const imgId of Object.keys(scoreList)) {
          if (scoreList[imgId] !== "") {
            if (imgIdList == null || !(imgId in imgIdList)) {
              imgIdList = { ...imgIdList, [imgId]: 1 };
            } else {
              imgIdList = { ...imgIdList, [imgId]: imgIdList[imgId] + 1 };
            }
          }
        }
      }
    }
    console.log(imgIdList);

    dispatch(
      decrementUnfilledScoreCounterFromImgGridRBTask(imgIdList, optionsCounter)
    );
  };
};
