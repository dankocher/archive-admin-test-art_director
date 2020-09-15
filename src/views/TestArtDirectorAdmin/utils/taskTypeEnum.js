const taskTypeEnum = Object.freeze({
  "welcome-screen": "Экран приветствия",
  "illustrations-radioButtons": "Иллюстрации и радиобаттоны",
});

const getWelcomeScreenLabel = () => {
  return taskTypeEnum["welcome-screen"];
};

const isWelcomeScreen = (type) => {
  return type === Object.keys(taskTypeEnum)[0];
};

export { taskTypeEnum, isWelcomeScreen, getWelcomeScreenLabel };
