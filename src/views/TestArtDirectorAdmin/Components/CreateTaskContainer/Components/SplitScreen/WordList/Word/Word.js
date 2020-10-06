import styles from "./Word.module.scss";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { sortableHandle } from "react-sortable-hoc";

import { setWord } from "../../../../../../../../redux/actions";

import DeleteButton from "../../../../../DeleteButton/DeleteButton";
import DragButton from "../../../../../DragButton/DragButton";

export const DragHandle = sortableHandle(() => <DragButton />);

function Word({ index, value, deleteGlobalWordHendle }) {
  const dispatch = useDispatch();
  const [localWord, setLocalWord] = useState("");

  useEffect(() => {
    setLocalWord(value);
  }, [value]);

  const setLocalWordHandle = (event) => {
    const text = event.target.value;
    if (text.length >= 36) return;
    setLocalWord(text);
    // dispatch(setWord());
  };

  const setGlobalWordHandle = () => {
    console.log(localWord);
    if (value === localWord) return;
    dispatch(setWord(localWord, index));
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__textareaGrid}>
        <div className={styles.container__textareaGrid__lefContainer}>
          <span className="subTasks-numbers-font">{index + 1}</span>
          <DragHandle />
        </div>

        <input
          className="input"
          value={localWord}
          onChange={setLocalWordHandle}
          onBlur={setGlobalWordHandle}
        />
        <div className={styles.container__textareaGrid__btn_wrapper}>
          <DeleteButton onClick={() => deleteGlobalWordHendle(index)} />
        </div>
      </div>
    </div>
  );
}

export default Word;
