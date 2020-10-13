import styles from "./Illustration.module.scss";
import React from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
import { getImgPath } from "../../../../../../../helpers/getImgPath";
import deleteImgIcon from "../../../../../../../utils/icons/delete-img-icon";

function Illustration({ imgName, indexColumn, deleteImg }) {
  return (
    <div className={styles.container}>
      <i onClick={() => deleteImg(indexColumn, imgName)}>{deleteImgIcon}</i>
      {imgName === "" ? (
        <div className={styles.container__loaderContainer}>
          <CircularProgress />
        </div>
      ) : (
        <img src={getImgPath(imgName)} alt="" />
      )}
    </div>
  );
}

export default Illustration;
