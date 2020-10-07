import styles from "./DragAndDropZone.module.scss";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { host } from "../../../../constants/api";

import addImgIcon from "../../utils/icons/add-img-icon";

import { getImageUrl } from "../../helpers/workWithApi";

import { setWelcomePageImgUrl } from "../../../../redux/actions";

import { useDropzone } from "react-dropzone";

function DragAndDropZone() {
	const dispatch = useDispatch();

	const onDrop = useCallback(
		(acceptedFiles) => {
			const file = acceptedFiles[0];
			if (file) {
				getImageUrl(file).then((res) => {
					if (!res.ok) return;
					dispatch(
						setWelcomePageImgUrl(`${host.uri}/api/pic/get/${res.filename}`)
					);
				});
			}
		},
		[dispatch]
	);

	const imgUrl = useSelector((state) => state.task.data.imgUrl);

	const {
		getRootProps,
		getInputProps,
		isDragActive,
		// isDragAccept,
		// isDragReject,
	} = useDropzone({ accept: "image/*", multiple: false, maxFiles: 2, onDrop });

	return (
		<div
			{...getRootProps()}
			className={`${styles.container} ${
				imgUrl === undefined ? "" : styles.selected
			}`}
		>
			{isDragActive ? (
				<React.Fragment>
					<span className={`${styles.blue} ${styles.container__big_font}`}>
						Перетащите сюда изображения
					</span>
					<br />
					<span className={`${styles.blue} ${styles.container__small_font}`}>
						для загрузки
					</span>
				</React.Fragment>
			) : imgUrl === undefined ? (
				<React.Fragment>
					<div className="wrapper-img--dragAndDropZone">
						<i>{addImgIcon}</i>
					</div>
					<span className={`base-font-small`}>
						Перетащите сюда изображение или &nbsp;
						<label className={`${styles.blue}`}>загрузите</label>
					</span>
				</React.Fragment>
			) : (
				<img src={imgUrl} alt="" />
			)}
			<input id="file-uploader" {...getInputProps()} type="file" />
		</div>
	);
}

export default DragAndDropZone;
