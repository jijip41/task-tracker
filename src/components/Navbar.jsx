import React from 'react';
// import TasksList from './TasksList';

export default function Navbar(props) {
  return (
    <h1>
      💕 Task Tracker <span className="round">{props.taskCount}</span>
    </h1>
  );
}
