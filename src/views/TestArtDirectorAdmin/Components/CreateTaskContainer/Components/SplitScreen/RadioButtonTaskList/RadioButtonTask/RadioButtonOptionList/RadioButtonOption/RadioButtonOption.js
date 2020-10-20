import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  setRadioButtonTaskOption,
  setRadioButtonTaskOptionMark,
  removeRadioButtonTaskOption,
} from "../../../../../../../../../../redux/actions";

import { getIsHaveMarks } from "../../../../../../../../helpers/getIsHaveMarks";

import TextArea from "../../../../../../../TextArea/TextArea";
import DeleteButton from "../../../../../../../DeleteButton/DeleteButton";

function RadioButtonOption({
  option,
  mark,
  radioButtonTaskIndex,
  optionIndex,
  isHaveMark,
  optionListLength,
  addNewOption,
  radioButtonOptionList,
}) {
  const dispatch = useDispatch();
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

  const hadlerOnBlurOption = (text) => {
    dispatch(setRadioButtonTaskOption(text, radioButtonTaskIndex, optionIndex));
  };

  const handlerOnBlureMark = () => {
    const isHaveMarks =
      answerScore !== "" && getIsHaveMarks(radioButtonOptionList, optionIndex);

    console.log(isHaveMarks);

    dispatch(
      setRadioButtonTaskOptionMark(
        answerScore,
        radioButtonTaskIndex,
        optionIndex,
        isHaveMarks
      )
    );
  };

  const handlerOnClickRemoveBtn = () => {
    const isHaveMarks =
      optionListLength === 2
        ? true
        : getIsHaveMarks(radioButtonOptionList, optionIndex);
    dispatch(
      removeRadioButtonTaskOption(
        radioButtonTaskIndex,
        optionIndex,
        isHaveMarks
      )
    );
    if (optionListLength === 1) {
      addNewOption();
    }
  };

  return (
    <div
      className="container-answer--RadioButtonAnswers"
      onMouseEnter={() => setIsHoveredOption(true)}
      onMouseLeave={() => setIsHoveredOption(false)}
    >
      <TextArea className="input" value={option} onBlur={hadlerOnBlurOption} />
      <div className="wrapper-centred--RadioButtonAnswers">
        <input
          type="tel"
          pattern="^[-\d]\d?\d?"
          className={`input ${isHaveMark ? "" : "border-error"}`}
          value={answerScore}
          onChange={handlerAnswerScoreOnChange}
          onBlur={handlerOnBlureMark}
        />
      </div>

      <div className="wrapper-centred--RadioButtonAnswers">
        {isHoveredOption ? (
          <DeleteButton onClick={() => handlerOnClickRemoveBtn()} />
        ) : null}
      </div>
    </div>
  );
}

export default RadioButtonOption;
