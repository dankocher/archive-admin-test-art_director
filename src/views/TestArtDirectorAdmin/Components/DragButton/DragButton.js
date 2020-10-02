import "./DragButton.module.scss";
import React from "react";

import dotsIcon from "../../utils/icons/dots-icon";

function DragButton() {
	return (
		<button className="hidden-button">
			<i>{dotsIcon}</i>
		</button>
	);
}

export default DragButton;
