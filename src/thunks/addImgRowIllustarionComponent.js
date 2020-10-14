import {
	loadRowImgIllustrationContainer,
	setRowImgIllustrationContainerSuccess,
	setRowImgIllustrationContainerError,
} from "../redux/actions";

import { getImageUrl } from "../views/TestArtDirectorAdmin/helpers/workWithApi";

export const addImgRowIllustarionComponent = (acceptedFiles) => {
	return (dispatch, getState) => {
		console.log(acceptedFiles);
		const imgMatrix = getState().task.data.imgGrid;

		if (Array.isArray(acceptedFiles) && acceptedFiles.length !== 0) {
			acceptedFiles.forEach((element, index) => {
				dispatch(
					loadRowImgIllustrationContainer(loadRowImgIllustrationContainer())
				);
				getImageUrl(element)
					.then((res) => {
						if (!res.ok) return;
						console.log(imgMatrix.length + index);
						dispatch(
							setRowImgIllustrationContainerSuccess(
								res.filename,
								imgMatrix.length + index,
								0
							)
						);
					})
					.catch((error) => {
						dispatch(
							setRowImgIllustrationContainerError(imgMatrix.length + index, 0)
						);
						console.log(error);
						return { ok: false, status: "unreachable" };
					});
			});
		}
	};
};
