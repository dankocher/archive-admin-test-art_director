import React from "react";
import { useSelector } from "react-redux";

import TopContainer from "../TopContainer/TopContainer";

import "./SplitScreen.scss";

function SplitScreen() {
  const taskName = useSelector((state) => state.taskName);
  const taskType = useSelector((state) => state.taskType);

  return (
    <div className="wrapper-inline-block">
      <TopContainer />
      <div className="body--welcomeScreen">
        <h2 className="bold-big-font">Контент</h2>
        <div className="body-container--splitScreen">
          <div className="leftSide-bodyContainer--splitScreen"></div>
          <div className="rightSide-bodyContainer--splitScreen"></div>
        </div>
      </div>
    </div>
  );
}

export default SplitScreen;
