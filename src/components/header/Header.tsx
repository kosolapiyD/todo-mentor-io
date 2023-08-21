import { useContext, useState } from 'react';
import moonIcon from '../../assets/icon-moon.svg';
import sunIcon from '../../assets/icon-sun.svg';
import { ThemeContext } from '../../context/ThemeContext';
import './Header.scss';

type Props = {
  addTodo: (inputText: string) => void;
};

const Header = ({ addTodo }: Props) => {
  const { setTheme } = useContext(ThemeContext);
  const [inputText, setInputText] = useState('');

  const handleIconClick = () => {
    const icon = document.querySelector('img');
    if (icon?.getAttribute('src') === moonIcon) {
      icon.setAttribute('src', sunIcon);
      setTheme('light-theme');
    } else {
      icon?.setAttribute('src', moonIcon);
      setTheme('dark-theme');
    }
  };

  const handleAddClick = () => {
    if (inputText) {
      addTodo?.(inputText);
      setInputText('');
    }
  };

  return (
    <div className='header-container'>
      <div className='upperBox'>
        <div className='title'>
          <span>TODO</span>
        </div>
        <div className='theme-switcher'>
          <img src={sunIcon} alt='moon' onClick={handleIconClick} />
        </div>
      </div>
      <div className='inputBox'>
        <div className='circle'></div>
        <input
          className='todo-input'
          type='text'
          placeholder='Add a new todo...'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        {inputText.length > 0 && (
          <div className='add' onClick={handleAddClick}>
            Add
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
