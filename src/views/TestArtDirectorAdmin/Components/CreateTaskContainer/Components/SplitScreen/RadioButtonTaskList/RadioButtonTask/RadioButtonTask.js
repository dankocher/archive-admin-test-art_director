import styles from "./RadioButtonTask.module.scss";
import React from "react";
import { useDispatch } from "react-redux";

import { sortableHandle } from "react-sortable-hoc";

import { setRadioButtonTaskQuestion } from "../../../../../../../../redux/actions";

import { removeRadioButtonTaskThunk } from "../../../../../../../../thunks/removeRadioButtonTaskThunk";

import DeleteButton from "../../../../../DeleteButton/DeleteButton";
import TextArea from "../../../../../TextArea/TextArea";
import DragButton from "../../../../../DragButton/DragButton";
import RadioButtonOptionList from "./RadioButtonOptionList/RadioButtonOptionList";

const DragHandle = sortableHandle(() => <DragButton />);

function RadioButtonTask({
	question,
	radioButtonOptionList,
	index,
	addNewTask,
}) {
	const dispatch = useDispatch();

	const handlerOnBlurQuestion = (text) => {
		dispatch(setRadioButtonTaskQuestion(text, index));
	};

	const handlerOnClickRemoveBtn = () => {
		dispatch(removeRadioButtonTaskThunk(index, addNewTask));
	};

	return (
		<>
			<div className={styles.container}>
				<div className={styles.container__question}>
					<div className={styles.container__question__drugBtnWrapper}>
						<DragHandle />
					</div>

					<TextArea
						className="input"
						value={question}
						onBlur={handlerOnBlurQuestion}
					/>
					<div className={styles.container__question__trashBtnWrapper}>
						<DeleteButton onClick={() => handlerOnClickRemoveBtn()} />
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
