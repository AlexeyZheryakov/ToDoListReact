export const toDoCreator = (value: string) => ({
  id: new Date().getTime(),
  title: value,
  completed: false,
  userId: 1,
});
