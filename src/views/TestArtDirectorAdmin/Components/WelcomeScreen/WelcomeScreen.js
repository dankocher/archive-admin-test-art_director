import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTaskState } from "../../../../redux/actions";

import { getTaskFromServer } from "../../utils/workWithApi";

import TopContainer from "../TopContainer/TopContainer";
import DragAndDropZone from "../DragAndDropZone/DragAndDropZone";

import "./WelcomeScreen.scss";

function WelcomeScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    getTaskFromServer().then((res) => {
      dispatch(setTaskState(res));
    });
  }, []);

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
