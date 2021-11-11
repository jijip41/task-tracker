import React from 'react';

export default function TasksList(props) {
  const { taskName, count } = props.task;
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
      <span className="task-name">{taskName}</span>
      <span className="task-count">{count}</span>
      <button className="task-plus task-btn" onClick={handleIncrement}>
        ➕
      </button>
      <button className="task-minus task-btn" onClick={handleDecrement}>
        ➖
      </button>
      <button className="task-bin task-btn" onClick={handleDelete}>
        🗑
      </button>
    </li>
  );
}
