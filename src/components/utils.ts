export const toDoCreator = (value: string) => ({
  id: new Date().getTime(),
  title: value,
  completed: false,
  userId: 1,
});

export const numberPageCreator = (numberOfPages: number) => {
  const result = [];
  for (let i = 0; i < numberOfPages; i++) {
    result.push(i + 1);
  }

  return result;
};
