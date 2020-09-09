import React from "react";

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
	return (
		<div className="wrapper--breadCrumbs">
			<Breadcrumbs
				separator={<NavigateNextIcon color="disabled" fontSize="large" />}
			>
				<Link color="inherit" href="/">
					Тесты
				</Link>
				<RouterLink to="/">
					<Link color="inherit">
						Тестовое задание для Арт-директора(реадактирование)
					</Link>
				</RouterLink>

				<Typography color="textPrimary">Breadcrumb</Typography>
			</Breadcrumbs>
		</div>
	);
}

export default BreadCrumbs;
