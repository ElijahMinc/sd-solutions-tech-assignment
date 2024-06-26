export const updateChoicesStateByIdFieldValue =
  ({ currentId, field, value }) =>
  (prevChoicesState) =>
    prevChoicesState.map((currentChoice) => {
      if (currentChoice.id !== currentId) {
        return currentChoice;
      }

      currentChoice[field] = value;

      return { ...currentChoice };
    });
