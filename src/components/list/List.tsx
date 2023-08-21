import { TodoItemProps } from '../../types/index';
import './List.scss';
import ListFooter from './ListFooter';
import TodoItem from './TodoItem';

type Props = {
  data: TodoItemProps[];
  toggleTodo: (todoId: number) => void;
  removeTodo: (todoId: number) => void;
  onFilterClick: (filter: string) => void;
  clearCompleted: () => void;
  todosLength: number;
};

const List = ({
  data,
  toggleTodo,
  removeTodo,
  onFilterClick,
  clearCompleted,
  todosLength,
}: Props) => {
  const todoItems = data.map((item: TodoItemProps) => (
    <TodoItem
      toggleTodo={toggleTodo}
      removeTodo={removeTodo}
      key={item.id}
      {...item}
    />
  ));

  return (
    <div className='todo-list'>
      {todoItems}
      <ListFooter
        onFilterClick={onFilterClick}
        clearCompleted={clearCompleted}
        todosLength={todosLength}
      />
    </div>
  );
};

export default List;
