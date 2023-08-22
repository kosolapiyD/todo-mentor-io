import React, { useState } from 'react';
import './ListSummary.scss';

type Props = {
  onFilterClick: (filter: string) => void;
  clearCompleted: () => void;
  todosLength: number;
};

const ListSummary = ({ onFilterClick, clearCompleted, todosLength }: Props) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterClick = (ev: React.MouseEvent<HTMLElement>) => {
    const clickedElement = ev.target as HTMLElement;
    const elemValue = clickedElement.innerHTML.toLowerCase();
    if (
      elemValue === 'all' ||
      elemValue === 'active' ||
      elemValue === 'completed'
    ) {
      setActiveFilter(elemValue);
      onFilterClick(elemValue);
    }
  };

  return (
    <div className='list-summary'>
      <div className='items-left'>
        <span>{todosLength} item left</span>
      </div>
      <div className='filter-box' onClick={(ev) => handleFilterClick(ev)}>
        <div
          className='filter'
          data-active={activeFilter === 'all' ? true : false}
        >
          <span>All</span>
        </div>
        <div
          className='filter'
          data-active={activeFilter === 'active' ? true : false}
        >
          <span>Active</span>
        </div>
        <div
          className='filter'
          data-active={activeFilter === 'completed' ? true : false}
        >
          <span>Completed</span>
        </div>
      </div>
      <div className='clear-completed'>
        <span onClick={clearCompleted}>Clear Completed</span>
      </div>
    </div>
  );
};

export default ListSummary;
