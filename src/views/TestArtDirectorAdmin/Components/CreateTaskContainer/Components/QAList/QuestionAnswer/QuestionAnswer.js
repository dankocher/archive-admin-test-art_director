import styles from "./QuestionAnswer.module.scss";
import React from "react";
import {useDispatch} from "react-redux";

import {
	setQAQuestion,
	setQADescription,
} from "../../../../../../../redux/actions";

import TextArea from "../../../../TextArea/TextArea";
import DeleteButton from "../../../../DeleteButton/DeleteButton";

function QuestionAnswer({index, deleteQAHandler, question, description}) {
	const dispatch = useDispatch();

	const saveQuestionHandler = (text) => {
		console.log(index);
		dispatch(setQAQuestion(text, index));
	};

	const saveDescriptionHandler = (text) => {
		console.log(index);
		console.log(text);
		console.log("//////////");

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
		</div>
	);
}

export default QuestionAnswer;
