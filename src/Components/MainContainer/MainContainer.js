import React from "react";

import "./MainContainer.css";

function MainContainer({header, list, body}) {
	return (
		<div className="main-container">
			{header}
			<div className="centred-container--mainContainer">
				{list}
				{/* <div className={"wrapper-body--mainContainer"}>{body}</div> */}
			</div>
		</div>
	);
}

export default MainContainer;
