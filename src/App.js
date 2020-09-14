import React from "react";

import MainContainer from "./Components/MainContainer/MainContainer";
import Header from "./Components/Header/Header";
import WelcomeScreen from "./Components/WelcomeScreen/WelcomeScreen";
import TasksComponent from "./Components/TasksComponent/TasksComponent";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link as RouterLink,
} from "react-router-dom";

function App() {
	return (
		<div className="App">
			<MainContainer />
		</div>
	);
}

export default App;
