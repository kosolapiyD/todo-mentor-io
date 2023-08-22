import { useState, useContext } from 'react';
import Header from './components/header/Header';
import List from './components/list/List';
import { ThemeContext } from './context/ThemeContext';
import './styles/main.scss';
import { TodoItemProps } from './types/index';
import { DropResult } from 'react-beautiful-dnd';

const data: TodoItemProps[] = [
  {
    id: 1,
    text: 'Complete online JavaScript course',
    completed: true,
  },
  {
    id: 2,
    text: 'Jog around the park 3x',
    completed: false,
  },
  {
    id: 3,
    text: '10 minutes meditation',
    completed: false,
  },
  {
    id: 4,
    text: 'Read for 1 hour',
    completed: false,
  },
  {
    id: 5,
    text: 'Pick up groceries',
    completed: false,
  },
  {
    id: 6,
    text: 'Complete Todo App on Frontend Mentor',
    completed: false,
  },
];

function App() {
  const { theme } = useContext(ThemeContext);
  const [todos, setTodos] = useState(data);
  const [activeFilter, setActiveFilter] = useState('all');

  const addTodo = (inputText: string) => {
    setTodos([
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text: inputText,
        completed: false,
      },
    ]);
  };

  const removeTodo = (todoId: number) => {
    const updatedTodos = todos.filter(
      (todo: TodoItemProps) => todo.id !== todoId
    );
    setTodos(updatedTodos);
  };

  const toggleTodo = (todoId: number) => {
    const updatedTodos = todos.map((todo: TodoItemProps) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const clearCompleted = () => {
    const updatedTodos = todos.filter((todo: TodoItemProps) => !todo.completed);
    setTodos(updatedTodos);
  };

  const filterTodos = (filter: string) => {
    switch (filter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter((todo: TodoItemProps) => !todo.completed);
      case 'completed':
        return todos.filter((todo: TodoItemProps) => todo.completed);
      default:
        return todos;
    }
  };

  const filteredTodos = filterTodos(activeFilter);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const items = Array.from(todos);
    const [newOrder] = items.splice(source.index, 1);
    items.splice(destination.index, 0, newOrder);

    setTodos(items);
  };

  return (
    <div className={`App ${theme}`}>
      <div className='container'>
        <Header addTodo={addTodo} />
        <List
          data={filteredTodos}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          onFilterClick={(filter: string) => {
            setActiveFilter(filter);
          }}
          clearCompleted={clearCompleted}
          onDragEnd={onDragEnd}
          todosLength={todos.length}
        />
        <div className='list-footer'>
          <span>Drag and drop to reorder list</span>
        </div>
      </div>
    </div>
  );
}

export default App;
