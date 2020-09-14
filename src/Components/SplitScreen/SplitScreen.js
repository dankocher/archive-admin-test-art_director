import React from "react";
import {useSelector} from "react-redux";

import TopContainer from "../TopContainer/TopContainer";

import "./SplitScreen.css";

function SplitScreen() {
	const taskName = useSelector((state) => state.taskName);
	const taskType = useSelector((state) => state.taskType);

	return (
		<div className="wrapper-inline-block">
			<TopContainer />
			<div className="body--welcomeScreen">
				<h2 className="bold-big-font">Контент</h2>
				{/* <div className="wrapper-dragAndDropZone--welcomeScreen">
					<DragAndDropZone />
				</div> */}
			</div>
		</div>
	);
}

export default SplitScreen;
