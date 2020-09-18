import "./RadioButtonAnswers.scss";
import React, { useState } from "react";

import TextArea from "../../../../TextArea/TextArea";
import DeleteButton from "../../../../DeleteButton/DeleteButton";

function RadioButtonAnswers() {
  const [isHoveredAnswer, setIsHoveredAnswer] = useState(false);
  const [answerScore, setAnswerScore] = useState("");

  const handlerAnswerScoreOnChange = (event) => {
    const number = event.target.validity.valid
      ? event.target.value
      : answerScore;
    if (number > 99 || number < -99 || number === "00") {
      return;
    }
    setAnswerScore(number);
  };

  return (
    <div
      className="container--RadioButtonAnswers"
      onMouseEnter={() => setIsHoveredAnswer(true)}
      onMouseLeave={() => setIsHoveredAnswer(false)}
    >
      <div className="container-answer--RadioButtonAnswers">
        <TextArea className="input" />
        <div className="wrapper-centred--RadioButtonAnswers">
          <input
            type="tel"
            // pattern="/^-?\d*\.?\d+$/"
            pattern="^-?\d*\.?\d+$"
            className="input"
            value={answerScore}
            onChange={handlerAnswerScoreOnChange}
          />
        </div>

        <div className="wrapper-centred--RadioButtonAnswers">
          {isHoveredAnswer ? <DeleteButton /> : null}
        </div>
      </div>
      <div className="container-answer--RadioButtonAnswers">
        <button className="hidden-button input add-question--RadioButtonQuestion">
          Добавить вариант
        </button>
      </div>
    </div>
  );
}

export default RadioButtonAnswers;
