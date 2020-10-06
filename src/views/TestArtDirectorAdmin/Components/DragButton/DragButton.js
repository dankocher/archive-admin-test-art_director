import styles from "./DragButton.module.scss";
import React from "react";

import dotsIcon from "../../utils/icons/dots-icon";

function DragButton() {
  return (
    <button className="hidden-button">
      <i className={styles.drag_icon}>{dotsIcon}</i>
    </button>
  );
}

export default DragButton;
