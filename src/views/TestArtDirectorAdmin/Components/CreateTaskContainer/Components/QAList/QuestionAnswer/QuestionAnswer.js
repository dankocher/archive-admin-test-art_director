import "./QuestionAnswer.scss";
import React from "react";

import TextArea from "../../../../TextArea/TextArea";
import DeleteButton from "../../../../DeleteButton/DeleteButton";

function QuestionAnswer() {
  return (
    <div className="container--QuestionAnswer">
      <div className="textarea-grid--QuestionAnswer">
        <span>2</span>
        <TextArea className="input" maxLength={80} />
        <TextArea className="input" maxLength={500} rows={6} />
      </div>
      <div className="button-grid--QuestionAnswer">
        <DeleteButton />
      </div>
    </div>
  );
}

export default QuestionAnswer;
