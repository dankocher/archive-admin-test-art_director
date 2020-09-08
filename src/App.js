import React from "react";

import MainContainer from "./Components/MainContainer/MainContainer";
import Header from "./Components/Header/Header";
import WelcomeScreen from "./Components/WelcomeScreen/WelcomeScreen";
import Task from "./Components/Task/Task";
import TasksComponent from "./Components/TasksComponent/TasksComponent";

function App() {
	return (
		<div className="App">
			<MainContainer
				header={<Header />}
				list={<TasksComponent />}
				body={<WelcomeScreen />}
			></MainContainer>
		</div>
	);
}

export default App;
