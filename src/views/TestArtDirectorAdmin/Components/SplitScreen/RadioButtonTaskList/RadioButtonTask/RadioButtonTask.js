import "./RadioButtonTask.scss";

import React, { useState } from "react";

import DeleteButton from "../../../DeleteButton/DeleteButton";
import TextArea from "../../../TextArea/TextArea";
import RadioButtonOptionList from "./RadioButtonOptionList/RadioButtonOptionList";

function RadioButtonTask({ question, radioButtonOptionList, index }) {
  const [isHoveredQuestion, setIsHoveredQuestion] = useState(false);

  return (
    <>
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

        <RadioButtonOptionList
          radioButtonOptionList={radioButtonOptionList}
          index={index}
        />
      </div>
    </>
  );
}

export default RadioButtonTask;
