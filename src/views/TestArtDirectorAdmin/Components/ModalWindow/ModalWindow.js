import styles from "./ModalWindow.module.scss";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useDropzone } from "react-dropzone";

import addImgIcon from "../../utils/icons/add-img-icon";
import closeIcon from "../../utils/icons/close-icon";

function ModalWindow({ setIsModalOpen }) {
	const dispatch = useDispatch();

	const onDrop = useCallback(
		(acceptedFiles) => {
			// if (Array.isArray(acceptedFiles) && acceptedFiles.length !== 0) {
			// 	acceptedFiles.forEach((element) => {
			// 		getImageUrl(element).then((res) => {
			// 			if (!res.ok) return;
			// 			dispatch(setRowImgIllustrationContainer(res.filename));
			// 		});
			// 	});
			// }
		},
		[dispatch]
	);

	const {
		getRootProps: getRootPropsInputZone,
		getInputProps: getInputPropsInputZone,
	} = useDropzone({
		accept: "image/*",
		multiple: true,
		onDrop,
		noDrag: true,
	});

	const {
		getRootProps: getRootPropsDropZone,
		isDragActive: isDragActiveDropZone,
	} = useDropzone({
		accept: "image/*",
		multiple: true,
		onDrop,
		noClick: true,
	});

	return (
		<div className={styles.blurContainer}>
			<div
				className={styles.blurContainer__modalWindow}
				{...getRootPropsDropZone()}
			>
				<i className={styles.closeIcon} onClick={() => setIsModalOpen(false)}>
					{closeIcon}
				</i>
				<p>Загрузка изображений для 3 подзадания</p>
				<div
					className={styles.blurContainer__modalWindow__inputZone}
					{...getRootPropsInputZone()}
				>
					<i>{addImgIcon}</i>
					<p className="base-font-small">
						Перетащите сюда изображение или <span>загрузите</span>
					</p>
					<input id="file-uploader" {...getInputPropsInputZone()} type="file" />
				</div>
			</div>
		</div>
	);
}

export default ModalWindow;
