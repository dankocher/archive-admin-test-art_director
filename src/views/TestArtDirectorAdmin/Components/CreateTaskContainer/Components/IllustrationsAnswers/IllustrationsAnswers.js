import styles from "./IllustrationsAnswers.module.scss";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useDropzone } from "react-dropzone";

import addImgIcon from "../../../../utils/icons/add-img-icon";
import { setRowImgIllustrationContainer } from "../../../../../../redux/actions";
import { getImageUrl } from "../../../../helpers/workWithApi";

import IllustrationGrid from "./IllustrationGrig/IllustrationGrid";
import ModalWindow from "../../../ModalWindow/ModalWindow";

function IllustrationsAnswers() {
  const dispatch = useDispatch();
  const [modalWindow, setModalWindow] = useState({
    isModalOpen: false,
    rowChosed: null,
  });

  const onDrop = useCallback(
    (acceptedFiles) => {
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

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: true,
    onDrop,
    noDrag: true,
    disabled: modalWindow.isModalOpen,
  });

  const {
    getRootProps: getRootProps2,
    isDragActive: isDragActive2,
  } = useDropzone({
    accept: "image/*",
    multiple: true,
    onDrop,
    noClick: true,
    disabled: modalWindow.isModalOpen,
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
      <IllustrationGrid setModalWindow={setModalWindow} />
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
      {modalWindow.isModalOpen ? (
        <ModalWindow
          setModalWindow={setModalWindow}
          indexRow={modalWindow.rowChosed}
        />
      ) : null}
    </div>
  );
}

export default IllustrationsAnswers;
