import "./RadioButtonTaskList.scss";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { sortableContainer, sortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";

import { setRadionButtonTaskList } from "../../../../../../../redux/actions";
import { addRadioButtonTaskThunk } from "../../../../../../../thunks/addRadioButtonTaskThunk";

import RadioButtonTask from "./RadioButtonTask/RadioButtonTask";

const SortableContainer = sortableContainer(({ children }) => {
	return <React.Fragment>{children}</React.Fragment>;
});

const SortableItem = sortableElement(
	({ localIndex, question, radioButtonOptionList, addNewTask }) => {
		return (
			<RadioButtonTask
				index={localIndex}
				question={question}
				radioButtonOptionList={radioButtonOptionList}
				addNewTask={addNewTask}
			/>
		);
	}
);

function RadioButtonTaskList() {
	const dispatch = useDispatch();

	const radioButtonTaskList = useSelector(
		(state) => state.reduxStorage.task.data.radioButtonTaskList
	);

	const handlerAddGroupRadioButtons = () => {
		dispatch(addRadioButtonTaskThunk());
	};

	const onSortEnd = ({ oldIndex, newIndex }) => {
		dispatch(
			setRadionButtonTaskList(
				arrayMove(radioButtonTaskList, oldIndex, newIndex)
			)
		);
	};

	return (
		<>
			<SortableContainer
				onSortEnd={onSortEnd}
				getContainer={() =>
					document.getElementById("leftSideBodyContainerSplitScreen")
				}
				useDragHandle
			>
				{radioButtonTaskList?.map((element, key) => (
					<SortableItem
						key={key}
						index={key}
						localIndex={key}
						question={element.question}
						radioButtonOptionList={element.radioButtonOptionList}
						addNewTask={handlerAddGroupRadioButtons}
					/>
				))}
			</SortableContainer>
			<button
				className="btn-intpu small-grey-font"
				onClick={handlerAddGroupRadioButtons}
			>
				Добавить группу радиобаттанов
			</button>
		</>
	);
}

export default RadioButtonTaskList;
