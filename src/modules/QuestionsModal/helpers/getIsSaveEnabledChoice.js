export const getIsSaveEnabledChoice = (choices) =>
  choices.every((choice) => choice.text && choice.type);
