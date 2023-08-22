import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import { TodoItemProps } from '../../types/index';
import './List.scss';
import ListSummary from './ListSummary';
import TodoItem from './TodoItem';

type Props = {
  data: TodoItemProps[];
  toggleTodo: (todoId: number) => void;
  removeTodo: (todoId: number) => void;
  onFilterClick: (filter: string) => void;
  clearCompleted: () => void;
  onDragEnd: (result: DropResult) => void;
  todosLength: number;
};

const List = ({
  data,
  toggleTodo,
  removeTodo,
  onFilterClick,
  clearCompleted,
  onDragEnd,
  todosLength,
}: Props) => {
  const todoItems = data.map((item, index) => {
    return (
      <Draggable key={item.id} draggableId={`${item.id}`} index={index}>
        {(provided, snapshot) => (
          <TodoItem
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
            provided={provided}
            snapshot={snapshot}
            {...item}
          />
        )}
      </Draggable>
    );
  });

  return (
    <div style={{ height: data.length * 61 + 50 }} className='todo-list'>
      <ListSummary
        onFilterClick={onFilterClick}
        clearCompleted={clearCompleted}
        todosLength={todosLength}
      />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='todo'>
          {(provided) => (
            <div
              className='todo'
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {todoItems}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default List;
