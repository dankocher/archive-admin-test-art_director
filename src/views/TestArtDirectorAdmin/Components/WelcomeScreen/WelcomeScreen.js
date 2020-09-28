import "./WelcomeScreen.scss";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { handlerSaveTaskToDB } from "../../helpers/workWithApi";

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
