import React from 'react';
// import TasksList from './TasksList';

export default function Navbar(props) {
  return (
    <header>
      <span>Task Tracker </span> <span className="round">{props.allCount}</span>
    </header>
  );
}
