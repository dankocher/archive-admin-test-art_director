import "./MainContainer.scss";
import React from "react";

import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

import Header from "../Header/Header";
import TaskList from "../TaskList/TaskList";
import CreateTaskContainer from "../CreateTaskContainer/CreateTaskContainer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function MainContainer() {
  return (
    <Router>
      <div className="main-container">
        <Header />
        <BreadCrumbs />
        <div className="centred-container--mainContainer">
          <Switch>
            <Route path="/" exact component={TaskList} />
            <Route path="/:id" component={CreateTaskContainer} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default MainContainer;
