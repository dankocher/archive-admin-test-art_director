import React from "react";

import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

import Header from "../Header/Header";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";
import TasksComponent from "../TasksComponent/TasksComponent";
import SplitScreen from "../SplitScreen/SplitScreen";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
} from "react-router-dom";

import "./MainContainer.scss";

function MainContainer({ header, list, body }) {
  return (
    <Router>
      <div className="main-container">
        <Header />
        <div className="centred-container--mainContainer">
          <BreadCrumbs />

          <Switch>
            <>
              <Route path="/" exact component={TasksComponent} />

              <Route path="/welcome-screen/:id">
                <div className={"wrapper-body--mainContainer"}>
                  <WelcomeScreen />
                </div>
              </Route>
              <Route path="/illustrations-radioButtons/:id">
                <div className={"wrapper-body--mainContainer"}>
                  <SplitScreen />
                </div>
              </Route>
            </>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default MainContainer;
