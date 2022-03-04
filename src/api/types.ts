export interface IToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface IToDoForPost {
  userId?: number;
  title: string;
  completed: boolean;
}
