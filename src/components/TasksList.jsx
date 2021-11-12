import React from 'react';

export default function TasksList(props) {
  const handleIncrement = () => {
    props.onIncrement(props.task);
  };

  const handleDecrement = () => {
    props.onDecrement(props.task);
  };

  const handleDelete = (task) => {
    props.onDelete(props.task);
  };

  return (
    <li className="task">
      <span className="task-name">{props.task.name}</span>
      <button className="task-plus task-btn" onClick={handleIncrement}>
        ➕
      </button>
      <p className="task-count">{props.task.count}</p>
      <button className="task-minus task-btn" onClick={handleDecrement}>
        ➖
      </button>
      <button className="task-bin task-btn" onClick={handleDelete}>
        🗑
      </button>
    </li>
  );
}
