import styles from "./IllustrationColumns.module.scss";
import React from "react";
import { useDispatch } from "react-redux";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import { sortRowInImgGrid } from "../../../../../../../../redux/actions";

import addImgIconSmall from "../../../../../../utils/icons/add-img-icon-small";
import DragButton from "../../../../../DragButton/DragButton";
import Illustration from "./Illustration/Illustration";

import { sortableHandle } from "react-sortable-hoc";

const DragHandle = sortableHandle(() => <DragButton />);

const SortableContainer = sortableContainer(({ children }) => {
	return <div className={styles.grid__imgRowContainer}>{children}</div>;
});

const SortableItem = sortableElement(({ imgState, indexRow, indexColumn }) => {
	// console.log({ localIndex, value, deleteGlobalWordHendle });
	return (
		<Illustration
			imgState={imgState}
			indexRow={indexRow}
			indexColumn={indexColumn}
		/>
	);
});

function IllustrationColumns({ imgRowList, indexRow, setModalWindow }) {
	const dispatch = useDispatch();

	const onSortEnd = ({ oldIndex, newIndex }) => {
		dispatch(sortRowInImgGrid(indexRow, oldIndex, newIndex));
	};

	return (
		<div className={styles.grid}>
			<div className={styles.grid__sort_container}>
				<div>
					<span className="subTasks-numbers-font">{indexRow + 1}</span>
					<DragHandle />
				</div>
			</div>
			<SortableContainer
				onSortEnd={onSortEnd}
				lockAxis="x"
				axis="x"
				pressDelay={200}
			>
				{imgRowList?.map((element, indexColumn) => (
					<SortableItem
						key={indexColumn}
						index={indexColumn}
						imgState={element}
						indexRow={indexRow}
						indexColumn={indexColumn}
					/>
				))}
				<div
					className={styles.grid__imgRowContainer__addImgBtn}
					onClick={() =>
						setModalWindow({
							isModalOpen: true,
							rowChosed: indexRow,
						})
					}
				>
					<i>{addImgIconSmall}</i>
				</div>
			</SortableContainer>
		</div>
	);
}

export default IllustrationColumns;
