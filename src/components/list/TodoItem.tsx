import { useContext } from 'react';
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import crossIconDark from '../../assets/icon-cross-dark.svg';
import crossIconLight from '../../assets/icon-cross-light.svg';
import { ThemeContext } from '../../context/ThemeContext';
import './TodoItem.scss';

type Props = {
  id: number;
  text: string;
  completed: boolean;
  toggleTodo?: (todoId: number) => void;
  removeTodo?: (todoId: number) => void;
  provided: DraggableProvided;
  snapshot: DraggableStateSnapshot;
};

const TodoItem = ({
  id,
  text,
  completed,
  toggleTodo,
  removeTodo,
  provided,
  snapshot,
}: Props) => {
  const { theme } = useContext(ThemeContext);
  const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
    background: isDragging
      ? '#8555c3aa'
      : theme === 'light-theme'
      ? '#fafafa'
      : '#25273c',
    borderRadius: isDragging ? '3px' : null,
    ...draggableStyle,
  });

  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
      className='todo-item'
    >
      <div className='todo-check'>
        <input
          type='checkbox'
          checked={completed}
          onChange={() => toggleTodo?.(id)}
        />
      </div>
      <div className='todo-text'>
        <span
          style={{
            textDecoration: completed ? 'line-through' : 'none',
          }}
        >
          {text}
        </span>
      </div>
      <div className='todo-remove' onClick={() => removeTodo?.(id)}>
        <img
          src={theme === 'light-theme' ? crossIconDark : crossIconLight}
          alt='cross'
        />
      </div>
    </div>
  );
};

export default TodoItem;
