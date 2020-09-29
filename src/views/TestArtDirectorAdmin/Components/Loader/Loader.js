import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setTaskState,
  setInitialState,
  setTaskNumber,
} from "../../../../redux/actions";
import {
  WELCOME_SCREEN,
  ILLUSTRATION_RADIO_BUTTONS,
} from "../../helpers/taskTypes/taskTypes";

import {
  getTaskFromServer,
  handlerSaveTaskToDB,
} from "../../helpers/workWithApi";

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

  const task = useSelector((state) => state.task);
  const taskType = useSelector((state) => state.task.type);
  const testId = useSelector((state) => state._id);

  useEffect(() => {
    console.log("delau krasivo v LOADER");

    getTaskFromServer(testId).then((res) => {
      console.log("фетчим/диспатчим таск");
      console.log(res);
      dispatch(setTaskState(res));
    });
  }, []);

  useEffect(() => {
    return () => {
      console.log("ia udalilsia");
      dispatch(setInitialState());
    };
  }, []);

  useEffect(() => {
    if (task._id === "") return;
    console.log("ia STATE sohranilsia v LOADER");
    handlerSaveTaskToDB({ task: { ...task } }).then((res) => {
      console.log(res);
      if (res.task.task_number === task.task_number) return;
      dispatch(setTaskNumber(res.task.task_number));
    });
  }, [task]);

  return <div className="wrapper-body--mainContainer">{getPage(taskType)}</div>;
}

export default Loader;
