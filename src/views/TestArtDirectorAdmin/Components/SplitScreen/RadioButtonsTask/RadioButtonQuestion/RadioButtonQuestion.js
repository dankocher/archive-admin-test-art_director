import "./RadioButtonQuestion.scss";

import React, { useState } from "react";

import DeleteButton from "../../../DeleteButton/DeleteButton";
import TextArea from "../../../TextArea/TextArea";
import RadioButtonAnswers from "./RadioButtonAnswers/RadioButtonAnswers";

function RadioButtonQuestion() {
  const [isHoveredQuestion, setIsHoveredQuestion] = useState(false);

  return (
    <div
      className="container--radioButtonQuestion"
      onMouseEnter={() => setIsHoveredQuestion(true)}
      onMouseLeave={() => setIsHoveredQuestion(false)}
    >
      <div className="container-question-radioButtonQuestion">
        <TextArea className="input" />
        <div className={"trash-button--radioButtonQuestion"}>
          {isHoveredQuestion ? <DeleteButton /> : null}
        </div>
      </div>
      <RadioButtonAnswers />
      <button className="hidden-button input add-question--RadioButtonQuestion">
        Добавить группу радиобаттанов
      </button>
    </div>
  );
}

export default RadioButtonQuestion;
