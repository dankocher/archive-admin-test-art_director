import styles from "./ModalWindow.module.scss";
import React, { useCallback, useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { useDropzone } from "react-dropzone";

import { getImageUrl } from "../../helpers/workWithApi";
import { setColumnImgIllustrationContainer } from "../../../../redux/actions/index";

import addImgIcon from "../../utils/icons/add-img-icon";
import closeIcon from "../../utils/icons/close-icon";

function ModalWindow({ setModalWindow, indexRow }) {
  const dispatch = useDispatch();
  const [modalWindowTopIndent, setModalWindowTopIndent] = useState(0);
  useEffect(() => {
    setModalWindowTopIndent(getPositionModalWindow());
  }, [setModalWindowTopIndent]);

  const getPositionModalWindow = () => {
    const blurContainer = document.getElementById("illustrationsContainer");

    if (blurContainer === null) {
      return;
    }

    const vh = window.innerHeight;
    const blurContainerYPosition = blurContainer.getBoundingClientRect().y;
    let top = 0;

    if (blurContainerYPosition < 0) {
      top = vh / 2 - blurContainerYPosition;
    } else {
      top = (vh - blurContainerYPosition) / 2;
    }
    console.log(top);
    return top;
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (Array.isArray(acceptedFiles) && acceptedFiles.length !== 0) {
        acceptedFiles.forEach((element) => {
          getImageUrl(element).then((res) => {
            if (!res.ok) return;
            dispatch(setColumnImgIllustrationContainer(res.filename, indexRow));
          });
        });
      }
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
    <div id="blurContainerModalWidow" className={styles.blurContainer}>
      <div
        className={styles.blurContainer__modalWindow}
        {...getRootPropsDropZone()}
        style={{ top: modalWindowTopIndent }}
      >
        <div
          className={`${styles.isDragActive} ${
            isDragActiveDropZone ? null : styles.isDragActive__hidden
          }`}
        >
          <span className={`${styles.blue} ${styles.isDragActive__big_font}`}>
            Перетащите сюда изображения
          </span>
          <span className={`${styles.blue} ${styles.isDragActive__small_font}`}>
            для загрузки в {indexRow + 1} подзадание
          </span>
        </div>
        <div className={styles.closeIcon}>
          <i
            onClick={() =>
              setModalWindow({
                isModalOpen: false,
                rowChosed: null,
              })
            }
          >
            {closeIcon}
          </i>
        </div>
        <p>Загрузка изображений для {indexRow + 1} подзадания</p>
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
