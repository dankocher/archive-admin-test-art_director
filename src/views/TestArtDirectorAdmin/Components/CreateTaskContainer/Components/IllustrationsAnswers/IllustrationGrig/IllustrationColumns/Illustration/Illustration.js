import styles from "./Illustration.module.scss";
import React from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
import { getImgPath } from "../../../../../../../helpers/getImgPath";
import deleteImgIcon from "../../../../../../../utils/icons/delete-img-icon";
import erorImgIcon from "../../../../../../../utils/icons/error-emg-icon";

function Illustration({ imgState, indexColumn, deleteImg }) {
	const illustrationContent = () => {
		if (imgState.loading) {
			return (
				<div className={styles.container__modificationContainer}>
					<CircularProgress />
				</div>
			);
		} else if (imgState.error) {
			return (
				<div className={styles.container__modificationContainer}>
					<i>{erorImgIcon}</i>
				</div>
			);
		} else {
			return <img src={getImgPath(imgState.name)} alt="" />;
		}
	};

	return (
		<div className={styles.container}>
			<i onClick={() => deleteImg(indexColumn, imgState)}>{deleteImgIcon}</i>
			{illustrationContent()}
		</div>
	);
}

export default Illustration;
