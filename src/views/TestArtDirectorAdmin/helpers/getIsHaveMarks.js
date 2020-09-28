export const getIsHaveMarks = (radioButtonOptionList, optionIndex) => {
  let isHaveMarks = true;
  if (radioButtonOptionList.length === 1) return isHaveMarks;
  radioButtonOptionList.forEach((element, key) => {
    if (key === optionIndex) return isHaveMarks;

    if (element.mark === "") isHaveMarks = false;
  });
  return isHaveMarks;
};
