import "./BottomContainer.scss";
import React from "react";

function BottomContainer(props) {
	return (
		<div className="body--BottomContainer" id="bodyBottomContainer">
			<h2 className="bold-big-font">Контент</h2>
			{props.children}
		</div>
	);
}

export default BottomContainer;
