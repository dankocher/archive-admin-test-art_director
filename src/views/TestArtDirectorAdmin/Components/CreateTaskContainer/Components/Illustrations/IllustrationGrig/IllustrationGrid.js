import styles from "./IllustrationGrid.module.scss";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sortableContainer, sortableElement } from "react-sortable-hoc";

import { sortImgGridRows } from "../../../../../../../redux/actions";

import { setFirstImgRowId } from "../../../../../../../thunks/setFirstImgRowId";

import IllustrationColumns from "./IllustrationColumns/IllustrationColumns";

const SortableContainer = sortableContainer(({ children }) => {
	return <div className={styles.container}>{children}</div>;
});

const SortableItem = sortableElement(({ imgRow, indexRow, setModalWindow }) => {
	return (
		<IllustrationColumns
			imgRow={imgRow}
			indexRow={indexRow}
			setModalWindow={setModalWindow}
		/>
	);
});

function IllustrationGrid({ setModalWindow }) {
	const dispatch = useDispatch();
	const imgGrid = useSelector((state) => state.reduxStorage.task.data.imgGrid);

	useEffect(() => {
		//tut dolshen bit thunk
		if (imgGrid.length === 0) return;
		dispatch(setFirstImgRowId());
	}, [dispatch]);

	const onSortEnd = ({ oldIndex, newIndex }) => {
		dispatch(sortImgGridRows(oldIndex, newIndex));
	};

	return (
		<SortableContainer onSortEnd={onSortEnd} useDragHandle>
			{imgGrid?.map((element, index) => {
				// console.log(element);
				return (
					<SortableItem
						key={`item-${index}`}
						index={index}
						imgRow={element}
						indexRow={index}
						setModalWindow={setModalWindow}
					/>
				);
			})}
		</SortableContainer>
	);
}

export default IllustrationGrid;
