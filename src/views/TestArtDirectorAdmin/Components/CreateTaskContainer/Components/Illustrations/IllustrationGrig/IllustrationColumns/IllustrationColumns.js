import styles from "./IllustrationColumns.module.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import {
  sortRowInImgGrid,
  setSelectedRowIdImgGrid,
} from "../../../../../../../../redux/actions";

import addImgIconSmall from "../../../../../../utils/icons/add-img-icon-small";
import DragButton from "../../../../../DragButton/DragButton";
import Illustration from "./Illustration/Illustration";

import { sortableHandle } from "react-sortable-hoc";

function IllustrationColumns({ imgRow, indexRow, setModalWindow }) {
  const dispatch = useDispatch();
  const isOneGradeForAllSubTasks = useSelector(
    (state) => state.reduxStorage.task.isOneGradeForAllSubTasks
  );
  const selectedRow = useSelector(
    (state) => state.radioButtonIllustrationResucer.selectedImgRow
  );

  const onSortEnd = ({ oldIndex, newIndex }) => {
    dispatch(sortRowInImgGrid(indexRow, oldIndex, newIndex));
  };

  const choosingImgRow = () => {
    dispatch(setSelectedRowIdImgGrid(imgRow.id));
    // console.log(`chosen ${imgRow.id}`);
  };

  const getIsRowSlected = () => {
    return selectedRow === imgRow.id;
  };

  const getIsHaveScores = () => {
    return imgRow.unfilledScoreCounter === 0;
  };

  return (
    <div
      className={`${styles.grid} ${
        isOneGradeForAllSubTasks == null || isOneGradeForAllSubTasks
          ? ""
          : getIsRowSlected()
          ? styles.selected
          : getIsHaveScores()
          ? ""
          : styles.error
      }`}
    >
      <div
        className={styles.grid__sort_container}
        onClick={isOneGradeForAllSubTasks == null || isOneGradeForAllSubTasks ? null : choosingImgRow}
      >
        <div>
          <span className="subTasks-numbers-font">{indexRow + 1}</span>
          <DragHandle />
        </div>
      </div>
      <SortableContainer
        onSortEnd={onSortEnd}
        lockAxis="x"
        axis="x"
        pressDelay={200}
      >
        {imgRow.imgColumnList?.map((element, indexColumn) => (
          <SortableItem
            key={indexColumn}
            index={indexColumn}
            imgState={element}
            indexRow={indexRow}
            indexColumn={indexColumn}
          />
        ))}
        <div
          className={styles.grid__imgRowContainer__addImgBtn}
          onClick={() =>
            setModalWindow({
              isModalOpen: true,
              rowChosed: indexRow,
            })
          }
        >
          <i>{addImgIconSmall}</i>
        </div>
      </SortableContainer>
    </div>
  );
}

const DragHandle = sortableHandle(() => <DragButton />);

const SortableContainer = sortableContainer(({ children }) => {
  return <div className={styles.grid__imgRowContainer}>{children}</div>;
});

const SortableItem = sortableElement(({ imgState, indexRow, indexColumn }) => {
  // console.log({ localIndex, value, deleteGlobalWordHendle });

  return (
    <Illustration
      imgState={imgState}
      indexRow={indexRow}
      indexColumn={indexColumn}
    />
  );
});

export default IllustrationColumns;
