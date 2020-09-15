import React from "react";

import "./Checkbox.scss";

function Checkbox(props) {
	return (
		<div className="checkbox-field--checkbox">
			<label
				style={
					props.value
						? {backgroundColor: "#484848"}
						: {backgroundColor: "#ffffff"}
				}
				htmlFor={props.id}
				className="checkbox-container--checkbox"
			>
				{props.value ? (
					<div className="wrapper-icon">
						<i className="checked-icon--checkbox"></i>
					</div>
				) : null}
			</label>
			<label htmlFor={props.id} className="base-font-small">
				{props.label}
			</label>
			<input
				id={props.id}
				type="checkbox"
				checked={false}
				onChange={() => props.onChange()}
			/>
		</div>
	);
}

export default Checkbox;
