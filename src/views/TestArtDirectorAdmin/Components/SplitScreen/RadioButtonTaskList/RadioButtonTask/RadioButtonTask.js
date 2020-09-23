import "./RadioButtonTask.scss";

import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  setRadioButtonTaskQuestion,
  removeRadioButtonTask,
} from "../../../../../../redux/actions";

import DeleteButton from "../../../DeleteButton/DeleteButton";
import TextArea from "../../../TextArea/TextArea";
import RadioButtonOptionList from "./RadioButtonOptionList/RadioButtonOptionList";

function RadioButtonTask({
  question,
  radioButtonOptionList,
  index,
  radioButtonTaskListLength,
  addNewTask,
}) {
  const dispatch = useDispatch();
  const [isHoveredQuestion, setIsHoveredQuestion] = useState(false);

  const handlerOnBlurQuestion = (text) => {
    dispatch(setRadioButtonTaskQuestion(text, index));
  };

  const handlerOnClickRemoveBtn = () => {
    if (radioButtonTaskListLength === 1) {
      addNewTask();
    }
    dispatch(removeRadioButtonTask(index));
  };

  return (
    <>
      <div
        className="container--radioButtonQuestion"
        onMouseEnter={() => setIsHoveredQuestion(true)}
        onMouseLeave={() => setIsHoveredQuestion(false)}
      >
        <div className="container-question-radioButtonQuestion">
          <TextArea
            className="input"
            value={question}
            onBlur={handlerOnBlurQuestion}
          />
          <div className={"trash-button--radioButtonQuestion"}>
            {isHoveredQuestion ? (
              <DeleteButton onClick={() => handlerOnClickRemoveBtn()} />
            ) : null}
          </div>
        </div>

        <RadioButtonOptionList
          radioButtonOptionList={radioButtonOptionList}
          index={index}
        />
      </div>
    </>
  );
}

export default RadioButtonTask;
