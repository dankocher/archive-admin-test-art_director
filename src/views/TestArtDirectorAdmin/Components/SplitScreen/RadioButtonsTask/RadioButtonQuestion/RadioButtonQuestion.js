import "./RadioButtonQuestion.scss";

import React, { useState } from "react";
import { useSelector } from "react-redux";

import DeleteButton from "../../../DeleteButton/DeleteButton";
import TextArea from "../../../TextArea/TextArea";
import RadioButtonOptions from "./RadioButtonOptions/RadioButtonOptions";

function RadioButtonQuestion({ question, radioButtonList }) {
  const [isHoveredQuestion, setIsHoveredQuestion] = useState(false);

  return (
    <div
      className="container--radioButtonQuestion"
      onMouseEnter={() => setIsHoveredQuestion(true)}
      onMouseLeave={() => setIsHoveredQuestion(false)}
    >
      <div className="container-question-radioButtonQuestion">
        <TextArea className="input" value={question} />
        <div className={"trash-button--radioButtonQuestion"}>
          {isHoveredQuestion ? <DeleteButton /> : null}
        </div>
      </div>

      <RadioButtonOptions radioButtonList={radioButtonList} />

      <button className="hidden-button input add-question--RadioButtonQuestion">
        Добавить группу радиобаттанов
      </button>
    </div>
  );
}

export default RadioButtonQuestion;
