import { isEmptyTitle } from './isEmptyTitle';

export const getIsSaveEnabledChoice = (choices) =>
  choices.every((choice) => !isEmptyTitle(choice.text) && choice.type);
