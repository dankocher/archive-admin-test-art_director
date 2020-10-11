import styles from "./Illustration.module.scss";
import React from "react";

import { getImgPath } from "../../../../../../../helpers/getImgPath";
import deleteImgIcon from "../../../../../../../utils/icons/delete-img-icon";

function Illustration({ imgName, indexColumn, deleteImg }) {
	return (
		<div className={styles.container}>
			<i onClick={() => deleteImg(indexColumn)}>{deleteImgIcon}</i>
			<img src={getImgPath(imgName)} alt="" />
		</div>
	);
}

export default Illustration;
