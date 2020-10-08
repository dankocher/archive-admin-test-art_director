import styles from "./IllustrationColumns.module.scss";
import React from "react";

import { getImgPath } from "../../../../../../helpers/getImgPath";
import DragButton from "../../../../../DragButton/DragButton";

function IllustrationColumns({ imgRow, index }) {
	return (
		<div className={styles.grid}>
			<div className={styles.grid__sort_container}>
				<div>
					<span className="subTasks-numbers-font">{index + 1}</span>
					<DragButton />
				</div>
			</div>
			<div className={styles.grid__imgRowContainer}>
				{imgRow?.map((element, index) => (
					<div
						key={index}
						className={styles.grid__imgRowContainer__imgContainer}
					>
						<img src={getImgPath(element)} alt="" />
					</div>
				))}
			</div>
		</div>
	);
}

export default IllustrationColumns;
