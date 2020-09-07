import React from "react";

import "./MainContainer.css";

function MainContainer({header, body}) {
	return (
		<div className="main-container">
			{header}
			<div className={"wrapper-body--mainContainer"}>{body}</div>
		</div>
	);
}

export default MainContainer;
