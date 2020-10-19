// import {
// 	setRowImgIllustrationContainerError,
// } from "../redux/actions";

// import { setRowImgIllustrationContainer } from "./setRowImgIllustrationContainer";

// import { getImageUrl } from "../views/TestArtDirectorAdmin/helpers/workWithApi";

// export const addImgRowIllustarionComponent = (file, indexRow, indexColumn) => {
// 	return (dispatch, getState) => {
// 		const imgMatrix = getState().task.data.imgGrid;
// 		const rowDiff = imgMatrix.length - 1 - indexRow;
// 		const columnDiff =
// 			getState().task.data.imgGrid[indexRow].length - 1 - indexColumn;

// 		getImageUrl(file)
// 			.then((res) => {
// 				if (!res.ok) return;
// 				dispatch(
// 					setRowImgIllustrationContainer(
// 						res.filename,
// 						rowDiff,
// 						columnDiff
// 					)
// 				);
// 			})
// 			.catch((error) => {
// 				dispatch(setRowImgIllustrationContainerError(indexRow, indexColumn));
// 				return { ok: false, status: "unreachable", error: error };
// 			});
// 	};
// };
