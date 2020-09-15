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
  const taskName = useSelector((state) => state.name);

  const getTasks = async () => {
    const res = await ajax(api.td_get_tasks, {});
    if (!res.ok) {
      console.log("Bad response");
      return;
    }
    setTask(res);
  };

  useEffect(() => {
    getTasks();
  }, [routLocation]);

  return (
    <>
      <div className="wrapper--breadCrumbs">
        <Breadcrumbs
          separator={<NavigateNextIcon color="disabled" fontSize="large" />}
        >
          <Link color="inherit" href="/">
            Тесты
          </Link>
          {routLocation.pathname === "/" ? (
            <Typography color="textPrimary">{task.ttask?.name}</Typography>
          ) : (
            [
              <RouterLink to={"/"} color="textPrimary">
                {task.ttask?.name}
              </RouterLink>,
              <Typography color="textPrimary">{taskName}</Typography>,
            ]
          )}
        </Breadcrumbs>
      </div>
    </>
  );
}

export default BreadCrumbs;
