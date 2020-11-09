import styles from "./RadioButtonOptionList.module.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import arrayMove from "array-move";

import { sortableContainer, sortableElement } from "react-sortable-hoc";

import { setRadionButtonOptionList } from "../../../../../../../../../redux/actions";
import { addRadioButtonOptionThunk } from "../../../../../../../../../thunks/addRadioButtonOptionThunk";

import RadioButtonOption from "./RadioButtonOption/RadioButtonOption";

const SortableContainer = sortableContainer(({ children }) => {
	return <div className={styles.container}>{children}</div>;
});

const SortableItem = sortableElement(
	({
		optionIndex,
		radioButtonTaskIndex,
		radioButtonOption,
		isHaveMark,
		addNewOption,
		radioButtonOptionList,
	}) => {
		return (
			<RadioButtonOption
				optionIndex={optionIndex}
				radioButtonTaskIndex={radioButtonTaskIndex}
				radioButtonOption={radioButtonOption}
				isHaveMark={isHaveMark}
				addNewOption={addNewOption}
				radioButtonOptionList={radioButtonOptionList}
			/>
		);
	}
);

function RadioButtonOptionList({ radioButtonOptionList, index }) {
	const dispatch = useDispatch();

	const isOneGradeForAllSubTasks = useSelector(
		(state) => state.reduxStorage.task.isOneGradeForAllSubTasks
	);

	const imgGrid = useSelector((state) => state.reduxStorage.task.data.imgGrid);
	const selectedImgRow = useSelector(
		(state) => state.radioButtonIllustrationResucer.selectedImgRow
	);

	const handlerAddOptionBtn = () => {
		dispatch(addRadioButtonOptionThunk(index));
	};

	const getIsHaveMark = (optionIndex) => {
		const option = radioButtonOptionList[optionIndex];
		if (radioButtonOptionList.length === 1) return true;
		else if (isOneGradeForAllSubTasks == null || isOneGradeForAllSubTasks) {
			if (option.score == null) {
				return false;
			}
			return option.score !== "";
		} else {
			if (imgGrid === null || imgGrid.length === 0) return true;
			else if (option.scoreList == null) return false;
			else if (
				option.scoreList[selectedImgRow] === "" ||
				option.scoreList[selectedImgRow] == null
			)
				return false;
			return true;
		}
	};

	const onSortEnd = ({ oldIndex, newIndex }) => {
		dispatch(
			setRadionButtonOptionList(
				arrayMove(radioButtonOptionList, oldIndex, newIndex),
				index
			)
		);
	};

	return (
		<SortableContainer onSortEnd={onSortEnd} useDragHandle>
			{radioButtonOptionList.map((element, key) => {
				const isHaveMark = getIsHaveMark(key);

				return (
					<SortableItem
						key={key}
						index={key}
						optionIndex={key}
						radioButtonTaskIndex={index}
						radioButtonOption={element}
						isHaveMark={isHaveMark}
						addNewOption={handlerAddOptionBtn}
						radioButtonOptionList={radioButtonOptionList}
					/>
				);
			})}
			<div className={styles.container__wrapperAddBtn}>
				<button
					onClick={handlerAddOptionBtn}
					className="btn-intpu small-grey-font"
				>
					Добавить вариант
				</button>
			</div>
		</SortableContainer>
	);
}

export default RadioButtonOptionList;
