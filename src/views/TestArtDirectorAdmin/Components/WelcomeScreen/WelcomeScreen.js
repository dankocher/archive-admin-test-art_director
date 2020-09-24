import React, { useEffect } from "react";
//import connect from "react-redux/es/connect/connect";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { setTaskState } from "../../../../redux/actions";

import {
  getTaskFromServer,
  handlerSaveTaskToDB,
} from "../../helpers/workWithApi";

import TopContainer from "../TopContainer/TopContainer";
import DragAndDropZone from "../DragAndDropZone/DragAndDropZone";

import "./WelcomeScreen.scss";

function WelcomeScreen() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  // const isUpdatedLocally = useSelector((state) => state.isUpdatedLocally);

  useEffect(() => {
    return () => {
      if (state.task._id === "") return;

      console.log("ia STATE sohranilsia v WP");

      console.log(state);
      handlerSaveTaskToDB(state);
    };
  }, [state]);

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
