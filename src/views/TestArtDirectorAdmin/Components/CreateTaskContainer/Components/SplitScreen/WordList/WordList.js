import styles from "./WordList.module.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";

import {
	addWord,
	deleteWord,
	setWordList,
} from "../../../../../../../redux/actions";

import Word from "./Word/Word";

const SortableContainer = sortableContainer(({ children }) => {
	return <React.Fragment>{children}</React.Fragment>;
});

const SortableItem = sortableElement(
	({ localIndex, value, deleteGlobalWordHendle }) => {
		return (
			<Word
				index={localIndex}
				value={value}
				deleteGlobalWordHendle={deleteGlobalWordHendle}
			/>
		);
	}
);

function WordList() {
	const wordList = useSelector(
		(state) => state.reduxStorage.task.data.wordList
	);
	const dispatch = useDispatch();

	const addWordHendle = () => {
		dispatch(addWord());
	};

	const deleteGlobalWordHendle = (index) => {
		dispatch(deleteWord(index));
		if (wordList.length === 1) addWordHendle();
	};

	const onSortEnd = ({ oldIndex, newIndex }) => {
		dispatch(setWordList(arrayMove(wordList, oldIndex, newIndex)));
	};

	return (
		<>
			<SortableContainer
				onSortEnd={onSortEnd}
				getContainer={() =>
					document.getElementById("rightSideBodyContainerSplitScreen")
				}
				useDragHandle
			>
				{wordList?.map((element, index) => {
					return (
						<SortableItem
							key={`item-${index}`}
							index={index}
							localIndex={index}
							value={element.word}
							deleteGlobalWordHendle={deleteGlobalWordHendle}
						/>
					);
				})}
			</SortableContainer>
			<div className={styles.wrapper}>
				<button className={"btn-intpu small-grey-font"} onClick={addWordHendle}>
					Добавить слово
				</button>
			</div>
		</>
	);
}

export default WordList;
