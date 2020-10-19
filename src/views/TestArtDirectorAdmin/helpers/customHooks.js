import { useSelector } from "react-redux";

export const useGetIsHaveMarks = (radioButtonTaskList) => {
  const radioButtonTaskListState = useSelector(
    (state) => state.reduxStorage.task.data.radioButtonTaskList
  );
  if (radioButtonTaskList === undefined) {
    radioButtonTaskList = radioButtonTaskListState;
  }

  let isHaveMarks = true;
  if (radioButtonTaskList === undefined) return isHaveMarks;

  radioButtonTaskList.forEach((element) => {
    if (element.isHaveMarks === false) return (isHaveMarks = false);
  });
  return isHaveMarks;
};
