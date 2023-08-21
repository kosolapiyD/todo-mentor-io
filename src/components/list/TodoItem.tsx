import { useContext } from 'react';
import crossIconDark from '../../assets/icon-cross-dark.svg';
import crossIconLight from '../../assets/icon-cross-light.svg';
import { ThemeContext } from '../../context/ThemeContext';
import { TodoItemProps } from '../../types/index';
import './TodoItem.scss';

const TodoItem = ({
  id,
  text,
  completed,
  toggleTodo,
  removeTodo,
}: TodoItemProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className='todo-item'>
      <div className='todo-check'>
        <input
          type='checkbox'
          checked={completed}
          onChange={() => toggleTodo?.(id)}
        />
      </div>
      <div className='todo-text'>
        <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
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
