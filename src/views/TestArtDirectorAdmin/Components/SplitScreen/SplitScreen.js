import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { handlerSaveTaskToDB } from "../../helpers/workWithApi";

import { setInitialState } from "../../../../redux/actions";

import TopContainer from "../TopContainer/TopContainer";
import RadioButtonTaskList from "./RadioButtonTaskList/RadioButtonTaskList";

import "./SplitScreen.scss";

function SplitScreen() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (state.task._id === "") return;
      console.log("ia STATE sohranilsia v SS");

      console.log(state);
      handlerSaveTaskToDB(state);
      // dispatch(setInitialState());
    };
  }, [state]);

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
