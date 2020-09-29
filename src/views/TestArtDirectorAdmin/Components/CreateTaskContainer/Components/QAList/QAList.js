import "./QAList.scss";
import React from "react";

import QuestionAnswer from "./QuestionAnswer/QuestionAnswer";

const arr = [1];

function QAList() {
  return (
    <>
      {arr.map((element) => (
        <QuestionAnswer />
      ))}
      <div className="container--QuestionAnswer">
        <button
          className="hidden-button input btn-add--QuestionAnswer"
          // onClick={handlerAddGroupRadioButtons}
        >
          Добавить группу радиобаттанов
        </button>
      </div>
    </>
  );
}

export default QAList;
