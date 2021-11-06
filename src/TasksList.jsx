import React from 'react';

export default function TasksList(props) {
  // const storage = window.localStorage;
  return (
    <>
      <span className="task-name">Coding</span>
      <span className="task-count">0</span>
      <button className="task-plus task-btn">➕</button>
      <button className="task-minus task-btn">➖</button>
      <button className="task-bin task-btn">🗑</button>
    </>
  );
}
