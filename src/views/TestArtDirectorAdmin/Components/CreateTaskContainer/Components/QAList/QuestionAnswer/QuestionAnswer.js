import styles from "./QuestionAnswer.module.scss";
import React from "react";
import { useDispatch } from "react-redux";

import { sortableHandle } from "react-sortable-hoc";

import {
  setQAQuestion,
  setQADescription,
} from "../../../../../../../redux/actions";

import TextArea from "../../../../TextArea/TextArea";
import DeleteButton from "../../../../DeleteButton/DeleteButton";
import DrugButton from "../../../../DragButton/DragButton";

// export const DragHandle = sortableHandle(() => a);

function QuestionAnswer({ index, deleteQAHandler, question, description }) {
  const dispatch = useDispatch();

  const saveQuestionHandler = (text) => {
    dispatch(setQAQuestion(text, index));
  };

  const saveDescriptionHandler = (text) => {
    dispatch(setQADescription(text, index));
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__textareaGrid}>
        <TextArea
          className="input"
          maxLength={80}
          value={question}
          onBlur={saveQuestionHandler}
        />
        <TextArea
          className="input"
          maxLength={500}
          rows={6}
          value={description}
          onBlur={saveDescriptionHandler}
        />
        <span className="subTasks-numbers-font">{index + 1}</span>
      </div>
      <div className={styles.buttonGrid}>
        <DeleteButton onClick={() => deleteQAHandler(index)} />
      </div>
      <div className={styles.container__textareaGrid__container_drugBtn}>
        <DrugButton />
      </div>
    </div>
  );
}

export default QuestionAnswer;
