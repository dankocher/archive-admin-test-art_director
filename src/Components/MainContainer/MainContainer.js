import React from "react";

import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

import Header from "../../Components/Header/Header";
import WelcomeScreen from "../../Components/WelcomeScreen/WelcomeScreen";
import TasksComponent from "../../Components/TasksComponent/TasksComponent";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link as RouterLink,
} from "react-router-dom";

import "./MainContainer.css";

function MainContainer({header, list, body}) {
	return (
		<Router>
			<div className="main-container">
				<Header />
				<div className="centred-container--mainContainer">
					<BreadCrumbs />

					<Switch>
						<>
							<Route path="/" exact component={TasksComponent} />

							<div className={"wrapper-body--mainContainer"}>
								<Route path="/welcome-screen/:id" component={WelcomeScreen} />
							</div>
						</>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default MainContainer;
