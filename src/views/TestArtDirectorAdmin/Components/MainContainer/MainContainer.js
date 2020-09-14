import React from "react";

import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

import Header from "../Header/Header";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";
import TasksComponent from "../TasksComponent/TasksComponent";
import SplitScreen from "../SplitScreen/SplitScreen";

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
								<Route
									path="/illustrations-radioButtons/:id"
									component={SplitScreen}
								/>
							</div>
						</>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default MainContainer;
