import styles from "./Illustration.module.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { deleteImgFromImgGrig } from "../../../../../../../../../redux/actions";
import { setRowImgIllustrationContainer } from "../../../../../../../../../thunks/setRowImgIllustrationContainer";
import { deleteImgFromImgGridThunk } from "../../../../../../../../../thunks/deleteImgFromImgGridThunk";
import {
	deleteImgFromServer,
	getImageUrl,
} from "../../../../../../../helpers/workWithApi";

import { isString } from "../../../../../../../helpers/isString";

import CircularProgress from "@material-ui/core/CircularProgress";
import { getImgPath } from "../../../../../../../helpers/getImgPath";
import deleteImgIcon from "../../../../../../../utils/icons/delete-img-icon";
import erorImgIcon from "../../../../../../../utils/icons/error-emg-icon";

function Illustration({ imgState, indexColumn, indexRow }) {
	const dispatch = useDispatch();
	const imgGrid = useSelector((state) => state.reduxStorage.task.data.imgGrid);

	const getImgUrlHandle = () => {
		const rowDiff = imgGrid.length - 1 - indexRow;
		const columnDiff = imgGrid[indexRow].imgColumnList.length - 1 - indexColumn;
		console.log(indexRow, indexColumn);

		getImageUrl(imgState.name)
			.then((res) => {
				if (!res.ok) return;
				dispatch(
					setRowImgIllustrationContainer(res.filename, rowDiff, columnDiff)
				);
			})
			.catch((error) => {
				const img = "";
				dispatch(setRowImgIllustrationContainer(img, rowDiff, columnDiff));
				return { ok: false, status: "unreachable", error: error };
			});
	};

	useEffect(() => {
		if (isString(imgState.name)) return;
		getImgUrlHandle();
	}, []);

	const deleteImgHandle = (indexColumn, imgName) => {
		if (imgName !== "" && isString(imgName)) {
			deleteImgFromServer(imgName);
		}
		dispatch(deleteImgFromImgGridThunk(indexRow, indexColumn));
	};

	const illustrationContent = () => {
		if (imgState.loading) {
			return (
				<div className={styles.container__modificationContainer}>
					<CircularProgress />
				</div>
			);
		} else if (imgState.error) {
			return (
				<div
					onClick={() => deleteImgHandle(indexColumn, imgState.name)}
					className={styles.container__modificationContainer}
				>
					<i>{erorImgIcon}</i>
				</div>
			);
		} else {
			return (
				<React.Fragment>
					<i onClick={() => deleteImgHandle(indexColumn, imgState.name)}>
						{deleteImgIcon}
					</i>
					<img src={getImgPath(imgState.name)} alt="" />
				</React.Fragment>
			);
		}
	};

	return <div className={styles.container}>{illustrationContent()}</div>;
}

export default Illustration;
