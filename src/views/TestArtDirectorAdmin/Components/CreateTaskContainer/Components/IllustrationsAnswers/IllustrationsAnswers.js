import styles from "./IllustrationsAnswers.module.scss";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDropzone } from "react-dropzone";

import addImgIcon from "../../../../utils/icons/add-img-icon";
import { setRowImgIllustrationContainer } from "../../../../../../redux/actions";
import { getImageUrl } from "../../../../helpers/workWithApi";

import IllustrationGrid from "./IllustrationGrig/IllustrationGrid";

function IllustrationsAnswers() {
	const dispatch = useDispatch();

	const onDrop = useCallback(
		(acceptedFiles) => {
			console.log(acceptedFiles);
			debugger;
			if (Array.isArray(acceptedFiles) && acceptedFiles.length !== 0) {
				acceptedFiles.forEach((element) => {
					getImageUrl(element).then((res) => {
						if (!res.ok) return;
						dispatch(setRowImgIllustrationContainer(res.filename));
					});
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
	} = useDropzone({ accept: "image/*", multiple: true, onDrop, noDrag: true });

	const {
		getRootProps: getRootProps2,
		getInputProps: getInputProps2,
		isDragActive: isDragActive2,
		// isDragAccept,
		// isDragReject,
	} = useDropzone({
		accept: "image/*",
		multiple: true,
		onDrop,
		noClick: true,
	});

	return (
		<div className={`${styles.container}`} {...getRootProps2()}>
			<div
				className={`${styles.container__dragAndDrop_container}`}
				{...getRootProps()}
			>
				<div className="wrapper-img--dragAndDropZone">
					<i>{addImgIcon}</i>
				</div>
				<span className={`base-font-small`}>
					Перетащите сюда изображение или &nbsp;
					<label className={`${styles.blue}`}>загрузите</label>
				</span>
				<input id="file-uploader" {...getInputProps()} type="file" />
			</div>

			<IllustrationGrid />

			<div
				className={`${styles.container__blur} ${
					isDragActive2 ? styles.selected : ""
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
