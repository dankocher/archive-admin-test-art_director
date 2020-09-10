import React from "react";
import {useSelector} from "react-redux";

import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link as RouterLink,
} from "react-router-dom";

import "./BreadCrumbs.css";

function BreadCrumbs() {
	const taskName = useSelector((state) => state.taskName);
	return (
		<div className="wrapper--breadCrumbs">
			<Breadcrumbs
				separator={<NavigateNextIcon color="disabled" fontSize="large" />}
			>
				<Link color="inherit" href="/">
					Тесты
				</Link>
				<RouterLink to="/">
					Тестовое задание для Арт-директора(реадактирование)
				</RouterLink>

				<Typography color="textPrimary">{taskName}</Typography>
			</Breadcrumbs>
		</div>
	);
}

export default BreadCrumbs;
