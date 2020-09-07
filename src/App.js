import React from "react";

import MainContainer from "./Components/MainContainer/MainContainer";
import Header from "./Components/Header/Header";
import WelcomeScreen from "./Components/WelcomeScreen/WelcomeScreen";

function App() {
	return (
		<div className="App">
			<MainContainer
				header={<Header />}
				body={<WelcomeScreen />}
			></MainContainer>
		</div>
	);
}

export default App;
