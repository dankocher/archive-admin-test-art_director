import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setTaskState, setInitialState } from "../../../../redux/actions";
import {
  WELCOME_SCREEN,
  ILLUSTRATION_RADIO_BUTTONS,
} from "../../helpers/taskTypes/taskTypes";

import { getTaskFromServer } from "../../helpers/workWithApi";

import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";
import SplitScreen from "../SplitScreen/SplitScreen";

const getPage = (taskType) => {
  switch (taskType) {
    case WELCOME_SCREEN:
      return <WelcomeScreen />;
    case ILLUSTRATION_RADIO_BUTTONS:
      return <SplitScreen />;
    default:
      return <></>;
  }
};

function Loader() {
  const dispatch = useDispatch();

  const taskType = useSelector((state) => state.task.type);

  useEffect(() => {
    console.log("delau krasivo v LOADER");

    getTaskFromServer().then((res) => {
      console.log("фетчим/диспатчим таск");
      dispatch(setTaskState(res));
    });
  }, []);

  useEffect(() => {
    return () => {
      console.log("ia udalilsia");
      dispatch(setInitialState());
    };
  }, []);

  return <div className="wrapper-body--mainContainer">{getPage(taskType)}</div>;
}

export default Loader;
