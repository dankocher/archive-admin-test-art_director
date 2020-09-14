import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import ajax from "../../../../utils/ajax";
import { api } from "../../../../constants/api";

import {
  Link as RouterLink,
  useRouteMatch,
  useParams,
  useLocation,
} from "react-router-dom";

import "./BreadCrumbs.css";

function BreadCrumbs() {
  const routeMatch = useRouteMatch();
  const routParams = useParams();
  const routLocation = useLocation();

  const [task, setTask] = useState([]);
  let res = {};
  const getTasks = async () => {
    res = await ajax(api.td_get_tasks, {});
    if (!res.ok) {
      console.log("Bad response");
      return;
    }
    setTask(res);
    console.log(`/////////${res}/////////////`);
    console.log(res.ttask.name);
  };

  useEffect(() => {
    getTasks();
  }, [routLocation]);

//   const render=()=>{
// 	  switch (key) {
// 		  case value:
			  
// 			  break;
	  
// 		  default:
// 			  break;
// 	  }
//   }

  console.log(routeMatch);

  console.log("asd");
  console.log(routParams);
  console.log("qwe");
  console.log(routLocation);
  const taskName = useSelector((state) => state.taskName);
  return (
    <div className="wrapper--breadCrumbs">
      <Breadcrumbs
        separator={<NavigateNextIcon color="disabled" fontSize="large" />}
      >
        <Link color="inherit" href="/">
          Тесты
        </Link>
        {routLocation.pathname === "/" ? (
          <>
            <Typography color="textPrimary">{task.ttask?.name}</Typography>
          </>
        ) : (
          <>
            <Typography color="textPrimary">{task.ttask?.name}</Typography>
          </>
		  
        )
		}
      </Breadcrumbs>
    </div>
  );
}

export default BreadCrumbs;
