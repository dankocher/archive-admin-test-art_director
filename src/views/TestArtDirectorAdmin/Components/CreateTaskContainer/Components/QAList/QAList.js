import styles from "./QAList.module.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addQustionAnswer,
  deleteQustionAnswer,
} from "../../../../../../redux/actions";

import QuestionAnswer from "./QuestionAnswer/QuestionAnswer";

function QAList() {
  const dispatch = useDispatch();

  const qaList = useSelector((state) => state.reduxStorage.task.data.questionAnswerList);

  const addQAHandler = () => {
    dispatch(addQustionAnswer());
  };

  const deleteQAHandler = (index) => {
    if (qaList.length === 1) addQAHandler();
    dispatch(deleteQustionAnswer(index));
  };

  return (
    <>
      {qaList?.map((element, key) => (
        <QuestionAnswer
          key={key}
          index={key}
          deleteQAHandler={deleteQAHandler}
          question={element.question}
          description={element.description}
        />
      ))}
      <div className={styles.wrapper}>
        <button className={"btn-intpu small-grey-font"} onClick={addQAHandler}>
          Добавить вопрос
        </button>
      </div>
    </>
  );
}

export default QAList;
