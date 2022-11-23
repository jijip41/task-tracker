import React from 'react';
import Task from './Task';

export default function Tasks({
  tasks,
  handleIncrement,
  handleDecrement,
  handleDelete,
}) {
  return (
    <ul>
      {tasks
        .map((task) => (
          <Task
            key={task.id}
            task={task}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onDelete={handleDelete}
          />
        ))
        .reverse()}
    </ul>
  );
}
