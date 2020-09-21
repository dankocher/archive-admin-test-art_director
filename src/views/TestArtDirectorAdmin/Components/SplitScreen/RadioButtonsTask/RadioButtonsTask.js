import "./RadioButtonsTask.scss";

import React from "react";
import { useSelector } from "react-redux";

import RadioButtonQuestion from "./RadioButtonQuestion/RadioButtonQuestion";

function RadioButtonsTask() {
  const radioButtonsList = useSelector(
    (state) => state.task.data.radioButtonQuestions
  );

  return (
    <>
      {radioButtonsList.map((element, key) => (
        <RadioButtonQuestion
          key={key}
          question={element.question}
          radioButtonList={element.radioButtonAnswer}
        />
      ))}
    </>
  );
}

export default RadioButtonsTask;
