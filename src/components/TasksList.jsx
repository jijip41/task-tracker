import React from 'react';

export default function TasksList(props) {
  const { name, count } = props;
  return (
    <li className="task">
      <span className="task-name">{name}</span>
      <span className="task-count">{count}</span>
      <button className="task-plus task-btn">➕</button>
      <button className="task-minus task-btn">➖</button>
      <button className="task-bin task-btn">🗑</button>
    </li>
  );
}
