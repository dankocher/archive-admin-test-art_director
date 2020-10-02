import React from "react";

import RadioButtonTaskList from "./RadioButtonTaskList/RadioButtonTaskList";

import "./SplitScreen.scss";

function SplitScreen(props) {
	return (
		<div className="body-container--splitScreen">
			<div className="leftSide-bodyContainer--splitScreen">
				<RadioButtonTaskList />
			</div>
			<div className="rightSide-bodyContainer--splitScreen">
				{props.rightSide}
			</div>
		</div>
	);
}

export default SplitScreen;
