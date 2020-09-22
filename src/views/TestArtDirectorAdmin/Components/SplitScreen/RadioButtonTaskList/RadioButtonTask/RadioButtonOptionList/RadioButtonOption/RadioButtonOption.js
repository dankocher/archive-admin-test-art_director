//import "./RadioButtonOption.scss";

import React, { useState, useEffect } from "react";
//import { useEffect } from "react-redux";

import TextArea from "../../../../../TextArea/TextArea";
import DeleteButton from "../../../../../DeleteButton/DeleteButton";

function RadioButtonOption({ option, mark }) {
  const [isHoveredOption, setIsHoveredOption] = useState(false);
  const [answerScore, setAnswerScore] = useState("");

  useEffect(() => {
    setAnswerScore(mark);
  }, [mark]);

  const handlerAnswerScoreOnChange = (event) => {
    const number = event.target.validity.valid
      ? event.target.value
      : answerScore;
    if (
      number > 99 ||
      number < -99 ||
      number === "00" ||
      /^0\d/.test(number) ||
      number === "-0"
    ) {
      return;
    }
    setAnswerScore(number);
  };

  return (
    <div
      className="container-answer--RadioButtonAnswers"
      onMouseEnter={() => setIsHoveredOption(true)}
      onMouseLeave={() => setIsHoveredOption(false)}
    >
      <TextArea className="input" value={option} />
      <div className="wrapper-centred--RadioButtonAnswers">
        <input
          type="tel"
          pattern="^[-\d]\d?\d?"
          className="input"
          value={answerScore}
          onChange={handlerAnswerScoreOnChange}
        />
      </div>

      <div className="wrapper-centred--RadioButtonAnswers">
        {isHoveredOption ? <DeleteButton /> : null}
      </div>
    </div>
  );
}

export default RadioButtonOption;
