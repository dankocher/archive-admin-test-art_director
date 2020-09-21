import "./RadioButtonOptions.scss";
import React, { useState } from "react";

import RadioButtonOption from "./RadioButtonOption/RadioButtonOptions";

function RadioButtonOptions({ radioButtonList }) {
  const [isHoveredOption, setIsHoveredOption] = useState(false);

  return (
    <div
      className="container--RadioButtonAnswers"
      onMouseEnter={() => setIsHoveredOption(true)}
      onMouseLeave={() => setIsHoveredOption(false)}
    >
      {radioButtonList.map((element, key) => (
        <RadioButtonOption
          isHoveredOption={isHoveredOption}
          key={key}
          option={element.option}
          mark={element.mark}
        />
      ))}
      <div className="container-answer--RadioButtonAnswers">
        <button className="hidden-button input add-question--RadioButtonQuestion">
          Добавить вариант
        </button>
      </div>
    </div>
  );
}

export default RadioButtonOptions;
