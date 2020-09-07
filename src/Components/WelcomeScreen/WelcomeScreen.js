import React from "react";

import "./WelcomeScreen.css";

import DragAndDropZone from "../DragAndDropZone/DragAndDropZone";

function WelcomeScreen(props) {
	return (
		<div className="">
			<div className="header--welcomeScreen">
				<div className="leftSide-header-welcomeScreen">
					<input className="input" />
					<textarea className="input" />
				</div>
				<div className="rightSide-header-welcomeScreen">
					<select className="input">
						<option>Экран приветствия</option>
						<option>Экран приветствия</option>
					</select>
				</div>
			</div>
			<div className="body--welcomeScreen">
				<h2>Контент</h2>
				<div className="wrapper-dragAndDropZone--welcomeScreen">
					<DragAndDropZone />
				</div>
			</div>
		</div>
	);
}

export default WelcomeScreen;
