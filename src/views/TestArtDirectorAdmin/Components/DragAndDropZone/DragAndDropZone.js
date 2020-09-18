import React from "react";

import "./DragAndDropZone.scss";

import Dropzone, {useDropzone} from "react-dropzone";

function DragAndDropZone() {
	const {
		acceptedFiles,
		getRootProps,
		getInputProps,
		isDragActive,
		isDragAccept,
		isDragReject,
	} = useDropzone({accept: "image/*", multiple: false});
	return (
		<div {...getRootProps()} className="dragAndDropZone base-font-small">
			<div className="wrapper-img--dragAndDropZone">
				<i className="add-img-icon"></i>
			</div>
			<span>
				Перетащите сюда изображение или &nbsp;
				<label className="custom-file-uploader" /*htmlFor="file-uploader"*/>
					загрузите
				</label>
				<input id="file-uploader" {...getInputProps()} type="file" />
			</span>
			{/* {console.log(acceptedFiles)} */}
		</div>
	);
}

export default DragAndDropZone;
