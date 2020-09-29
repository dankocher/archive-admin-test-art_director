import "./WelcomeScreen.scss";
import React from "react";

import TopContainer from "../TopContainer/TopContainer";
import DragAndDropZone from "../DragAndDropZone/DragAndDropZone";

function WelcomeScreen() {
  return (
    <div className="wrapper-inline-block">
      <TopContainer />
      <div className="body--welcomeScreen">
        <h2 className="bold-big-font">Контент</h2>
        <div className="wrapper-dragAndDropZone--welcomeScreen">
          <DragAndDropZone />
        </div>
      </div>
    </div>
  );
}

export default WelcomeScreen;
