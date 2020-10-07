import styles from "./IllustrationsAnswers.module.scss";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDropzone } from "react-dropzone";

import addImgIcon from "../../../../utils/icons/add-img-icon";
import { host } from "../../../../../../constants/api";
import { setWelcomePageImgUrl } from "../../../../../../redux/actions";
import { getImageUrl } from "../../../../helpers/workWithApi";

function IllustrationsAnswers() {
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
		<div className={`${styles.container}`} {...getRootProps()}>
			<input id="file-uploader" {...getInputProps()} type="file" />

			<div className={`${styles.container__dragAndDrop_container}`}>
				<div className="wrapper-img--dragAndDropZone">
					<i>{addImgIcon}</i>
				</div>
				<span className={`base-font-small`}>
					Перетащите сюда изображение или &nbsp;
					<label className={`${styles.blue}`}>загрузите</label>
				</span>
			</div>

			<div
				className={`${styles.container__blur} ${
					isDragActive ? styles.selected : ""
				}`}
			>
				<span className={`${styles.blue} ${styles.container__blur__big_font}`}>
					Перетащите сюда изображения
				</span>
				<br />
				<span
					className={`${styles.blue} ${styles.container__blur__small_font}`}
				>
					для создания новых подзаданий
				</span>
			</div>
		</div>
	);
}

export default IllustrationsAnswers;
