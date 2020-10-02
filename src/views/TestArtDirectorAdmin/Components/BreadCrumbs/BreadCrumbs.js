import React from "react";
import { useSelector } from "react-redux";

import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import { Link as RouterLink, useLocation } from "react-router-dom";

import "./BreadCrumbs.scss";

function BreadCrumbs() {
  const routLocation = useLocation();
  const testName = useSelector((state) => state.name);
  const taskName = useSelector((state) => state.task.name);

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
