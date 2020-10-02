import styles from "./WordList.module.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addWord, deleteWord } from "../../../../../../../redux/actions";

import Word from "./Word/Word";

function WordList() {
	const wordList = useSelector((state) => state.task.data.wordList);
	const dispatch = useDispatch();

	const addWordHendle = () => {
		dispatch(addWord());
	};

	const deleteGlobalWordHendle = (index) => {
		if (wordList.length === 1) addWordHendle();
		dispatch(deleteWord(index));
	};

	return (
		<>
			{wordList?.map((element, key) => (
				<Word
					key={key}
					index={key}
					value={element}
					deleteGlobalWordHendle={deleteGlobalWordHendle}
				/>
			))}
			<div className={styles.wrapper}>
				<button className={"hidden-button input"} onClick={addWordHendle}>
					Добавить группу радиобаттанов
				</button>
			</div>
		</>
	);
}

export default WordList;
