export const isEmptyTitle = (title) => {
  if (typeof title !== 'string') return true;

  return !title.toLocaleLowerCase().trim();
};
