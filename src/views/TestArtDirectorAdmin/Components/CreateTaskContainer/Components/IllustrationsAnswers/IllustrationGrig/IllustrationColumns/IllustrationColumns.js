import styles from "./IllustrationColumns.module.scss";
import React from "react";

import addImgIconSmall from "../../../../../../utils/icons/add-img-icon-small";
import DragButton from "../../../../../DragButton/DragButton";
import Illustration from "./Illustration/Illustration";

function IllustrationColumns({ imgRowList, indexRow, setModalWindow }) {
	return (
		<div className={styles.grid}>
			<div className={styles.grid__sort_container}>
				<div>
					<span className="subTasks-numbers-font">{indexRow + 1}</span>
					<DragButton />
				</div>
			</div>
			<div className={styles.grid__imgRowContainer}>
				{imgRowList?.map((element, indexColumn) => (
					<Illustration
						key={indexColumn}
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
			</div>
		</div>
	);
}

export default IllustrationColumns;
