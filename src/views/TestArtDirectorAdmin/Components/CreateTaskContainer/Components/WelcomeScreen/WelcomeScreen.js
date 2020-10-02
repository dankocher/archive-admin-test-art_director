import "./WelcomeScreen.scss";
import React from "react";

import DragAndDropZone from "../../../DragAndDropZone/DragAndDropZone";

function WelcomeScreen() {
  return (
    <div className="wrapper-dragAndDropZone--welcomeScreen">
      <DragAndDropZone />
    </div>
  );
}

export default WelcomeScreen;
