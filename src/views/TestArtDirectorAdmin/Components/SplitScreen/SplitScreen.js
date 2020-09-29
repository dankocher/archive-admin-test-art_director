import React from "react";

import TopContainer from "../TopContainer/TopContainer";
import RadioButtonTaskList from "./RadioButtonTaskList/RadioButtonTaskList";

import "./SplitScreen.scss";

function SplitScreen() {
  return (
    <div className="wrapper-inline-block">
      <TopContainer />
      <div className="body--welcomeScreen">
        <h2 className="bold-big-font">Контент</h2>
        <div className="body-container--splitScreen">
          <div className="leftSide-bodyContainer--splitScreen">
            <RadioButtonTaskList />
          </div>
          <div className="rightSide-bodyContainer--splitScreen"></div>
        </div>
      </div>
    </div>
  );
}

export default SplitScreen;
