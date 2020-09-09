import React from "react";

import "./WelcomeScreen.css";

import DragAndDropZone from "../DragAndDropZone/DragAndDropZone";

function WelcomeScreen(props) {
	return (
		<div className="wrapper-inline-block">
			<div className="heading--welcomeScreen">
				<h1 className="bold-big-font">Экран приветствия</h1>
				<p className="small-grey-font">Экран приветствия</p>
			</div>
			<div className="header--welcomeScreen">
				<div className="leftSide-header-welcomeScreen">
					<input className="input" />
					<textarea className="input" rows={7} />
				</div>
				<div className="rightSide-header-welcomeScreen">
					<select className="input">
						<option>Экран приветствия</option>
						<option>Экран приветствия</option>
					</select>
				</div>
			</div>
			<div className="body--welcomeScreen">
				<h2 className="bold-big-font">Контент</h2>
				<div className="wrapper-dragAndDropZone--welcomeScreen">
					<DragAndDropZone />
				</div>
			</div>
		</div>
	);
}

export default WelcomeScreen;
