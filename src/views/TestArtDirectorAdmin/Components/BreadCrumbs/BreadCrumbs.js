import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import ajax from "../../../../utils/ajax";
import { api } from "../../../../constants/api";

import { Link as RouterLink, useLocation } from "react-router-dom";

import "./BreadCrumbs.scss";

function BreadCrumbs() {
  const routLocation = useLocation();
  const [task, setTask] = useState([]);
  const testName = useSelector((state) => state.name);
  const taskName = useSelector((state) => state.task.name);

  // const getTasks = async () => {
  //   const res = await ajax(api.td_get_tasks, {});
  //   if (!res.ok) {
  //     console.log("Bad response");
  //     return;
  //   }
  //   setTask(res);
  // };

  // useEffect(() => {
  //   getTasks();
  // }, [routLocation]);

  return (
    <>
      <div className="field--breadCrumbs">
        <div className="wrapper--breadCrumbs">
          <Breadcrumbs
            separator={<NavigateNextIcon color="disabled" fontSize="large" />}
          >
            <Link color="inherit" href="/">
              Тесты
            </Link>
            {routLocation.pathname === "/" ? (
              <Typography color="textPrimary">{testName}</Typography>
            ) : (
              [
                <RouterLink to={"/"} color="textPrimary">
                  {testName}
                </RouterLink>,
                <Typography color="textPrimary">{taskName}</Typography>,
              ]
            )}
          </Breadcrumbs>
        </div>
      </div>
    </>
  );
}

export default BreadCrumbs;
