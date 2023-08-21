export type TodoItemProps = {
  id: number;
  text: string;
  completed: boolean;
  toggleTodo?: (id: number) => void;
  removeTodo?: (id: number) => void;
};
