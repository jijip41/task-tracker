import React from 'react';

export default function Task({ task, onIncrement, onDecrement, onDelete }) {
  const handleIncrement = () => {
    onIncrement(task);
  };

  const handleDecrement = () => {
    onDecrement(task);
  };

  const handleDelete = () => {
    onDelete(task);
  };

  return (
    <li className="task" key={task.id}>
      <span className="task-name">{task.name}</span>
      <button className="task-plus task-btn" onClick={handleIncrement}>
        <i className="fas fa-plus"></i>
      </button>
      <p className="task-count">{task.count}</p>
      <button className="task-minus task-btn" onClick={handleDecrement}>
        <i className="fas fa-minus"></i>
      </button>
      <button className="task-bin task-btn" onClick={handleDelete}>
        <i className="fas fa-trash-alt"></i>
      </button>
    </li>
  );
}
