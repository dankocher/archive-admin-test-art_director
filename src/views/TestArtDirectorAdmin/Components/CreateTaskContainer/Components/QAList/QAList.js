import styles from "./QAList.module.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortableContainer, sortableElement } from "react-sortable-hoc";

import {
	addQustionAnswer,
	deleteQustionAnswer,
	setSortedQAList,
} from "../../../../../../redux/actions";

import QuestionAnswer from "./QuestionAnswer/QuestionAnswer";

const SortableContainer = sortableContainer(({ children }) => {
	return <React.Fragment>{children}</React.Fragment>;
});

const SortableItem = sortableElement(
	({ localIndex, deleteQAHandler, question, description }) => {
		return (
			<QuestionAnswer
				index={localIndex}
				deleteQAHandler={deleteQAHandler}
				question={question}
				description={description}
			/>
		);
	}
);

function QAList() {
	const dispatch = useDispatch();

	const qaList = useSelector(
		(state) => state.reduxStorage.task.data.questionAnswerList
	);

	const addQAHandler = () => {
		dispatch(addQustionAnswer());
	};

	const deleteQAHandler = (index) => {
		dispatch(deleteQustionAnswer(index));
		if (qaList.length === 1) addQAHandler();
	};

	const onSortEnd = ({ oldIndex, newIndex }) => {
		dispatch(setSortedQAList(oldIndex, newIndex));
	};

	return (
		<>
			<SortableContainer
				onSortEnd={onSortEnd}
				useDragHandle
				getContainer={() => document.getElementById("bodyBottomContainer")}
			>
				{qaList?.map((element, key) => (
					<SortableItem
						key={key}
						index={key}
						localIndex={key}
						deleteQAHandler={deleteQAHandler}
						question={element.question}
						description={element.description}
					/>
				))}
			</SortableContainer>
			<div className={styles.wrapper}>
				<button className={"btn-intpu small-grey-font"} onClick={addQAHandler}>
					Добавить вопрос
				</button>
			</div>
		</>
	);
}

export default QAList;
