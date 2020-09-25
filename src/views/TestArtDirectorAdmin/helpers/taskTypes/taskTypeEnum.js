import { WELCOME_SCREEN, ILLUSTRATION_RADIO_BUTTONS } from "./taskTypes";

const taskTypeEnum = Object.freeze({
  WELCOME_SCREEN: "Экран приветствия",
  ILLUSTRATION_RADIO_BUTTONS: "Иллюстрации и радиобаттоны",
});

const getWelcomeScreenLabel = () => {
  return taskTypeEnum["welcome-screen"];
};

const isWelcomeScreen = (type) => {
  return type === WELCOME_SCREEN;
};

export { taskTypeEnum, isWelcomeScreen, getWelcomeScreenLabel };
