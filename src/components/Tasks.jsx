import React from 'react';
import TasksList from './TasksList';

// Container Component

export default function Tasks(props) {
  // State => Array

  return (
    <ul>
      {props.tasks.map((task) => (
        <TasksList
          key={task.id}
          task={task}
          onIncrement={props.handleIncrement}
          onDecrement={props.handleDecrement}
          onDelete={props.handleDelete}
        />
      ))}
    </ul>
  );
}
