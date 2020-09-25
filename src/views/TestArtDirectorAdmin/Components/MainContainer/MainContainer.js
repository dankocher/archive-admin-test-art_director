import "./MainContainer.scss";
import React from "react";

import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

import Header from "../Header/Header";
import TasksComponent from "../TasksComponent/TasksComponent";
import Loader from "../Loader/Loader";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function MainContainer() {
  return (
    <Router>
      <div className="main-container">
        <Header />
        <BreadCrumbs />
        <div className="centred-container--mainContainer">
          <Switch>
            <Route path="/" exact component={TasksComponent} />
            <Route path="/:id" component={Loader} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default MainContainer;
