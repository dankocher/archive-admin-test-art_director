import styles from "./IllustrationGrid.module.scss";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sortableContainer, sortableElement } from "react-sortable-hoc";

import { sortImgGridRows } from "../../../../../../../redux/actions";

import IllustrationColumns from "./IllustrationColumns/IllustrationColumns";

const SortableContainer = sortableContainer(({ children }) => {
	return <div className={styles.container}>{children}</div>;
});

const SortableItem = sortableElement(
	({ imgRowList, indexRow, setModalWindow }) => {
		return (
			<IllustrationColumns
				imgRowList={imgRowList}
				indexRow={indexRow}
				setModalWindow={setModalWindow}
			/>
		);
	}
);

function IllustrationGrid({ setModalWindow }) {
	const dispatch = useDispatch();
	const imgMatrix = useSelector((state) => state.task.data.imgGrid);

	const onSortEnd = ({ oldIndex, newIndex }) => {
		dispatch(sortImgGridRows(oldIndex, newIndex));
	};

	return (
		<SortableContainer onSortEnd={onSortEnd} useDragHandle>
			{imgMatrix?.map((element, index) => {
				// console.log(element);
				return (
					<SortableItem
						key={`item-${index}`}
						index={index}
						imgRowList={element}
						indexRow={index}
						setModalWindow={setModalWindow}
					/>
				);
			})}
		</SortableContainer>
	);
}

export default IllustrationGrid;
