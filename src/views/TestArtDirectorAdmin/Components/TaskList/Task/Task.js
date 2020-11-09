import styles from "./Task.module.scss";
import React, { useState } from "react";

import { sortableHandle } from "react-sortable-hoc";
import { useGetIsHaveMarks } from "../../../helpers/customHooks";

import { Link } from "react-router-dom";

import {
	taskTypeEnum,
	isWelcomeScreen,
} from "../../../helpers/taskTypes/taskTypeEnum";

import DeleteButton from "../../DeleteButton/DeleteButton";
import DragButton from "../../DragButton/DragButton";
import arrowIcon from "../../../utils/icons/arrow-icon";

const DragHandle = sortableHandle(() => <DragButton />);

function Task({ task, id, index, number, ...props }) {
	const isHaveMarks = useGetIsHaveMarks(task);
	// console.log(isHaveMarks);
	return (
		<>
			<div className={styles.container}>
				<div className={styles.container__counter}>
					<DragHandle />
					{isWelcomeScreen(task.type) ? (
						<span></span>
					) : (
						<span className="task-numbers-font">{number}</span>
					)}
				</div>
				<Link className={styles.container__link} to={`/${id}`}>
					<div className={styles.linkContainer}>
						<div className={styles.linkContainer__description}>
							<h3 className="bold-big-font">{task.name}</h3>
							<div className={` ${styles.smallGreyFont}`}>
								<span className={styles.linkContainer__description__typeText}>
									{taskTypeEnum[task.type]}
								</span>
								<span className={styles.linkContainer__description__typeNumber}>
									25
								</span>
							</div>
						</div>
						<div
							className={`${styles.linkContainer__centredWrapper} ${styles.smallGreyFont}`}
						>
							{isHaveMarks === undefined || isHaveMarks ? null : (
								<span>Не все оценки расставлены</span>
							)}
						</div>
						<div className={styles.linkContainer__centredWrapper}>
							<div>
								<i>{arrowIcon}</i>
							</div>
						</div>
					</div>
				</Link>
				<div className={styles.container__deleteBtn}>
					<DeleteButton onClick={() => props.handlerDeleteSelectedTask(id)} />
				</div>
			</div>
		</>
	);
}

export default Task;
