import React, { useEffect } from "react";
//import connect from "react-redux/es/connect/connect";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { setTaskState } from "../../../../redux/actions";

import { getTaskFromServer, saveTask } from "../../utils/workWithApi";

import TopContainer from "../TopContainer/TopContainer";
import DragAndDropZone from "../DragAndDropZone/DragAndDropZone";

import "./WelcomeScreen.scss";

function WelcomeScreen() {
  const dispatch = useDispatch();
  const task = useSelector((state) => state);
  // const isUpdatedLocally = useSelector((state) => state.isUpdatedLocally);

  const handlerSaveTaskToDB = () => {
    // console.log(`ieto ono samoe = ${isUpdatedLocally}`);

    console.log("aaaa");

    if (!task.isUpdatedLocally) {
      console.log("net");
      return;
    }
    console.log("ieto tesk");
    console.log(task);
    console.log("ieto tesk");
    console.log("da ia sohranilsia");
    saveTask(task.task);
  };
  useEffect(() => {
    return handlerSaveTaskToDB;
  }, [task]);

  useEffect(() => {
    getTaskFromServer().then((res) => {
      console.log("delau krasivo");
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

// // const mapStateToProps = (state) => ({
// //   state: state,
// //   isUpdatedLocally: state.isUpdatedLocally,
// // });

// // const mapDispatchToProps = (dispatch) => ({});

// export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);

export default WelcomeScreen;
