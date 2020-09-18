import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTaskState } from "../../../../redux/actions";

import {
  getTaskFromServer,
  handlerSaveTaskToDB,
} from "../../utils/workWithApi";

import TopContainer from "../TopContainer/TopContainer";
import RadioButtonsTask from "./RadioButtonsTask/RadioButtonsTask";

import "./SplitScreen.scss";

function SplitScreen() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    return () => handlerSaveTaskToDB(state);
  }, [state]);

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
        <div className="body-container--splitScreen">
          <div className="leftSide-bodyContainer--splitScreen">
            <RadioButtonsTask />
          </div>
          <div className="rightSide-bodyContainer--splitScreen"></div>
        </div>
      </div>
    </div>
  );
}

export default SplitScreen;
